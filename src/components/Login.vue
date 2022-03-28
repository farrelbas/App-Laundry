<template>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth">
        <div class="row flex-grow">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left p-5">
              <div class="brand-logo">
                <!-- <img src="../../images/logo.svg" /> -->
              </div>
              <h4>Hello! let's get started</h4>
              <h6 class="font-weight-light">Sign in to continue.</h6>
              <form class="pt-3 user" @submit.prevent="login">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="exampleInputEmail1"
                    placeholder="Username"
                    v-model="account.username"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    v-model="account.password"
                  />
                </div>
                <div class="mt-3">
                  <button
                    type="submit"
                    class="
                      btn btn-block btn-primary btn-lg
                      font-weight-medium
                      auth-form-btn
                    "
                  >
                    SIGN IN
                  </button>
                  <!-- <a
                    class="
                      btn btn-block btn-primary btn-lg
                      font-weight-medium
                      auth-form-btn
                    "
                    >SIGN IN</a
                  > -->
                </div>
                <div
                  class="my-2 d-flex justify-content-between align-items-center"
                >
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input" /> Keep me
                      signed in
                    </label>
                  </div>
                  <a href="#" class="auth-link text-black">Forgot password?</a>
                </div>
              </form>
              <div class="text-center mt-4 font-weight-light">
                Don't have an account?
                <router-link :to="{ path: '/register' }">
                  <a class="text-primary">Create</a>
                </router-link>
              </div>
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
      account: {},
    };
  },
  methods: {
    login() {
      this.axios
        .post("http://localhost/laundry_baru_8/public/api/login", this.account)

        .then((res) => {
          if (res.data.success) {
            this.$store.commit("setToken", res.data.token);
            this.$store.commit("setUser", JSON.stringify(res.data.user));
            this.$store.commit("setOutlet", JSON.stringify(res.data.outlet));
            this.$router.push("/");
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
