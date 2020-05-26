<template>
   <div>
      <div class="bg-white hover:bg-gray-100 p-3 shadow-xl rounded">
         <div class="p-3">
            <img class="rounded" :src="product.image" alt="IMG_PRODUCT" />
         </div>
         <hr class="border-gray-200 my-3" />
         <div class="flex flex-col">
            <h3 class="text-center font-bold text-xl pb-2">
               {{ product.name }}
            </h3>
            <p class="text-justify text-xs md:text-sm text-gray-600 pb-3">
               {{ product.description }}
            </p>
            <p class="text-center text-lg">
               <span class="font-bold">{{ normalizePrice }} €</span>
            </p>
         </div>
         <div class="flex flex-col">
            <div
               class="my-2 flex justify-center mx-1 border-green-400 border-2 rounded outline-none"
            >
               <button
                  class="bg-green-400 px-6 py-1 hover:bg-green-600 border-r text-white font-bold focus:outline-none"
                  @click="decrement()"
               >
                  -
               </button>
               <input
                  type="number"
                  v-model="quantity"
                  class="text-center w-full bg bg-green-200 focus:outline-none"
                  @blur="formatInput"
               />
               <button
                  class="bg-green-400 px-6 py-1 hover:bg-green-600 border-l text-white font-bold focus:outline-none"
                  @click="add()"
               >
                  +
               </button>
            </div>
            <button
               class="bg-green-400 px-6 py-3 hover:bg-green-600 mx-1 text-white hover:text-white rounded"
               @click="addToCart()"
            >
               <font-awesome-icon icon="shopping-cart" />
               {{ ' ' }}
               <span class="font-bold">Añadir al Carrito</span>
            </button>
         </div>
      </div>
   </div>
</template>

<script>
import { normalizePrice } from '@/utils/utils';
import { mapMutations } from 'vuex';
export default {
   props: {
      product: {
         type: Object,
         required: true
      },
      nameModal: {
         type: String,
         required: true
      }
   },
   data() {
      return {
         productfinal: {},
         quantity: 1
      };
   },
   computed: {
      normalizePrice() {
         return normalizePrice(this.product.price);
      }
   },
   methods: {
      add() {
         this.quantity = parseInt(this.quantity) + 1;
      },
      decrement() {
         if (this.quantity > 1) this.quantity -= 1;
      },
      formatInput() {
         this.quantity <= 1
            ? (this.quantity = 1)
            : (this.quantity = parseInt(this.quantity));

         this.quantity === ''
            ? (this.quantity = 1)
            : (this.quantity = parseInt(this.quantity));
      },
      addToCart() {
         this.productFinal = { ...this.product, quantity: this.quantity };
         this.addCartProduct(this.productFinal);
         this.hide();
      },
      hide() {
         this.$modal.hide(`${this.nameModal}`);
      },
      ...mapMutations(['addCartProduct'])
   }
};
</script>

<style scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
   -webkit-appearance: none;
   margin: 0;
}
</style>
