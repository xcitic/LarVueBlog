import Vue from 'vue';
// Internal Components
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

// External packages
import axios from 'axios';
Vue.config.productionTip = false;


/* Axios Config */
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.baseURL = process.env.MIX_APP_URL;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
