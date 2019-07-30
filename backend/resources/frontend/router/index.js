import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';

import routes from '@/router/routes.js';
import store from '@/store.js';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer: ${token}`;
    }

    window.scrollTo(0,0);
    return next();

});

export default router;
