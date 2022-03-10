<template>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper">
      <sidebar-component></sidebar-component>
      <navbar-component></navbar-component>

      <div class="main-panel">
        <div class="content-wrapper">
          <br /><br />
          <div class="row quick-action-toolbar">
            <div class="col-md-12 grid-margin">
              <div class="card">
                <div class="card-header d-block d-md-flex">
                  <h5 class="mb-0">Quick Actions</h5>
                  <p class="ml-auto mb-0">
                    How are your active users trending overtime?<i
                      class="icon-bulb"
                    ></i>
                  </p>
                </div>
                <div
                  class="d-md-flex row m-0 quick-action-btns"
                  role="group"
                  aria-label="Quick action buttons"
                >
                  <div class="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                    <router-link
                      type="button"
                      class="btn px-0"
                      :to="{ name: 'tambahmember' }"
                    >
                      <i class="icon-user mr-2"></i>
                      Add Member
                    </router-link>
                  </div>
                  <div class="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                    <router-link
                      type="button"
                      class="btn px-0"
                      :to="{ name: 'tambahoutlet' }"
                    >
                      <i class="icon-docs mr-2"></i>
                      Add Outlet
                    </router-link>
                  </div>
                  <div class="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                    <router-link
                      type="button"
                      class="btn px-0"
                      :to="{ name: 'tambahtransaksi' }"
                    >
                      <i class="icon-folder mr-2"></i>
                      Add Transaksi
                    </router-link>
                  </div>
                  <div class="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                    <router-link type="button" class="btn px-0" to="/report">
                      <i class="icon-book-open mr-2"></i>
                      Create Report
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Quick Action Toolbar Ends-->
          <div class="row">
            <div class="col-md-12 grid-margin">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12">
                      <div
                        class="
                          d-sm-flex
                          align-items-baseline
                          report-summary-header
                        "
                      >
                        <h5 class="font-weight-semibold">Report Summary</h5>
                        <span class="ml-auto">Updated Report</span>
                        <button class="btn btn-icons border-0 p-2">
                          <i class="icon-refresh"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="row report-inner-cards-wrapper">
                    <div class="col-md -6 col-xl report-inner-card">
                      <div class="inner-card-text">
                        <span class="report-title">Jumlah Member</span>
                        <h4>{{ data.member }}</h4>
                      </div>
                      <div class="inner-card-icon bg-success">
                        <i class="icon-people"></i>
                      </div>
                    </div>
                    <div class="col-md-6 col-xl report-inner-card">
                      <div class="inner-card-text">
                        <span class="report-title">Laundry Baru</span>
                        <h4>{{ data.baru }}</h4>
                      </div>
                      <div class="inner-card-icon bg-danger">
                        <i class="icon-plus"></i>
                      </div>
                    </div>
                    <div class="col-md-6 col-xl report-inner-card">
                      <div class="inner-card-text">
                        <span class="report-title">Laundry Proses</span>
                        <h4>{{ data.proses }}</h4>
                      </div>
                      <div class="inner-card-icon bg-warning">
                        <i class="icon-wrench"></i>
                      </div>
                    </div>
                    <div class="col-md-6 col-xl report-inner-card">
                      <div class="inner-card-text">
                        <span class="report-title">Pendapatan</span>
                        <h4>{{ data.pendapatan }}</h4>
                      </div>
                      <div class="inner-card-icon bg-primary">
                        <i class="icon-wallet"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
        <footer-component></footer-component>
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
  <!-- container-scroller -->
</template>
<script>
export default {
  data() {
    return {
      data: {},
    };
  },
  created() {
    this.axios
      .get("http://localhost/laundry_baru_8/public/api/dashboard", {
        headers: { Authorization: "Bearer " + this.$store.state.token },
      })
      .then((res) => {
        this.data = res.data;
      });
  },
};
</script>
