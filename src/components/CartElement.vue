<template>
   <div class="mb-4 shadow-md p-3 mx-3 rounded hover:bg-gray-100">
      <div class="flex">
         <img
            class="rounded-full"
            width="70"
            :src="product.image"
            alt="Image Product"
         />
         <div class="flex flex-col ml-3">
            <div class="font-bold text-gray-800">{{ product.name }}.</div>
            <div class="text-blue-400 font-semibold">
               Cantidad:
               <span class="text-black font-normal"
                  >{{ product.quantity }}.</span
               >
            </div>
            <div v-if="totalPrice === unitPrice">
               <span class="font-bold">{{ totalPrice }} €</span>
            </div>
            <div v-else>
               <span class="font-bold">{{ totalPrice }} €</span>
               <span class="text-gray-500"> - ({{ unitPrice }} €/ud)</span>
            </div>
         </div>
      </div>
      <div class="flex justify-center items-center mt-3">
         <button
            class="py-1 px-6 bg-red-500 text-white font-bold w-full rounded hover:bg-red-700"
            @click="deleteProduct(product.id)"
         >
            <font-awesome-icon icon="trash" />
         </button>
      </div>
   </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { normalizePrice } from '@/utils/utils';
export default {
   name: 'CartElement',
   props: {
      product: {
         type: Object,
         required: true
      }
   },
   computed: {
      totalPrice: function() {
         return normalizePrice(this.product.price * this.product.quantity);
      },
      unitPrice: function() {
         return normalizePrice(this.product.price);
      }
   },
   methods: {
      deleteProduct(id) {
         this.deleteCartProduct(id);
      },
      ...mapMutations(['deleteCartProduct'])
   }
};
</script>

<style></style>
