import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
   {
      path: '/',
      name: 'Shop',
      component: () =>
         import(/* webpackChunkName: "about" */ '../views/Shop.vue')
   },
   {
      path: '/login',
      name: 'Login',
      component: () =>
         import(/* webpackChunkName: "about" */ '../views/Login.vue')
   },
   {
      path: '/register',
      name: 'Register',
      component: () =>
         import(/* webpackChunkName: "about" */ '../views/Register.vue')
   },
   {
      path: '/dashboard',
      name: 'Dashboard',
      component: () =>
         import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
      meta: {
         requiresAuth: true
      }
   },
   {
      path: '/cart',
      name: 'Cart',
      component: () =>
         import(/* webpackChunkName: "about" */ '../views/Cart.vue'),
      meta: {
         requiresAuth: true
      }
   },
   {
      path: '/successfullBuy',
      name: 'SuccessfullBuy',
      component: () =>
         import(/* webpackChunkName: "about" */ '../views/SuccessfullBuy.vue')
   },
   {
      path: '/canceledBuy',
      name: 'CanceledBuy',
      component: () =>
         import(/* webpackChunkName: "about" */ '../views/CanceledBuy.vue')
   }
];

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
});

router.beforeEach((to, from, next) => {
   localStorage.setItem('initialPath', location.pathname);
   if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!store.state.isAuth) {
         next({
            path: '/login'
         });
      } else {
         next();
      }
   } else {
      next();
   }
});

export default router;
