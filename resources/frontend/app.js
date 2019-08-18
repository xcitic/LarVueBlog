// Core
import Vue from 'vue';
Vue.config.productionTip = false;

// Internal Components
import App from './App.vue';
import router from '@/router/router.js';
import store from './store.js';
// import './registerServiceWorker';

// External packages
import VueFlashMessage from 'vue-flash-message';
require('vue-flash-message/dist/vue-flash-message.min.css');
import VeeValidate from 'vee-validate';
import VModal from 'vue-js-modal';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000
  }
});
Vue.use(VeeValidate);
Vue.use(VModal, {
  dynamic: true,
  dynamicDefaults: {
    clickToClose: false,
  }
});

library.add(faSpinner)
Vue.component('icons', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
