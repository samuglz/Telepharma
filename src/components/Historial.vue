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
         <div>TOTAL: {{ totalPrice() }}</div>
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
         this.pedido.order.forEach(product => {
            let count = product.price * product.quantity;
            console.log(count);
            this.totalOrderPrice += count;
            console.log(this.totalOrderPrice);
         });
         return normalizePrice(this.totalOrderPrice);
      }
   }
};
</script>

<style></style>
