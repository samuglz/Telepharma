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
            <p class="text-center text-lg pb-3">
               <span class="font-bold">{{ normalizePrice }} €</span>
            </p>
            <button
               class="bg-green-400 px-6 py-3 hover:bg-green-600 mx-1 text-white hover:text-white rounded"
               @click="show"
            >
               <font-awesome-icon icon="list-ul" />
               {{ ' ' }}
               <span class="font-bold">Más detalles</span>
            </button>
         </div>
      </div>
      <modal :name="nameModal" height="auto" :width="350">
         <modal-element :product="product" :nameModal="nameModal" />
      </modal>
   </div>
</template>

<script>
import { normalizePrice } from '@/utils/utils';
import ModalElement from '@/components/ModalElement';
export default {
   props: {
      product: {
         type: Object,
         required: true
      }
   },
   components: {
      ModalElement
   },
   computed: {
      normalizePrice() {
         return normalizePrice(this.product.price);
      },
      nameModal() {
         return this.product.id.toString();
      }
   },
   methods: {
      show() {
         this.$modal.show(`${this.nameModal}`, {
            adaptive: true
         });
      }
   }
};
</script>

<style></style>
