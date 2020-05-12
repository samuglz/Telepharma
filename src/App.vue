<template>
   <div id="app">
      <div id="nav">
         <router-link to="/">Home</router-link>|
         <router-link to="/shop">Shop</router-link>|
         <router-link to="/login">Login</router-link>|
         <router-link to="/dashboard">Dashboard</router-link>
      </div>
      <router-view />
      {{ this.$store.state.userID }}
   </div>
</template>

<script>
import { verifyToken, decode } from '@/services/auth';
import { mapMutations } from 'vuex';
export default {
   data() {
      return {
         currentToken: ''
      };
   },
   mounted() {
      verifyToken() ? this.relogin() : null;
   },
   methods: {
      ...mapMutations(['setAuth', 'setUserID']),
      relogin() {
         this.setAuth(true);
         const dataToken = decode(localStorage.getItem('accessToken'));
         this.setUserID(dataToken.sub);
         this.$router.push('/shop');
      }
   }
};
</script>
