<template>
   <div>
      <div
         class="flex justify-center md:justify-start ml-2 items-center mt-2 mr-2 bg-white py-2 shadow-md rounded"
      >
         <select
            name="filterType"
            id="filterType"
            class="appearance-none border rounded-l h-10 ml-2 px-3 text-gray-700 leading-tight focus:outline-none"
            v-model="propertyName"
         >
            <option
               v-for="(option, index) in optionFilter"
               :key="index"
               :value="option.value"
               :selected="option.value === 'name'"
               >{{ option.text }}</option
            >
         </select>
         <input
            v-if="propertyName === 'name'"
            type="text"
            name="filterOption"
            id="filterOption"
            v-model="filterOption"
            placeholder="Nombre del producto..."
            class="appearance-none rounded-r w-full h-10 border-r border-t border-b mr-2 px-3 text-gray-700 leading-tight focus:outline-none"
         />
         <div class="flex" v-if="propertyName === 'price'">
            <button
               @click="orderByPrice('cheap')"
               class="px-6 mx-1 py-2 bg-green-300 hover:bg-green-500 hover:text-white rounded focus:outline-none"
            >
               <font-awesome-icon
                  title="Baratos primero"
                  icon="sort-amount-up-alt"
               />
            </button>
            <button
               @click="orderByPrice('expensive')"
               class="px-6 mx-1 py-2 bg-green-300 hover:bg-green-500 hover:text-white rounded focus:outline-none"
            >
               <font-awesome-icon
                  title="Caros primero"
                  icon="sort-amount-down"
               />
            </button>
         </div>
      </div>
      <div
         v-if="products.length < 1"
         class="screen flex justify-center items-center text-5xl"
      >
         <font-awesome-icon icon="spinner" class="rotation" />
      </div>
      <div
         v-else-if="productFilter.length < 1"
         class="flex justify-center items-center mt-10"
      >
         <p class="bg-red-400 p-4 text-white font-bold rounded">
            NO SE HAN ENCONTRADO PRODUCTOS CON ESAS CARACTERÍSTICAS
         </p>
      </div>
      <div v-else class="container">
         <element-list
            v-for="(product, index) in productFilter"
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
         products: [],
         productFilter: [],
         filterOption: '',
         propertyName: 'name',
         optionFilter: [
            { value: 'name', text: 'Nombre' },
            { value: 'price', text: 'Precio' }
         ]
      };
   },
   methods: {
      async getProducts() {
         const api = new apiService();
         let response = await api.getProduct();
         this.products = response.data;
         this.productFilter = response.data;
      },
      filterByOption() {
         const filter = new RegExp(this.filterOption, 'i');
         const filterOption = this.propertyName;
         this.productFilter = this.products.filter(product =>
            product[filterOption].toString().match(filter)
         );
      },
      orderByPrice(condition) {
         this.productFilter = this.productFilter.sort((a, b) => {
            if (condition == 'expensive') return b.price - a.price;
            if (condition == 'cheap') return a.price - b.price;
         });
      }
   },
   watch: {
      filterOption() {
         this.filterByOption();
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
