<template>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper">
      <sidebar-component></sidebar-component>
      <navbar-component></navbar-component>
      <div class="main-panel">
        <div class="content-wrapper">
          <br /><br />
          <div class="row purchace-popup">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card card-secondary">
                <div class="row">
                  <div class="col-lg-12 grid-margin stretch-card">
                    <div class="card">
                      <div class="card-body">
                        <div class="card-header py-3">
                          <h4 class="card-title">Detail Transaksi</h4>
                        </div>
                        <table class="table table-striped text-center">
                          <thead>
                            <tr>
                              <th class="font-weight-bold">Member</th>
                              <th class="font-weight-bold">Tanggal Order</th>
                              <th class="font-weight-bold">Batas Waktu</th>
                              <th class="font-weight-bold">Status Laundry</th>
                              <th class="font-weight-bold">
                                Tanggal Pembayaran
                              </th>
                              <th class="font-weight-bold">
                                Status Pembayaran
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{{ transaksi.nama }}</td>
                              <td>
                                {{ transaksi.tgl_order | moment("DD/MM/YYYY") }}
                              </td>
                              <td>
                                {{
                                  transaksi.batas_waktu | moment("DD/MM/YYYY")
                                }}
                              </td>
                              <td>{{ transaksi.status }}</td>
                              <td>
                                {{ transaksi.tgl_bayar | moment("DD/MM/YYYY") }}
                              </td>
                              <td>{{ transaksi.dibayar }}</td>
                            </tr>
                          </tbody>
                        </table>
                        <br />
                        <div class="row mt-3">
                          <div class="col">
                            <button
                              :disabled="disableStatus"
                              type="button"
                              class="btn btn-warning"
                              @click="ubahStatus(id_transaksi)"
                            >
                              Ubah Status Laundry
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br /><br />
                <!-- <div class="card-header py-3">
                  <h4 class="card-title">Data Transaksi</h4>
                </div> -->
                <div class="report">
                  <VueHtml2pdf
                    :show-layout="true"
                    :float-layout="false"
                    :enable-download="true"
                    :preview-modal="true"
                    :paginate-elements-by-height="1400"
                    filename="Struk Laundry"
                    :pdf-quality="2"
                    :manual-pagination="false"
                    pdf-format="a4"
                    pdf-orientation="portrait"
                    pdf-content-width="800px"
                    ref="html2Pdf"
                  >
                    <section slot="pdf-content">
                      <h1 class="text">Struk Transaksi</h1>
                      <h5 class="text">Jl Danau Batur D1D NO 20 Malang</h5>
                      <br /><br />
                      <div class="card-body">
                        <table class="table">
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>Jenis</th>
                              <th>Jumlah (KG / Satuan)</th>
                              <th>Subtotal</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(d, index) in detail" :key="index">
                              <td>{{ index + 1 }}</td>
                              <td>{{ d.jenis }}</td>
                              <td>{{ d.quantity }}</td>
                              <td>Rp {{ d.subtotal }}</td>
                            </tr>
                            <tr v-if="total != ''">
                              <td colspan="3" class="text-right">Total</td>
                              <td>
                                <h6 class="text font-weight-bold">Rp {{ total }}</h6>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </section>
                  </VueHtml2pdf>
                  <br />
                  <div class="col-md-18 grid-margin stretch-card">
                    <button
                      type="button"
                      @click="generateReport"
                      class="btn btn-dark"
                    >
                      <i class="icon-printer"></i>
                      Cetak Struk
                    </button>
                    <br />
                    <button
                      :disabled="disableBayar"
                      type="button"
                      class="btn btn-success mr-3"
                      @click="bayar"
                    >
                      Bayar
                    </button>
                    <router-link
                      v-if="
                        transaksi.status != 'Diambil' &&
                        transaksi.status != 'Selesai' &&
                        transaksi.dibayar != 'Dibayar'
                      "
                      :to="{
                        name: 'tambahdetail',
                        params: { id: this.id_transaksi },
                      }"
                      class="btn btn-primary"
                      >Tambah Detail Transaksi</router-link
                    >
                  </div>
                </div>
                <!-- <div class="card-body">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Jenis</th>
                        <th>Jumlah (KG / Satuan)</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(d, index) in detail" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ d.jenis }}</td>
                        <td>{{ d.quantity }}</td>
                        <td>Rp {{ d.subtotal }}</td>
                      </tr>
                      <tr v-if="total != ''">
                        <td colspan="3" class="text-right">Total</td>
                        <td>
                          <h6 class="font-weight-bold">Rp {{ total }}</h6>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button
                    :disabled="disableBayar"
                    type="button"
                    class="btn btn-success mr-3"
                    @click="bayar"
                  >
                    Bayar
                  </button>
                  <router-link
                    v-if="
                      transaksi.status != 'Diambil' &&
                      transaksi.status != 'Selesai' &&
                      transaksi.dibayar != 'Dibayar'
                    "
                    :to="{
                      name: 'tambahdetail',
                      params: { id: this.id_transaksi },
                    }"
                    class="btn btn-primary"
                    >Tambah Detail Transaksi</router-link
                  >
                </div> -->
              </div>
              <footer-component></footer-component>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.report {
  width: 800px;
  margin: 20px auto 0 auto;
}
table {
  border-collapse: collapse;
  width: 100%;
}
h1,
h5 {
  text-align: center;
}
th,
td {
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

tr:hover {
  background-color: rgb(154, 155, 158);
}
</style>
<script>
export default {
  data() {
    return {
      id_transaksi: this.$route.params.id,
      transaksi: {},
      detail: {},
      total: "",
    };
  },
  created() {
    this.axios
      .get(
        `http://localhost/laundry_baru_8/public/api/transaksi/${this.id_transaksi}`,
        {
          headers: { Authorization: "Bearer" + this.$store.state.token },
        }
      )
      .then((res) => {
        this.transaksi = res.data;
      })
      .catch((err) => console.log(err));
    this.axios
      .get(
        `http://localhost/laundry_baru_8/public/api/transaksi/detail/${this.id_transaksi}`,
        {
          headers: { Authorization: "Bearer" + this.$store.state.token },
        }
      )
      .then((res) => {
        this.detail = res.data;
      })
      .catch((err) => console.log(err));
    this.axios
      .get(
        `http://localhost/laundry_baru_8/public/api/transaksi/total/${this.id_transaksi}`,
        {
          headers: { Authorization: "Bearer" + this.$store.state.token },
        }
      )
      .then((res) => {
        this.total = res.data.total;
      });
  },
  computed: {
    disableStatus() {
      if (
        this.transaksi.status == "Selesai" ||
        this.transaksi.status == "Diambil" ||
        this.detail.length == 0
      ) {
        return true;
      } else {
        return false;
      }
    },
    disableBayar() {
      if (
        this.transaksi.status == "baru" ||
        this.transaksi.status == "proses" ||
        this.transaksi.status == "diambil"
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    ubahStatus() {
      if (this.transaksi.status == "baru") {
        this.transaksi.status = "proses";
      } else {
        this.transaksi.status = "selesai";
      }
      this.axios
        .post(
          `http://localhost/laundry_baru_8/public/api/transaksi/status/${this.id_transaksi}`,
          this.transaksi,
          {
            headers: { Authorization: "Bearer" + this.$store.state.token },
          }
        )
        .then(() => {
          // this.$router.push(`/detail/${this.id_transaksi}`);
          this.$router.go(1);
        })
        .catch((err) => console.log(err));
    },
    bayar() {
      this.axios
        .post(
          `http://localhost/laundry_baru_8/public/api/transaksi/bayar/${this.id_transaksi}`,
          this.transaksi,
          {
            headers: { Authorization: "Bearer" + this.$store.state.token },
          }
        )
        .then(() => {
          this.$router.push("/transaksi");
          // this.$router.go(1);
        })
        .catch((err) => console.log(err));
    },
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
};
</script>
