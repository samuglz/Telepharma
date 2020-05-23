<template>
   <div class="screen bg-green-400"></div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { formatDate } from '@/utils/utils';
import dbService from '@/services/databaseService';
import { decode } from '@/services/auth';
import uniqid from 'uniqid';
export default {
   mounted() {
      setTimeout(() => {
         this.showAlert();
      }, 500);
   },
   computed: {
      ...mapState(['userID', 'cart'])
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
         }).then(async () => {
            const api = new dbService();
            const { sub } = decode(localStorage.getItem('accessToken'));
            const response = await api.getUser({ id: sub });
            let date = new Date();
            date = formatDate(date);
            response.data[0].pedidos.push({
               orderID: uniqid('order-'),
               order: this.cart,
               date
            });
            response.data[0].password = localStorage.getItem('password');
            await api.update(response.data[0]);
            this.resetCart();
            this.$router.push('/');
         });
      },
      ...mapMutations(['resetCart', 'setUserID'])
   }
};
</script>

<style scoped>
.screen {
   min-height: 100vh;
}
</style>
