<template>
   <div class="flex justify-center items-center h-screen">
      <div class="w-full max-w-xs">
         <form
            @submit.prevent="submit"
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
         >
            <div class="mb-4">
               <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="firstName"
                  >Nombre:</label
               >
               <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="firstName"
                  id="firstName"
                  v-model="userData.firstName"
                  required
               />
            </div>
            <div class="mb-4">
               <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="lastName"
                  >Apellidos:</label
               >
               <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="lastName"
                  id="lastName"
                  v-model="userData.lastName"
                  required
               />
            </div>
            <div class="mb-4">
               <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                  >Correo:</label
               >
               <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  id="email"
                  v-model="userData.email"
                  required
               />
            </div>
            <div class="mb-4">
               <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                  >Contraseña:</label
               >
               <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  name="password"
                  id="password"
                  v-model="userData.password"
                  required
               />
            </div>
            <div class="mb-4 w-full">
               <button
                  class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
               >
                  Registrame
               </button>
            </div>
            <div
               class="mb-4 w-full bg-red-500 text-white rounded font-bold py-2 px-4"
               v-if="isError"
            >
               {{ messageError }}
            </div>
         </form>
      </div>
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
