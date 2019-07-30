import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import Auth from '@/api/Auth.js';

import routes from '@/router/routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
    // Fetch and attach auth token.
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
    }

    window.scrollTo(0,0);
    // Authenticated routes require token
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (token) {
        return next();
      }
      return next('/login');
    }

    if(to.matched.some(record => record.meta.requiresAdmin)) {
      if (token) {
        if (Auth.isAdmin() === true) {
          return next();
        }
        return next('/login')
      }
      return next('/login')
    }

    if (to.matched.some(record => record.meta.guest)) {
      if (token) {
        return next('/dashboard');
      }
      return next();
    }

    // default action
    return next();

});

export default router;
