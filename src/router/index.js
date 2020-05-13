import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Dashboard from '@/views/Dashboard.vue';
import Shop from '@/views/Shop.vue';
import Pharmacies from '@/views/Pharmacies.vue';

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
      path: '/pharmacies',
      name: 'Pharmacies',
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
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!store.state.isAuth) {
         next({
            path: '/login'
         });
      } else {
         next();
      }
   } else {
      next(); // make sure to always call next()!
   }
});

export default router;
