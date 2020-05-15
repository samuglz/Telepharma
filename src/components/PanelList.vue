<template>
   <div>
      <div
         v-if="products.length < 1"
         class="screen flex justify-center items-center text-5xl"
      >
         <font-awesome-icon icon="spinner" class="rotation" />
      </div>
      <div v-else class="container">
         <element-list
            v-for="(product, index) in products"
            :key="index"
            :product="product"
            class="m-2"
         />
      </div>
   </div>
</template>

<script>
import ElementList from '@/components/ElementList';
import apiService from '@/services/databaseService.js';
export default {
   components: {
      ElementList
   },
   mounted() {
      this.getProducts();
   },
   data() {
      return {
         products: []
      };
   },
   methods: {
      async getProducts() {
         const api = new apiService();
         let response = await api.getProduct();
         this.products = response.data;
      }
   }
};
</script>

<style scoped>
.screen {
   min-height: 90vh;
}
.container {
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
.rotation {
   animation: rotation 0.75s linear infinite;
}
@keyframes rotation {
   0% {
      transform: rotate(0);
   }
   100% {
      transform: rotate(360deg);
   }
}
</style>
