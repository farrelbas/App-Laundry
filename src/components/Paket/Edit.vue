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
                  <h4 class="card-title">Edit Barang</h4>
                  <form @submit.prevent="edit" class="forms-sample">
                    <div class="form-group row">
                      <label
                        for="exampleInputUsername2"
                        class="col-sm-3 col-form-label"
                        >Jenis</label
                      >
                      <div class="col-sm-9">
                        <input
                          disabled
                          type="text"
                          class="form-control"
                          id="exampleInputUsername2"
                          placeholder="Masukan Nama"
                          v-model="paket.jenis"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="exampleInputUsername2"
                        class="col-sm-3 col-form-label"
                        >Harga</label
                      >
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputUsername2"
                          placeholder="Masukan Alamat"
                          v-model="paket.harga"
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
      paket: {},
    };
  },
  created() {
    this.axios
      .get(
        `http://localhost/laundry_baru_8/public/api/get_paket_id/${this.$route.params.id}`,
        { headers: { Authorization: "Bearer" + this.$store.state.token } }
      )
      .then((res) => {
        this.paket = res.data;
      });
  },
  methods: {
    edit() {
      this.axios
        .put(
          `http://localhost/laundry_baru_8/public/api/update_paket/${this.$route.params.id}`,
          this.paket,
          {
            headers: { Authorization: "Bearer" + this.$store.state.token },
          }
        )
        .then(() => {
          this.$router.push("/paket");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>