<template>
   <div
      class="flex flex-col md:container-cart-view bg-white hover:bg-gray-100 p-3 shadow-xl rounded mt-4 justify-center items-center"
   >
      <div class="justify-center items-center" v-if="cart.length > 0">
         <table>
            <tr>
               <th class="hidden md:block">Artículo</th>
               <th>Nombre</th>
               <th>Unidades</th>
               <th>Precio</th>
               <th>Quitar</th>
            </tr>
            <tr v-for="(product, index) in cart" :key="index">
               <td class="px-4 hidden md:block">
                  <img
                     class="rounded-full"
                     :src="product.image"
                     alt="IMG_PRODUCT"
                  />
               </td>
               <td class="px-4">
                  <p>{{ product.name }}</p>
               </td>
               <td class="px-4">
                  <button
                     class="border-r border-gray-400"
                     @click="decrement(product)"
                  >
                     -
                  </button>
                  <span class="border border-gray-400">{{
                     product.quantity
                  }}</span>
                  <button
                     class="border-l border-gray-400"
                     @click="add(product)"
                  >
                     +
                  </button>
               </td>
               <td class="px-4">
                  {{ normalizePrice(product.price * product.quantity) }} €
               </td>
               <td>
                  <button
                     class="bg-red-400 px-6 py-2 hover:bg-red-600 mx-1 text-white hover:text-white rounded mt-2"
                     @click="deleteProduct(product.id)"
                  >
                     <font-awesome-icon icon="trash" />
                  </button>
               </td>
            </tr>
         </table>

         <div class="flex justify-center w-full mt-2">
            <button
               class="w-1/2 bg-red-400 px-6 py-2 hover:bg-red-600 mx-1 text-white hover:text-white rounded mt-2"
               @click="resetCart"
            >
               <font-awesome-icon icon="dumpster" />
               {{ ' ' }}
               <span class="font-bold">Vaciar cesta</span>
            </button>
            <button
               class="w-1/2 bg-green-400 px-6 py-2 hover:bg-green-600 mx-1 text-white hover:text-white rounded mt-2"
               @click="pay"
            >
               <font-awesome-icon icon="credit-card" />
               {{ ' ' }}
               <span class="font-bold">Pagar</span>
            </button>
         </div>
      </div>
      <div v-else>
         <p class="w-full rounded px-5 mt-4 mb-8">
            NO HAY ARTÍCULOS EN EL CARRITO
         </p>
         <div class="flex justify-center px-5 my-4">
            <router-link
               to="/"
               class="text-center rounded w-full bg-green-400 text-white font-bold hover:bg-green-600"
               >VOLVER A LA TIENDA</router-link
            >
         </div>
      </div>
   </div>
</template>

<script>
import { normalizePrice } from '@/utils/utils';
import { mapState, mapMutations, mapGetters } from 'vuex';
import { loadStripe } from '@stripe/stripe-js';
export default {
   data() {
      return {
         productfinal: {},
         quantity: 1
      };
   },
   computed: {
      ...mapState(['cart']),
      ...mapGetters(['totalPrice', 'productsToPay'])
   },
   methods: {
      add(product) {
         this.productfinal = { ...product, quantity: 1 };
         this.addCartProduct(this.productfinal);
      },
      decrement(product) {
         this.decrementCartProduct(product);
      },
      normalizePrice(product) {
         return normalizePrice(product);
      },
      deleteProduct(id) {
         this.deleteCartProduct(id);
      },
      ...mapMutations([
         'deleteCartProduct',
         'resetCart',
         'addCartProduct',
         'decrementCartProduct'
      ]),
      async pay() {
         const stripe = await loadStripe(
            'pk_test_fUqiTKyhnwIbo6DgpMcA2sJb006D2ZXMVX'
         );
         console.log(stripe);
         stripe.redirectToCheckout({
            lineItems: this.productsToPay,
            mode: 'payment',
            successUrl: `${location.origin}/successfullBuy`,
            cancelUrl: `${location.origin}/canceledBuy`
         });
      }
   }
};
</script>

<style scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
   -webkit-appearance: none;
   margin: 0;
}
img {
   width: 80px;
   height: 80px;
}
</style>
