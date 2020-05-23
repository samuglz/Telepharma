<template>
   <div>
      <div class="m-2 p-2 bg-white rounded shadow flex flex-col">
         <div>
            <h3>Referencia: {{ pedido.orderID }}</h3>
            <p>Fecha de compra: {{ pedido.date }}</p>
         </div>
         <div v-for="(product, index) in pedido.order" :key="index">
            <img :src="product.image" alt="IMG_PRODUCT" />
            <div>
               <p>{{ product.name }}</p>
               <p>Cantidad: {{ product.quantity }}</p>
               <p>
                  Precio total:
                  {{ normalizePrice(product.quantity * product.price) }}
               </p>
            </div>
         </div>
         <div>TOTAL: {{ normalizePrice(totalOrderPrice) }} €</div>
      </div>
   </div>
</template>

<script>
import { normalizePrice } from '@/utils/utils';
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
      }
   }
};
</script>

<style></style>
