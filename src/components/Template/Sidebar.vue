<template>
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li class="nav-item nav-profile">
        <a href="#" class="nav-link">
          <div class="profile-image">
            <img
              class="img-xs rounded-circle"
              src="images/faces/face8.jpg"
              alt="profile image"
            />
            <div class="dot-indicator bg-success"></div>
          </div>
          <div class="text-wrapper">
            <p class="profile-name">Allen Moreno</p>
            <p class="designation">Administrator</p>
          </div>
          <div class="icon-container">
            <i class="icon-bubbles"></i>
            <div class="dot-indicator bg-danger"></div>
          </div>
        </a>
      </li>
      <li class="nav-item nav-category">
        <span class="nav-link">Dashboard</span>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/">
          <span class="menu-title">Dashboard</span>
          <i class="icon-screen-desktop menu-icon"></i>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/member">
          <span class="menu-title">Member</span>
          <i class="icon-people menu-icon"></i>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/paket">
          <span class="menu-title">Paket</span>
          <i class="icon-social-dropbox menu-icon"></i>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/outlet">
          <span class="menu-title">Outet</span>
          <i class="icon-home menu-icon"></i>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/transaksi">
          <span class="menu-title">Transaksi</span>
          <i class="icon-social-tumblr menu-icon"></i>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/report">
          <span class="menu-title">Report</span>
          <i class="icon-screen-desktop menu-icon"></i>
        </router-link>
      </li>
      <!-- <li v-if="isAdmin || isKasir" class="nav-item">
        <router-link class="nav-link" to="/member">
          <span class="menu-title">Member</span>
          <i class="icon-people menu-icon"></i>
        </router-link>
      </li>
      <li v-if="isAdmin" class="nav-item">
        <router-link class="nav-link" to="/paket">
          <span class="menu-title">Paket</span>
          <i class="icon-social-dropbox menu-icon"></i>
        </router-link>
      </li>
      <li v-if="isAdmin" class="nav-item">
        <router-link class="nav-link" to="/transaksi">
          <span class="menu-title">Transaksi</span>
          <i class="icon-social-tumblr menu-icon"></i>
        </router-link>
      </li>
      <li v-if="isOwner" class="nav-item">
        <router-link class="nav-link" to="/report">
          <span class="menu-title">Report</span>
          <i class="icon-screen-desktop menu-icon"></i>
        </router-link>
      </li> -->
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isAdmin: false,
      isKasir: false,
      isOwner: false,
    };
  },
  created() {
    var user = JSON.parse(this.$store.state.datauser);
    var role = user.role;

    if (role == "admin") this.isAdmin = true;
    else if (role == "kasir") this.isKasir = true;
    else this.isOwner = true;
  },
};
</script>