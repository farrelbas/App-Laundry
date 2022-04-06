<template>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper">
      <sidebar-component></sidebar-component>
      <navbar-component></navbar-component>
      <div class="main-panel">
        <div class="content-wrapper">
          <br /><br />
          <div class="row purchace-popup">
            <div class="col-12 stretch-card grid-margin">
              <div class="card card-secondary">
                <div class="row">
                  <div class="col-md-12 grid-margin stretch-card">
                    <div class="card">
                      <div class="card-body">
                        <div class="d-sm-flex align-items-center mb-4">
                          <h4 class="card-title mb-sm-0">Our User</h4>
                        </div>
                        <div
                          class="
                            table-responsive
                            border
                            rounded
                            p-1
                            text-center
                          "
                        >
                          <table class="table">
                            <thead>
                              <tr>
                                <th class="font-weight-bold">ID User</th>
                                <th class="font-weight-bold">Nama</th>
                                <th class="font-weight-bold">Username</th>
                                <!-- <th class="font-weight-bold">Password</th> -->
                                <th class="font-weight-bold">Role</th>
                                <th class="font-weight-bold">Nama Outlet</th>
                                <th class="font-weight-bold">Kegiatan</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(u, index) in user" :key="index">
                                <td>
                                  {{ index + 1 }}
                                </td>
                                <td>
                                  {{ u.name }}
                                </td>
                                <td>
                                  {{ u.username }}
                                </td>
                                <!-- <td>
                                  {{ u.password }}
                                </td> -->
                                <td>
                                  {{ u.role }}
                                </td>
                                <td>
                                  {{ u.nama }}
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    class="
                                      btn
                                      btn-inverse-primary
                                      btn-rounded
                                      btn-icon
                                    "
                                  >
                                    <router-link
                                      :to="{
                                        name: 'edituser',
                                        params: {
                                          id: u.id,
                                          params: { id: u.id },
                                        },
                                      }"
                                    >
                                      <i class="icon-settings"></i>
                                    </router-link>
                                  </button>
                                  &nbsp;
                                  <button
                                    type="button"
                                    class="
                                      btn
                                      btn-inverse-success
                                      btn-rounded
                                      btn-icon
                                    "
                                  >
                                    <router-link
                                      :to="{
                                        name: 'detailuser',
                                        params: {
                                          id: u.id,
                                          params: { id: u.id },
                                        },
                                      }"
                                    >
                                      <i class="icon-info"></i>
                                    </router-link>
                                  </button>
                                  &nbsp;
                                  <button
                                    type="button"
                                    class="
                                      btn
                                      btn-inverse-danger
                                      btn-rounded
                                      btn-icon
                                    "
                                    @click="deleteUser(u.id)"
                                  >
                                    <i class="icon-ban"></i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <router-link
                          type="button"
                          class="btn btn-primary btn-rounded btn-fw"
                          :to="{ name: 'tambahuser' }"
                        >
                          <i class="icon-cloud-upload btn-icon-prepend"></i>
                          Add User
                        </router-link>
                        <br />
                        <div class="d-flex mt-4 flex-wrap">
                          <p class="text-muted">
                            <!-- Showing {{ logItemsCount }} entries -->
                          </p>
                          <nav class="ml-auto">
                            <ul class="pagination separated pagination-info">
                              <li class="page-item">
                                <a href="#" class="page-link"
                                  ><i class="icon-arrow-left"></i
                                ></a>
                              </li>
                              <li class="page-item active">
                                <a href="#" class="page-link">1</a>
                              </li>
                              <li class="page-item">
                                <a href="#" class="page-link">2</a>
                              </li>
                              <li class="page-item">
                                <a href="#" class="page-link">3</a>
                              </li>
                              <li class="page-item">
                                <a href="#" class="page-link">4</a>
                              </li>
                              <li class="page-item">
                                <a href="#" class="page-link"
                                  ><i class="icon-arrow-right"></i
                                ></a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
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
      user: {},
    };
  },
  created() {
    var data = JSON.parse(this.$store.state.datauser);
    var role = data.role;
    if (role == "owner" || role == "kasir") {
      this.$swal("Failed", "Anda Tidak Dapat Mengakses Halaman Ini", "error");
      this.$router.push("/");
    }

    this.axios
      .get("http://localhost/laundry_baru_8/public/api/get_user", {
        headers: { Authorization: "Bearer" + this.$store.state.token },
      })
      .then((res) => {
        this.user = res.data;
      });
  },
  methods: {
    deleteUser(id) {
      this.$swal({
        title: "Are you sure?",
        text: "You can't revert your action",
        type: "Warning",
        showCancelButton: true,
        confirmButtonText: "Yes Delete it!",
        cancelButtonText: "No, Keep it!",
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.value) {
          this.$swal(
            "Deleted",
            "You successfully deleted this file",
            "success",
            this.axios
              .delete(
                `http://localhost/laundry_baru_8/public/api/delete_user/${id}`,
                {
                  headers: {
                    Authorization: `Bearer ` + this.$store.state.token,
                  },
                }
              )
              .then((result) => {
                if (result.data.success) {
                  this.$swal("Success", result.data.message, "success");
                  let i = this.user
                    .map((item) => item.id)
                    .indexOf(id);
                  this.user.splice(i, 1);
                }
              })
              .catch(() => {
                this.$swal("Cancelled", "Your Data Is Still Intact", "info");
              })
          );
        } else {
          this.$swal({
            title: "Cancelled",
            text: "Your Data Is Still Intact",
            type: "Warning",
            confirmButtonText: "Yes Delete it!",
            cancelButtonText: "No, Keep it!",
          });
        }
      });
    },
  },
};
</script>