import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Dashboard from '@/views/Dashboard.vue';
import Shop from '@/views/Shop.vue';
import Pharmacies from '@/views/Pharmacies.vue';

Vue.use(VueRouter);

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home
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
      component: Dashboard
   },
   {
      path: '/shop',
      name: 'Shop',
      component: Shop
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

export default router;
