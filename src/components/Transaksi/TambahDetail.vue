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
                  <h4 class="card-title">Tambah Detail Transaksi</h4>
                  <form @submit.prevent="tambah" class="forms-sample">
                    <div class="form-group row">
                      <label
                        for="exampleInputUsername2"
                        class="col-sm-3 col-form-label"
                        >Jenis Paket</label
                      >
                      <div class="col-sm-9">
                        <select class="form-control" v-model="detail.id_paket">
                          <option
                            v-for="(p, index) in paket"
                            :key="index"
                            :value="p.id_paket"
                          >
                            {{ p.jenis }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="exampleInputUsername2"
                        class="col-sm-3 col-form-label"
                        >Jumlah</label
                      >
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control"
                          v-model="detail.quantity"
                        />
                      </div>
                    </div>
                    <input type="hidden" v-model="detail.id_transaksi" />
                    <button type="submit" class="btn btn-primary mr-2">
                      Submit
                    </button>
                    <router-link
                      type="button"
                      class="btn btn-light"
                      :to="{
                        name: 'detailtransaksi',
                      }"
                      >Cancel
                    </router-link>
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
      id_transaksi: this.$route.params.id,
      paket: {},
      detail: {},
    };
  },
  created() {
    var data = JSON.parse(this.$store.state.datauser);
    var role = data.role;
    if (role == "owner") {
      this.$swal("Failed", "Anda Tidak Dapat Mengakses Halaman Ini", "error");
      this.$router.push("/");
    }
    this.axios
      .get("http://localhost/laundry_baru_8/public/api/get_paket", {
        headers: { Authorization: `Bearer` + this.$store.state.token },
      })
      .then((res) => {
        this.paket = res.data;
        this.detail.id_transaksi = this.id_transaksi;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    tambah() {
      this.axios
        .post(
          "http://localhost/laundry_baru_8/public/api/transaksi/detail/tambah",
          this.detail,
          {
            headers: { Authorization: `Bearer` + this.$store.state.token },
          }
        )
        .then((res) => {
          if (res.data.success) {
            this.$swal("Sukses", res.data.message, "success");
            this.$router.push({
              name: "detailtransaksi",
              params: this.id_transaksi,
            });
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>