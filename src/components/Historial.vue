<template>
   <div class="md:flex md:justify-center">
      <div class="mt-2 mx-2 p-2 bg-white rounded shadow flex flex-col md:w-3/5">
         <div>
            <h3 class="text-lg">
               <span class="font-bold ml-3 md:ml-10">Referencia:</span>
               {{ pedido.orderID }}
            </h3>
            <p class="ml-3 md:ml-10">
               Fecha: <span class="text-gray-600">{{ pedido.date }}</span>
            </p>
         </div>
         <div
            v-for="(product, index) in pedido.order"
            :key="index"
            class="flex my-3 py-3 shadow-lg rounded bg-gray-100 mx-3"
         >
            <img
               width="75"
               :src="product.image"
               alt="IMG_PRODUCT"
               class="ml-2 mr-5 rounded-full"
            />
            <div>
               <p class="font-bold text-xl">{{ product.name }}</p>
               <p>Cantidad: {{ product.quantity }}</p>
               <p>
                  Precio total:
                  {{ normalizePrice(product.quantity * product.price) }} €
               </p>
            </div>
         </div>
         <div class="text-center ">
            <span class="font-bold"
               >Total: {{ normalizePrice(totalOrderPrice) }} €</span
            >
         </div>
         <button
            @click="repeatOrder"
            class="mt-3 font-bold bg-orange-400 px-6 py-3 hover:bg-orange-600 mx-1 text-white hover:text-white rounded"
         >
            <font-awesome-icon icon="undo" />
            Volver a realizar pedido
         </button>
      </div>
   </div>
</template>

<script>
import { normalizePrice } from '@/utils/utils';
import { mapMutations } from 'vuex';
export default {
   props: {
      pedido: {
         type: Object,
         required: true
      }
   },
   mounted() {
      this.totalPrice();
   },
   data() {
      return {
         totalOrderPrice: 0
      };
   },
   methods: {
      normalizePrice(value) {
         return normalizePrice(value);
      },
      totalPrice() {
         let totalCount = 0;
         this.pedido.order.forEach(product => {
            totalCount += product.price * product.quantity;
         });
         this.totalOrderPrice = totalCount;
      },
      repeatOrder() {
         this.pedido.order.forEach(product => {
            this.addCartProduct(product);
         });
         this.$router.push('/cart');
      },
      ...mapMutations(['addCartProduct'])
   }
};
</script>

<style></style>
