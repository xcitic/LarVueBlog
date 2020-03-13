import Vue from 'vue';
import VueRouter from 'vue-router';
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
  window.scrollTo(0, 0);

  async function authCheck() {
    let isAdmin = await Auth.isAdmin();
    if (isAdmin === true) {
      return next();
    }
    return next('/login');
  }

  // Authenticated routes require token
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (token) {
      return next();
    }
    return next('/login');
  }

  if (to.matched.some(record => record.meta.requiresAdmin)) {
    if (token) {
      authCheck();
    } else {
      return next('/login');
    }
  }

  if (to.matched.some(record => record.meta.guest)) {
    if (token) {
      return next('/dashboard');
    } else {
      return next();
    }
  }

  return next();

});

export default router;
