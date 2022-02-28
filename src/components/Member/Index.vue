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
                            <!-- <tbody
                              v-for="member in member"
                              :key="member.id_member"
                            > -->
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
                                  <router-link
                                    type="button"
                                    class="
                                      btn
                                      btn-inverse-primary
                                      btn-rounded
                                      btn-icon
                                    "
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
                                  <router-link
                                    type="button"
                                    class="
                                      btn
                                      btn-inverse-success
                                      btn-rounded
                                      btn-icon
                                    "
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
                                  <button
                                    type="button"
                                    class="
                                      btn
                                      btn-inverse-danger
                                      btn-rounded
                                      btn-icon
                                    "
                                    @click="hapus(m.id_member)"
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
  data() {
    return {
      responseData: [],
      member: {},
    };
  },
  created() {
    this.axios
      .get("http://localhost/laundry_baru_8/public/api/get_member", {
        headers: { Authorization: "Bearer" + this.$store.state.token },
      })
      .then((res) => {
        this.member = res.data;
      });
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
    hapus(id_member) {
      this.axios
        .delete(
          `http://localhost/laundry_baru_8/public/api/delete_member/${id_member}`,
          {
            headers: { Authorization: `Bearer ` + this.$store.state.token },
          }
        )
        .then(() => {
          let i = this.member.map((item) => item.id_member).indexOf(id_member);
          this.member.splice(i, 1);
        });
    },
  },
};
</script>