<template>
   <div class="dropdown">
      <button
         class="mx-1 px-4 py-1 text-green-400 rounded text-3xl font-bold focus:outline-none block"
      >
         <font-awesome-layers>
            <font-awesome-icon icon="shopping-cart" />
            <span class="fa-layers-counter text-4xl">{{ cart.length }}</span>
         </font-awesome-layers>
      </button>
      <div class="p-4 shadow-md bg-white rounded-md dropdown-content">
         <div class="flex flex-col justify-center items-center">
            <cart-element />
            <cart-element />
            <cart-element />
            <cart-element />
         </div>
      </div>
   </div>
</template>

<script>
import { mapState } from 'vuex';
import cartElement from '@/components/CartElement';
export default {
   name: 'cartPanel',
   computed: {
      ...mapState(['cart'])
   },
   components: {
      cartElement
   }
};
</script>

<style scoped>
.dropdown {
   position: relative;
   display: inline-block;
}

.dropdown-content {
   display: none;
   position: absolute;
   left: -2.5em;
   min-width: 160px;
   z-index: 1;
}

.dropdown:hover .dropdown-content {
   display: block;
}
</style>
