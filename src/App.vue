<template>
   <div id="app">
      <NavBar />
      <router-view />
   </div>
</template>

<script>
import { verifyToken, decode } from '@/services/auth';
import { mapMutations } from 'vuex';
import NavBar from '@/components/NavBar';
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
         if (location.pathname !== '/') {
            this.$router.push('/');
         }
      }
   },
   components: {
      NavBar
   }
};
</script>
