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
                              <th class="font-weight-bold">Jenis</th>
                              <th class="font-weight-bold">Harga</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="py-1">
                                <img src="../../assets/pic1.png" />
                              </td>
                              <td>{{ paket.jenis }}</td>
                              <td>{{ paket.harga }}</td>
                            </tr>
                          </tbody>
                        </table>
                        <br /><br />
                        <router-link
                          type="button"
                          class="btn btn-primary btn-rounded btn-fw"
                          :to="{ path: '/paket' }"
                        >
                          <i class="icon-cloud-upload btn-icon-prepend"></i>
                          Paket Home
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
      })
      .catch((err) => console.log(err));
  },
};
</script>