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
      <div class=" pt-4 shadow-md bg-white rounded-md dropdown-content">
         <div class="flex flex-col">
            <div v-if="cart.length === 0" class="text-center pb-3">
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
         <div v-if="cart.length !== 0" class="sticky bottom-0">
            <div class="bg-gray-200 py-3 flex justify-between px-3">
               <div class="text-gray-600">
                  <span v-if="totalUnits === 1">({{ totalUnits }}) Unidad</span>
                  <span v-else>({{ totalUnits }}) Unidades</span>
               </div>
               <div class="font-bold">TOTAL: {{ normalizeTotalPrice }} €</div>
            </div>
            <button
               class="py-1 px-6 bg-green-500 text-white font-bold w-full rounded-b hover:bg-green-700"
               @click="goToCart"
            >
               Realizar Pedido
            </button>
         </div>
      </div>
   </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { normalizePrice } from '@/utils/utils.js';
import cartElement from '@/components/CartElement';
export default {
   name: 'cartPanel',
   computed: {
      ...mapState(['cart']),
      ...mapGetters(['totalPrice', 'totalUnits']),
      normalizeTotalPrice() {
         return normalizePrice(this.totalPrice);
      }
   },
   components: {
      cartElement
   },
   methods: {
      goToCart() {
         this.$router.push('/cart');
      }
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
   right: -2em;
   min-width: 325px;
   max-height: 400px;
   z-index: 1;
   overflow-y: auto;
}

.dropdown:hover .dropdown-content {
   display: block;
}
</style>
