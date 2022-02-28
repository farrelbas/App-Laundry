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
                  <h4 class="card-title">Tambah Member</h4>
                  <form @submit.prevent="tambah" class="forms-sample">
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
                          v-model="member.nama"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="exampleInputUsername2"
                        class="col-sm-3 col-form-label"
                        >Alamat</label
                      >
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputUsername2"
                          placeholder="Masukan Alamat"
                          v-model="member.alamat"
                        />
                      </div>
                    </div>
                    <form @submit.prevent="tambah">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label"
                          >Jenis Kelamin</label
                        >
                        <div class="col-sm-4">
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                type="radio"
                                class="form-check-input"
                                name="membershipRadios"
                                id="membershipRadios1"
                                value="Laki-laki"
                                v-model="member.jenis_kelamin"
                                checked
                              />
                              Laki-Laki
                            </label>
                          </div>
                        </div>
                        <div class="col-sm-5">
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                type="radio"
                                class="form-check-input"
                                name="membershipRadios"
                                id="membershipRadios2"
                                value="Perempuan"
                                v-model="member.jenis_kelamin"
                              />
                              Perempuan
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div class="form-group row">
                      <label
                        for="exampleInputUsername2"
                        class="col-sm-3 col-form-label"
                        >Nomer Telepon</label
                      >
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputUsername2"
                          placeholder="member.tlp"
                          v-model="member.tlp"
                        />
                      </div>
                    </div>
                    <!-- <div class="form-check form-check-flat form-check-primary">
                      <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" />
                        Remember me
                      </label>
                    </div> -->
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
      member: {},
    };
  },
  methods: {
    tambah() {
      this.axios
        .post(
          "http://localhost/laundry_baru_8/public/api/insert_member",
          this.member,
          {
            headers: { Authorization: "Bearer" + this.$store.state.token },
          }
        )
        .then(() => {
          this.$router.push("/member");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>