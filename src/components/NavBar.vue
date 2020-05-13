<template>
   <div class="w-full sticky top-0">
      <div class="flex py-4 bg-gray-100 items-center">
         <router-link to="/" class="ml-5">
            <img src="../assets/logo.svg" width="100" alt="Logo Telepharma" />
         </router-link>
         <div class="flex justify-end items-center flex-grow">
            <cart-panel />
            <div v-if="isAuth" class="flex items-center">
               <router-link
                  class="mx-1 px-4 py-1 text-green-400 rounded text-3xl font-bold"
                  to="/dashboard"
               >
                  <font-awesome-icon icon="user-cog" />
               </router-link>
               <button
                  class="mx-1 px-4 py-1 text-green-400 rounded text-3xl font-bold"
                  @click="logout"
               >
                  <font-awesome-icon icon="sign-out-alt" />
               </button>
            </div>
            <router-link
               class="mx-1 px-4 py-1 text-green-400 rounded text-3xl font-bold"
               to="/login"
               v-else
            >
               <font-awesome-icon icon="sign-in-alt" />
            </router-link>
         </div>
      </div>
   </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import cartPanel from '@/components/CartPanel';
export default {
   name: 'NavBar',
   components: {
      cartPanel
   },
   computed: {
      ...mapState(['isAuth'])
   },
   methods: {
      ...mapMutations(['setAuth']),
      logout() {
         this.setAuth(false);
         localStorage.setItem('accessToken', '');
      }
   }
};
</script>
