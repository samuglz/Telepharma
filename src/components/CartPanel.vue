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
         <div class="flex flex-col">
            <div v-if="cart.length === 0" class="text-center">
               <span class="text-sm text-gray-500"
                  >No hay articulos en el carrito</span
               >
            </div>
            <div v-else>
               <cart-element
                  v-for="(product, index) in cart"
                  :key="index"
                  :product="product"
               />
            </div>
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
   right: 0;
   min-width: 325px;
   max-height: 400px;
   z-index: 1;
   overflow-y: auto;
}

.dropdown:hover .dropdown-content {
   display: block;
}
</style>
