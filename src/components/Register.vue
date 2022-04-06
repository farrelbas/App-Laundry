<template>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth">
        <div class="row flex-grow">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left p-5">
              <h4>New here?</h4>
              <h6 class="font-weight-light">
                Signing up is easy. It only takes a few steps
              </h6>
              <br /><br />
              <form @submit.prevent="tambah" class="pt-3">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Input Name</label>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="exampleInputUsername1"
                    placeholder="Name"
                    v-model="user.name"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Input Usename</label>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Username"
                    v-model="user.username"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Input Password</label>
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    placeholder="Password"
                    v-model="user.password"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect2">Select Role</label>
                  <select
                    class="form-control"
                    id="exampleFormControlSelect2"
                    v-model="user.role"
                  >
                    <option value="admin">ADMIN</option>
                    <option value="kasir">KASIR</option>
                    <option value="owner">OWNER</option>
                  </select>
                </div>
                <!-- <div class="form-group">
                  <label for="exampleFormControlSelect3">Select Outlet</label>
                  <select
                    class="form-control form-control-sm"
                    id="exampleFormControlSelect3"
                    v-model="user.id_outlet"
                  >
                    <option
                      v-for="(o, index) in outlet"
                      :key="index"
                      :value="o.id_outlet"
                    >
                      {{ o.nama }}
                    </option>
                  </select>
                </div> -->
                <div class="mt-3">
                  <button type="submit" class="btn btn-primary mr-2">
                    Submit
                  </button>
                </div>
                <div class="text-center mt-4 font-weight-light">
                  Already have an account?
                  <router-link :to="{ path: '/login' }">
                    <a class="text-primary">Login</a>
                  </router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
  <!-- container-scroller -->
</template>

<script>
export default {
  data() {
    return {
      user: {},
      // outlet: {},
    };
  },
  // created() {
  //   this.axios
  //     .get("http://localhost/laundry_baru_8/public/api/get_outlet_reg")
  //     .then((res) => {
  //       this.outlet = res.data;
  //     })
  //     .catch((err) => console.log(err));
  // },
  methods: {
    tambah() {
      this.axios
        .post(
          "http://localhost/laundry_baru_8/public/api/register",
          this.user,
          {
            headers: { Authorization: "Bearer" + this.$store.state.token },
          }
        )
        .then(() => {
          this.$router.push("/login");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>