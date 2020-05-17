<template>
   <div class="flex justify-center items-center h-screen bg-green-400">
      <div class="w-full max-w-md">
         <form
            @submit.prevent="submit"
            class="bg-white rounded px-8 pt-6 pb-8 mb-4 shadow-xl"
         >
            <div class="mb-4">
               <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                  >Correo Electrónico</label
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
                  >Contraseña</label
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
            <div class=" w-full">
               <button
                  class="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
               >
                  Iniciar Sesión
               </button>
               <div class="text-sm mt-2 text-gray-600 text-center">
                  ¿Eres nuevo en Telepharma?
                  <router-link to="/register"
                     ><span class="hover:underline text-green-500 font-bold">
                        ¡Regístrate!
                     </span></router-link
                  >
               </div>
            </div>
            <div
               class="mb-4 w-full text-center text-red-500 text-white rounded font-bold py-2 px-4"
               v-if="isError"
            >
               {{ messageError }}.
            </div>
         </form>
      </div>
   </div>
</template>

<script>
import apiService from '../services/databaseService.js';
import { mapMutations } from 'vuex';
import { decode, storageAuth } from '@/services/auth';
export default {
   data() {
      return {
         userData: {
            email: '',
            password: ''
         },
         isError: false,
         messageError: 'El usuario o la contraseña son incorrectos'
      };
   },
   methods: {
      async submit() {
         const api = new apiService();
         let response = await api.login(this.userData);
         !response.accessToken
            ? (this.isError = true)
            : this.successLogin(response);
      },

      resetForm() {
         this.userData = {
            email: '',
            password: ''
         };
      },

      successLogin(response) {
         const dataToSave = {
            accessToken: response.accessToken,
            ...this.userData
         };
         storageAuth(dataToSave);
         const dataToken = decode(response.accessToken);
         this.setUserID(dataToken.sub);
         this.setAuth(true);
         this.resetForm();
         this.$router.push(`${localStorage.getItem('initialPath')}`);
      },

      ...mapMutations(['setAuth', 'setUserID'])
   }
};
</script>

<style></style>
