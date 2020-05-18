<template>
   <div class="screen bg-green-400"></div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
   mounted() {
      setTimeout(() => {
         this.showAlert();
      }, 500);
   },
   methods: {
      showAlert() {
         // Use sweetalert2
         this.$swal({
            position: 'center',
            icon: 'success',
            title: 'Tu compra se ha realizado correctamente',
            showConfirmButton: false,
            timer: 2000
         }).then(() => {
            this.resetCart();
            this.$router.push('/');
         });
      },
      ...mapMutations(['resetCart'])
   }
};
</script>

<style scoped>
.screen {
   min-height: 100vh;
}
</style>
