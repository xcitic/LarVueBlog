"use strict";

// Core
import Vue from 'vue';
Vue.config.productionTip = false;

// Internal Components
import App from './App.vue';
import router from '@/router/router.js';
import store from './store.js';
import './registerServiceWorker';

// External packages
import VueFlashMessage from 'vue-flash-message';
require('vue-flash-message/dist/vue-flash-message.min.css');
import VeeValidate from 'vee-validate';


Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000
  }
});

Vue.use(VeeValidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
