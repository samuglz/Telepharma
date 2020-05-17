<template>
   <div class="bg-green-300 screen">
      <div>
         <h1
            class="text-center md:text-left bg-white p-3 text-green-500 font-bold"
         >
            ({{ totalUnits }}) Artículos en tu cesta:
         </h1>
      </div>
      <div class="flex flex-col justify-center items-center">
         <cart-view-element />
      </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartViewElement from '@/components/CartViewElement';
export default {
   computed: {
      ...mapGetters(['totalUnits'])
   },
   components: {
      CartViewElement
   }
};
</script>

<style scoped>
.screen {
   min-height: 90.88vh;
}
</style>
