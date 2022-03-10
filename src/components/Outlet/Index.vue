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
                  <h4 class="card-title">Our Outlet</h4>
                  <table class="table table-hover text-center">
                    <thead>
                      <tr>
                        <th>ID Outlet</th>
                        <th>Nama Outlet</th>
                        <th>Alamat Outlet</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(o, index) in outlet" :key="index">
                        <td>
                          {{ index + 1 }}
                        </td>
                        <td>
                          {{ o.nama }}
                        </td>
                        <td>
                          {{ o.alamat }}
                        </td>
                        <td>
                          <router-link
                            type="button"
                            class="btn btn-inverse-primary btn-rounded btn-icon"
                            :to="{
                              name: 'editoutlet',
                              params: {
                                id: o.id_outlet,
                                params: { id: o.id_outlet },
                              },
                            }"
                          >
                            <i class="icon-settings"></i>
                          </router-link>
                          <router-link
                            type="button"
                            class="btn btn-inverse-success btn-rounded btn-icon"
                            :to="{
                              name: 'detailoutlet',
                              params: {
                                id: o.id_outlet,
                                params: { id: o.id_outlet },
                              },
                            }"
                          >
                            <i class="icon-info"></i>
                          </router-link>
                          <button
                            type="button"
                            class="btn btn-inverse-danger btn-rounded btn-icon"
                            @click="hapus(o.id_outlet)"
                          >
                            <i class="icon-ban"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <router-link
                    type="button"
                    class="btn btn-primary btn-rounded btn-fw"
                    :to="{ name: 'tambahoutlet' }"
                  >
                    <i class="icon-cloud-upload btn-icon-prepend"></i>
                    Add Outlet
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
      outlet: {},
    };
  },
  created() {
    var data = JSON.parse(this.$store.state.datauser);
    var role = data.role;
    if (role == "kasir" || role == "owner") {
      this.$swal("Failed","Anda Tidak Dapat Mengakses Halaman Ini", "error");
      this.$router.push("/");
    }

    this.axios
      .get("http://localhost/laundry_baru_8/public/api/get_outlet", {
        headers: { Authorization: "Bearer" + this.$store.state.token },
      })
      .then((res) => {
        this.outlet = res.data;
      });
  },
  methods: {
    hapus(id_outlet) {
      this.axios
        .delete(
          `http://localhost/laundry_baru_8/public/api/delete_outlet/${id_outlet}`,
          {
            headers: { Authorization: `Bearer ` + this.$store.state.token },
          }
        )
        .then(() => {
          let i = this.outlet.map((item) => item.id_outlet).indexOf(id_outlet);
          this.outlet.splice(i, 1);
        });
    },
  },
};
</script>