import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Dashboard from '@/views/Dashboard.vue';
import Shop from '@/views/Shop.vue';
import Pharmacies from '@/views/Pharmacies.vue';
import Cart from '@/views/Cart.vue';

Vue.use(VueRouter);

const routes = [
   {
      path: '/',
      name: 'Shop',
      component: Shop
   },
   {
      path: '/login',
      name: 'Login',
      component: Login
   },
   {
      path: '/register',
      name: 'Register',
      component: Register
   },
   {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
         requiresAuth: true
      }
   },
   {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
         requiresAuth: true
      }
   },
   {
      path: '/pharmacies',
      name: 'Pharmacies',
      component: Pharmacies
   },
   {
      path: '/successfullBuy',
      name: 'SuccessfullBuy',
      component: Pharmacies
   },
   {
      path: '/canceledBuy',
      name: 'CanceledBuy',
      component: Pharmacies
   }
];

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
});

router.beforeEach((to, from, next) => {
   if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!store.state.isAuth) {
         localStorage.setItem('initialPath', location.pathname);
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
