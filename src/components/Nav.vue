<template>
   <div class="flex py-4 bg-gray-100 items-center">
      <div class="flex-grow pl-10">Logo</div>
      <div class="flex justify-around items-center">
         <router-link
            class="mx-1 px-4 py-1 text-green-400 rounded text-xl font-bold"
            to="/"
            >Home</router-link
         >
         <button
            class="mx-1 px-4 py-1 text-green-400 rounded text-3xl font-bold"
         >
            <font-awesome-layers>
               <font-awesome-icon icon="shopping-cart" />
               <span class="fa-layers-counter text-4xl">{{ cart.length }}</span>
            </font-awesome-layers>
         </button>
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
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
   computed: {
      ...mapState(['isAuth', 'cart'])
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
