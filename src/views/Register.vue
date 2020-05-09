<template>
   <div>
      <form @submit.prevent="submit">
         <label for="firstName">Nombre:</label>
         <input
            type="text"
            name="firstName"
            id="firstName"
            v-model="userData.firstName"
            required
         />
         <label for="lastName">Apellidos:</label>
         <input
            type="text"
            name="lastName"
            id="lastName"
            v-model="userData.lastName"
            required
         />
         <label for="email">Correo:</label>
         <input
            type="email"
            name="email"
            id="email"
            v-model="userData.email"
            required
         />
         <label for="password">Contraseña:</label>
         <input
            type="password"
            name="password"
            id="password"
            v-model="userData.password"
            required
         />
         <button type="submit">Registrame</button>
      </form>
      <div v-if="isError">{{ messageError }}</div>
   </div>
</template>

<script>
import apiService from '../services/databaseService.js';
export default {
   data() {
      return {
         userData: {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
         },
         isError: false,
         codeStatus: 201,
         messageError: ''
      };
   },
   methods: {
      async submit() {
         const api = new apiService();
         let response = await api.newUser(this.userData);
         console.log('POST', response);
         response.status !== 201
            ? this.showError(response)
            : this.successRegister();
      },
      resetForm() {
         this.userData = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
         };
      },
      showError(response) {
         this.isError = true;
         this.codeStatus = response.status;
         this.messageError = response.data;
      },
      clearError() {
         this.isError = false;
         this.codeStatus = 201;
         this.messageError = '';
      },
      successRegister() {
         this.clearError();
         this.resetForm();
         this.$router.push('/shop');
      }
   }
};
</script>

<style></style>
