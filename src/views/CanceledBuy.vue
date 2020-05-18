<template>
   <div class="screen bg-green-400"></div>
</template>

<script>
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
            icon: 'error',
            title: 'Ups, no se ha podido completar el pago.',
            html:
               'Intente realizar la compra más adelante y si el problema persiste pongase en contacto con el ' +
               '<a class="text-blue-400 hover:underline" href="app.telepharma.online/support">soporte de la app</a>',
            confirmButtonText: 'Volver',
            confirmButtonColor: 'rgba(250,0,0,0.8)'
         }).then(() => {
            this.$router.push('/');
         });
      }
   }
};
</script>

<style scoped>
.screen {
   min-height: 100vh;
}
</style>
