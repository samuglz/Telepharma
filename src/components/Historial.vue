<template>
   <div>
      <div v-for="(pedido, index) in pedidos" :key="index">{{ pedido }}</div>
   </div>
</template>

<script>
export default {
   props: {
      pedidos: {
         type: Array,
         required: true
      }
   }
};
</script>

<style></style>
