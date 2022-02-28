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
                        <!-- <div class="row">
                          <div class="col">
                            <div
                              class="
                                text-xs
                                font-weight-bold
                                text-primary text-uppercase
                              "
                            >
                              Member
                            </div>
                            <div
                              class="
                                h6
                                mb-0
                                font-weight-bold
                                text-gray-800
                                mb-2
                              "
                            >
                              {{ transaksi.nama }}
                            </div>
                            <div
                              class="
                                text-xs
                                font-weight-bold
                                text-primary text-uppercase
                              "
                            >
                              Tanggal Order
                            </div>
                            <div
                              class="
                                h6
                                mb-0
                                font-weight-bold
                                text-gray-800
                                mb-2
                              "
                            >
                              {{ transaksi.tgl_order | moment("DD/MM/YYYY") }}
                            </div>
                            <div
                              class="
                                text-xs
                                font-weight-bold
                                text-primary text-uppercase
                              "
                            >
                              Batas Waktu
                            </div>
                            <div
                              class="
                                h6
                                mb-0
                                font-weight-bold
                                text-gray-800
                                mb-2
                              "
                            >
                              {{ transaksi.batas_waktu | moment("DD/MM/YYYY") }}
                            </div>
                          </div>
                          <div class="col">
                            <div
                              class="
                                text-xs
                                font-weight-bold
                                text-primary text-uppercase
                              "
                            >
                              Status Laundry
                            </div>
                            <div
                              class="
                                h6
                                mb-0
                                font-weight-bold
                                text-gray-800
                                mb-2
                              "
                            >
                              {{ transaksi.status }}
                            </div>
                            <div
                              class="
                                text-xs
                                font-weight-bold
                                text-primary text-uppercase
                              "
                            >
                              Tanggal Pembayaran
                            </div>
                            <div
                              v-if="transaksi.tgl_bayar == null"
                              class="
                                h6
                                mb-0
                                font-weight-bold
                                text-gray-800
                                mb-2
                              "
                            >
                              -
                            </div>
                            <div
                              v-else
                              class="
                                h6
                                mb-0
                                font-weight-bold
                                text-gray-800
                                mb-2
                              "
                            >
                              {{ transaksi.tgl_bayar | moment("DD/MM/YYYY") }}
                            </div>
                            <div
                              class="
                                text-xs
                                font-weight-bold
                                text-primary text-uppercase
                              "
                            >
                              Status Pembayaran
                            </div>
                            <div
                              v-if="transaksi.dibayar == 'belum dibayar'"
                              class="
                                h6
                                mb-0
                                font-weight-bold
                                text-gray-800
                                mb-2
                              "
                            >
                              Belum dibayar
                            </div>
                            <div
                              v-else
                              class="
                                h6
                                mb-0
                                font-weight-bold
                                text-gray-800
                                mb-2
                              "
                            >
                              Sudah dibayar
                            </div>
                          </div>
                        </div> -->
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
                <div class="card-header py-3">
                  <h4 class="card-title">Data Transaksi</h4>
                </div>
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
                </div>
              </div>
              <footer-component></footer-component>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
        this.transaksi.status == "Baru" ||
        this.transaksi.status == "Proses" ||
        this.transaksi.status == "Diambil"
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
  },
};
</script>
