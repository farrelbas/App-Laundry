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
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Data Transaksi</h4>
                  <!-- <router-link
                    to="/transaksi/tambah"
                    class="btn btn-info btn-icon-split"
                  >
                    <span class="icon text-white-50">
                      <i class="fas fa-plus"></i>
                    </span>
                    <span class="text">Tambah</span>
                  </router-link> -->
                  <table class="table table-striped text-center">
                    <thead>
                      <tr>
                        <th>Nomer Transaksi</th>
                        <th>Nama Member</th>
                        <th>Tanggal Order</th>
                        <th>Batas Waktu</th>
                        <th>Tanggal Bayar</th>
                        <th>Status</th>
                        <th>Dibayar</th>
                        <th>Id User</th>
                        <!-- <th>Outlet</th> -->
                        <th>Kegiatan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(t, index) in transaksi" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ t.nama }}</td>
                        <td>{{ t.tgl_order | moment("DD/MM/YYYY") }}</td>
                        <td>{{ t.batas_waktu | moment("DD/MM/YYYY") }}</td>
                        <td>{{ t.tgl_bayar | moment("DD/MM/YYYY") }}</td>
                        <td>
                          <span
                            v-if="t.status == 'baru'"
                            class="badge bg-info text-light"
                            >Baru</span
                          >
                          <span
                            v-if="t.status == 'proses'"
                            class="badge bg-warning text-dark"
                            >Proses</span
                          >
                          <span
                            v-if="t.status == 'selesai'"
                            class="badge bg-success text-light"
                            >Selesai</span
                          >
                          <span
                            v-if="t.status == 'diambil'"
                            class="badge bg-secondary text-light"
                            >Di Ambil</span
                          >
                        </td>
                        <td>
                          <span
                            v-if="t.dibayar == 'dibayar'"
                            class="badge bg-info text-light"
                            >Di Bayar</span
                          >
                          <span
                            v-if="t.dibayar == 'belum dibayar'"
                            class="badge bg-warning text-dark"
                            >Belum Dibayar</span
                          >
                        </td>
                        <td>{{ t.id }}</td>
                        <td>
                          <!-- <router-link
                            type="button"
                            class="btn btn-inverse-primary btn-rounded btn-icon"
                            :to="{
                              name: 'edittransaksi',
                              params: {
                                id: t.id_transaksi,
                                params: { id: t.id_transaksi },
                              },
                            }"
                          >
                            <i class="icon-settings"></i>
                          </router-link> -->
                          <router-link
                            type="button"
                            class="btn btn-inverse-success btn-rounded btn-icon"
                            :to="{
                              name: 'detailtransaksi',
                              params: {
                                id: t.id_transaksi,
                                params: { id: t.id_transaksi },
                              },
                            }"
                          >
                            <i class="icon-info"></i>
                          </router-link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <router-link
                    type="button"
                    class="btn btn-primary btn-rounded btn-fw"
                    :to="{ name: 'tambahtransaksi' }"
                  >
                    <i class="icon-cloud-upload btn-icon-prepend"></i>
                    Add Transaksi
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer-component></footer-component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transaksi: {},
    };
  },
  created() {
    var data = JSON.parse(this.$store.state.datauser);
    var role = data.role;
    if (role == "owner") {
      this.$swal("Failed","Anda Tidak Dapat Mengakses Halaman Ini", "error");
      this.$router.push("/");
    }

    this.axios
      .get("http://localhost/laundry_baru_8/public/api/get_transaksi", {
        headers: { Authorization: "Bearer" + this.$store.state.token },
      })
      .then((res) => {
        this.transaksi = res.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>