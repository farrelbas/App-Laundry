<template>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper">
      <sidebar-component></sidebar-component>
      <navbar-component></navbar-component>
      <div class="main-panel">
        <div class="content-wrapper">
          <br /><br />
          <div class="row purchace-popup">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Edit User</h4>
                  <form @submit.prevent="edit" class="forms-sample">
                    <div class="form-group row">
                      <label
                        for="exampleInputUsername2"
                        class="col-sm-3 col-form-label"
                        >Nama</label
                      >
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputUsername2"
                          placeholder="Masukan Nama"
                          v-model="user.nama"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="exampleInputUsername2"
                        class="col-sm-3 col-form-label"
                        >Username</label
                      >
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputUsername2"
                          placeholder="Masukan Username"
                          v-model="user.username"
                        />
                      </div>
                    </div>
                    <!-- <div class="form-group row">
                      <label
                        for="exampleInputUsername2"
                        class="col-sm-3 col-form-label"
                        >Password</label
                      >
                      <div class="col-sm-9">
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputUsername2"
                          placeholder="Masukan Password"
                          v-model="user.password"
                        />
                      </div>
                    </div> -->
                    <div class="form-group row">
                      <label
                        for="exampleInputUsername2"
                        class="col-sm-3 col-form-label"
                        >Role</label
                      >
                      <div class="col-sm-9">
                        <select
                          class="form-control"
                          placeholder="Pick Role"
                          id="exampleFormControlSelect2"
                          v-model="user.role"
                        >
                          <option value="admin">ADMIN</option>
                          <option value="kasir">KASIR</option>
                          <option value="owner">OWNER</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="exampleInputUsername2"
                        class="col-sm-3 col-form-label"
                        >Id Outlet</label
                      >
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputUsername2"
                          placeholder="Masukan Id Outlet"
                          v-model="user.id_outlet"
                        />
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">
                      Submit
                    </button>
                    <button class="btn btn-light">Cancel</button>
                  </form>
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
    this.axios
      .get(
        `http://localhost/laundry_baru_8/public/api/get_user_id/${this.$route.params.id}`,
        { headers: { Authorization: "Bearer" + this.$store.state.token } }
      )
      .then((res) => {
        this.user = res.data;
      });
  },
  methods: {
    edit() {
      this.axios
        .put(
          `http://localhost/laundry_baru_8/public/api/update_user/${this.$route.params.id}`,
          this.user,
          {
            headers: { Authorization: "Bearer" + this.$store.state.token },
          }
        )
        .then(() => {
          this.$router.push("/user");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>