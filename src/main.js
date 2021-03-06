import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueHtml2pdf from 'vue-html2pdf'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import Pagination from 'vue-pagination-2';
// import VueLaravelPagination from "vue-cli-laravel-pagination";
// import pagination from 'laravel-vue-pagination';


Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(require('vue-moment'))
Vue.use(VueHtml2pdf)
Vue.use(VueSweetalert2)
// Vue.component('pagination', Pagination);
// Vue.use(VueLaravelPagination),

// Vue.component('pagination', pagination);
// Vue.component('pagination', require('laravel-vue-pagination'));
Vue.component('navbar-component', require('./components/Template/Navbar.vue').default);
Vue.component('sidebar-component', require('./components/Template/Sidebar.vue').default);
Vue.component('footer-component', require('./components/Template/Footer.vue').default);


new Vue({
  router,
  store,
  axios,
  render: h => h(App),
}).$mount('#app')

// const app = createApp(App)
// app.use(router)
// app.use(store)
// app.config.globalProperties.axios = axios
// app.mount("#app")
