import Vue from 'vue';
import VueRouter from 'vue-router';
// import axios from 'axios';

import routes from '@/router/routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');

    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
    }

    window.scrollTo(0,0);
    return next();

});

export default router;
