<template>
   <div id="app">
      <NavBar :path="$route.fullPath" />
      <router-view />
   </div>
</template>

<script>
// import { verifyToken, decode } from '@/services/auth';
import NavBar from '@/components/NavBar';
import { mapMutations } from 'vuex';
export default {
   // data() {
   //    return {
   //       currentToken: ''
   //    };
   // },
   mounted() {
      // verifyToken() ? this.relogin() : null;
      localStorage.getItem('cart')
         ? this.setCart(JSON.parse(localStorage.getItem('cart')))
         : null;
   },
   methods: {
      ...mapMutations(['setCart'])
      // ...mapMutations(['setAuth', 'setUserID']),
      // relogin() {
      //    this.setAuth(true);
      //    const dataToken = decode(localStorage.getItem('accessToken'));
      //    this.setUserID(dataToken.sub);
      //    this.$router.push(`${localStorage.getItem('initialPath')}`);
      // }
   },
   components: {
      NavBar
   }
};
</script>
