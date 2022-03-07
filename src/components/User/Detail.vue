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
                        <h4 class="card-title">Detail Userr</h4>
                        <table class="table table-striped text-center">
                          <thead>
                            <tr>
                              <th class="font-weight-bold">Icon</th>
                              <th class="font-weight-bold">Id User</th>
                              <th class="font-weight-bold">Username</th>
                              <!-- <th class="font-weight-bold">Password</th> -->
                              <th class="font-weight-bold">Role</th>
                              <th class="font-weight-bold">Id Outlet</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <avataaars width="50" height="50"></avataaars>
                              </td>
                              <td>{{ user.id }}</td>
                              <td>{{ user.username }}</td>
                              <!-- <td>{{ user.password }}</td> -->
                              <td>{{ user.role }}</td>
                              <td>{{ user.id_outlet }}</td>
                            </tr>
                          </tbody>
                        </table>
                        <br /><br />
                        <router-link
                          type="button"
                          class="btn btn-primary btn-rounded btn-fw"
                          :to="{ path: '/user' }"
                        >
                          <i class="icon-cloud-upload btn-icon-prepend"></i>
                          User Home
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
      user: {},
    };
  },
  created() {
    this.axios
      .get(
        `http://localhost/laundry_baru_8/public/api/get_user_id/${this.$route.params.id}`,
        { headers: { Authorization: "Bearer" + this.$store.state.token } }
      )
      .then((res) => {
        this.user = res.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>