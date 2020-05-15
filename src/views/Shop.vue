<template>
   <div class="screen bg-green-100 flex justify-center">
      <panel-list />
   </div>
</template>

<script>
import PanelList from '@/components/PanelList';
export default {
   components: {
      PanelList
   }
};
</script>

<style scoped>
.screen {
   min-height: 90vh;
}
</style>
