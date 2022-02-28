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
                  <div class="col-lg-12 grid-margin stretch-card">
                    <div class="card">
                      <div class="card-body">
                        <h4 class="card-title">Detail Member</h4>
                        <table class="table table-striped text-center">
                          <thead>
                            <tr>
                              <th class="font-weight-bold">Icon</th>
                              <th class="font-weight-bold">Id Member</th>
                              <th class="font-weight-bold">Nama</th>
                              <th class="font-weight-bold">Alamat</th>
                              <th class="font-weight-bold">Jenis Kelamin</th>
                              <th class="font-weight-bold">Telepon</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <avataaars
                                  width="50"
                                  height="50"
                                ></avataaars>
                              </td>
                              <td>{{ member.id_member }}</td>
                              <td>{{ member.nama }}</td>
                              <td>{{ member.alamat }}</td>
                              <td>{{ member.jenis_kelamin }}</td>
                              <td>{{ member.tlp }}</td>
                            </tr>
                          </tbody>
                        </table>
                        <br /><br />
                        <router-link
                          type="button"
                          class="btn btn-primary btn-rounded btn-fw"
                          :to="{ path: '/member' }"
                        >
                          <i class="icon-cloud-upload btn-icon-prepend"></i>
                          Member Home
                        </router-link>
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
import Avataaars from "vuejs-avataaars";
export default {
  components: {
    Avataaars,
  },
  data() {
    return {
      member: {},
    };
  },
  created() {
    this.axios
      .get(
        `http://localhost/laundry_baru_8/public/api/get_member_id/${this.$route.params.id}`,
        { headers: { Authorization: "Bearer" + this.$store.state.token } }
      )
      .then((res) => {
        this.member = res.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>