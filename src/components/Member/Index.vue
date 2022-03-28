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
                          <h4 class="card-title mb-sm-0">Our Member</h4>
                        </div>
                        <div class="form-group">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              name="search"
                              v-model="search"
                              placeholder="Search Name"
                              aria-label="Recipient's username"
                              aria-describedby="basic-addon2"
                            />
                            <div class="input-group-append">
                              <button
                                class="btn btn-sm btn-primary"
                                v-on:click="cari_data()"
                                type="button"
                              >
                                Search
                              </button>
                            </div>
                          </div>
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
                                <th class="font-weight-bold">ID Member</th>
                                <th class="font-weight-bold">Nama</th>
                                <th class="font-weight-bold">Alamat</th>
                                <th class="font-weight-bold">Jenis Kelamin</th>
                                <th class="font-weight-bold">Telepon</th>
                                <th class="font-weight-bold">Kegiatan</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(m, index) in member" :key="index">
                                <td>
                                  {{ index + 1 }}
                                </td>
                                <td>
                                  {{ m.nama }}
                                </td>
                                <td>
                                  {{ m.alamat }}
                                </td>
                                <td>
                                  {{ m.jenis_kelamin }}
                                </td>
                                <td>
                                  {{ m.tlp }}
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
                                        name: 'editmember',
                                        params: {
                                          id: m.id_member,
                                          params: { id: m.id_member },
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
                                        name: 'detailmember',
                                        params: {
                                          id: m.id_member,
                                          params: { id: m.id_member },
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
                                    @click="deleteMember(m.id_member)"
                                  >
                                    <i class="icon-ban"></i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <br /><br />
                        <router-link
                          type="button"
                          class="btn btn-primary btn-rounded btn-fw"
                          :to="{ name: 'tambahmember' }"
                        >
                          <i class="icon-cloud-upload btn-icon-prepend"></i>
                          Add Member
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
  name: "Member",
  data() {
    return {
      responseData: [],
      member: {},
      search: "",
    };
  },
  created() {
    var data = JSON.parse(this.$store.state.datauser);
    var role = data.role;
    if (role == "owner") {
      this.$Swal("Failed", "Anda Tidak Dapat Mengakses Halaman Ini", "error");
      this.$router.push("/");
    }

    // this.axios
    //   .get("http://localhost/laundry_baru_8/public/api/get_member", {
    //     headers: { Authorization: "Bearer" + this.$store.state.token },
    //   })
    //   .then((res) => {
    //     this.member = res.data;
    //   });
  },
  // computed: {
  //   logItemsCount() {
  //     return Object.keys(this.member).length;
  //   },
  // },
  // mounted() {
  //   this.axios
  //     .get("http://localhost/laundry_baru_8/public/api/count_member", {
  //       headers: { Authorization: "Bearer" + this.$store.state.token },
  //     })
  //     .then((response) => {
  //       this.member = response.data;
  //       this.responseData = response.catch((error) => console.log(error));
  //     });
  // },
  methods: {
    dt_member: function () {
      this.axios
        .get("http://localhost/laundry_baru_8/public/api/get_member", {
          headers: { Authorization: `Bearer` + this.$store.state.token },
        })
        .then((res) => {
          this.member = res.data;
        });
    },
    cari_data: function () {
      var data_cari = "";
      if (this.search == "") {
        data_cari = "";
      } else {
        data_cari = "/" + this.search;
      }
      this.axios
        .get(
          "http://localhost/laundry_baru_8/public/api/get_member" + data_cari,
          {
            headers: { Authorization: `Bearer` + this.$store.state.token },
          }
        )
        .then((res) => {
          this.member = res.data;
        });
    },
    deleteMember(id_member) {
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
                `http://localhost/laundry_baru_8/public/api/delete_member/${id_member}`,
                {
                  headers: {
                    Authorization: `Bearer ` + this.$store.state.token,
                  },
                }
              )
              .then(() => {
                let i = this.member
                  .map((item) => item.id_member)
                  .indexOf(id_member);
                this.member.splice(i, 1);
              })
          );
        } else {
          this.$swal("Cancelled", "Your Data Is Still Intact", "info");
        }
      });
    },
  },
  mounted() {
    this.dt_member();
  },
};
</script>