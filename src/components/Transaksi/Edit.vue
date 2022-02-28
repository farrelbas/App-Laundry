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
                  <h4 class="card-title">Edit Transaksi</h4>
                  <form @submit.prevent="edit" class="forms-sample">
                    <div class="form-group row">
                      <label class="col-sm-3 col-form-label">Member</label>
                      <div class="col-sm-4">
                        <div class="form-check">
                          <select v-model="transaksi.id_member">
                            <option
                              v-for="(m, index) in member"
                              :key="index"
                              :value="m.id_member"
                            >
                              {{ m.nama }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">
                      Submit
                    </button>
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
      member: {},
      transaksi: {},
    };
  },
  created() {
    this.axios
      .get("http://localhost/laundry_baru_8/public/api/get_member", {
        headers: { Authorization: "Bearer" + this.$store.state.token },
      })
      .then((res) => {
        this.member = res.data;
      })
      .catch((err) => console.log(err));
    this.axios
      .get(
        `http://localhost/laundry_baru_8/public/api/transaksi/${this.$route.params.id}`,
        {
          headers: { Authorization: "Bearer" + this.$store.state.token },
        }
      )
      .then((res) => {
        this.transaksi = res.data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    edit() {
      this.axios
        .put(
          `http://localhost/laundry_baru_8/public/api/update_transaksi/${this.$route.params.id}`,
          this.transaksi,
          {
            headers: { Authorization: "Bearer" + this.$store.state.token },
          }
        )
        .then(() => {
          this.$router.push("/transaksi");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>