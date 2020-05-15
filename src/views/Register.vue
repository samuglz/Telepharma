<template>
   <div class="flex justify-center items-center md:h-screen bg-green-400">
      <div class="w-full max-w-3xl">
         <div class="md:mt-0 md:mb-6 text-center">
            <h1 class=" text-4xl font-bold text-white">
               Regístrate en Telepharma
            </h1>
         </div>
         <div
            class="md:grid md:grid-cols-2 flex flex-col bg-white shadow-md rounded"
         >
            <div class="flex flex-col justify-center items-center mt-5 md:mt-0">
               <div>
                  <div
                     class="img-size flex justify-center items-center"
                     v-show="!isLoadedImg"
                  >
                     <font-awesome-icon
                        icon="spinner"
                        class="rotation text-5xl"
                     />
                  </div>
                  <img
                     class="rounded-full shadow-md"
                     :src="userData.avatar"
                     alt="Avatar Picture"
                     width="264"
                     height="280"
                     v-show="isLoadedImg"
                     @load="loaded"
                  />
               </div>
               <button
                  class="w-3/4 mt-6 py-2 px-4 bg-green-500 hover:bg-green-700 text-white font-bold rounded"
                  @click="loadImg"
               >
                  Generar Avatar
               </button>
               <span class="text-gray-600 text-xs mt-2">
                  ¡Crea tu propio avatar!
               </span>
            </div>
            <div class="md:hidden flex justify-center mt-5">
               <hr class="w-4/5 border-green-400" />
            </div>
            <form
               @submit.prevent="submit"
               class="bg-white rounded px-8 pt-6 pb-8 mb-4"
            >
               <div class="mb-4">
                  <label
                     class="block text-gray-700 text-sm font-bold mb-2"
                     for="firstName"
                  >
                     Nombre
                  </label>
                  <input
                     autocomplete="off"
                     title="Lütfen işaretli yerleri doldurunuz"
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
                  >
                     Apellidos
                  </label>
                  <input
                     autocomplete="off"
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
                  >
                     Correo Electrónico
                  </label>
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
                  >
                     Contraseña
                  </label>
                  <input
                     autocomplete="off"
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
                     Regístrate con tu e-mail
                  </button>
                  <div class="text-sm mt-2 text-gray-600">
                     ¿Ya tienes una cuenta de usuario?
                     <router-link to="/login">
                        <span class="hover:underline text-green-500 font-bold">
                           Iniciar sesión
                        </span>
                     </router-link>
                  </div>
               </div>
               <div
                  class="mb-4 w-full text-center text-red-500 text-white rounded font-bold py-2 px-4"
                  v-if="isError"
               >
                  {{ messageError }}!
               </div>
            </form>
         </div>
      </div>
   </div>
</template>

<script>
import apiService from '../services/databaseService';
import { mapState, mapMutations } from 'vuex';
import { storageAuth, decode } from '@/services/auth';
export default {
   mounted() {
      this.generateAvatar();
      this.loadImg();
   },
   data() {
      return {
         userData: {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            avatar: ''
         },
         isError: false,
         isLoadedImg: false,
         codeStatus: 201,
         messageError: ''
      };
   },
   computed: {
      ...mapState(['avatars'])
   },
   methods: {
      ...mapMutations(['setAuth', 'setUserID']),

      async submit() {
         const api = new apiService();
         let response = await api.newUser(this.userData);
         response.status !== 201
            ? this.showError(response)
            : this.successRegister(response);
      },
      loadImg() {
         this.isLoadedImg = false;
         this.$nextTick(() => {
            this.generateAvatar();
         });
      },
      loaded() {
         this.isLoadedImg = true;
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
      successRegister(response) {
         const dataToSave = {
            ...response.data,
            ...this.userData
         };
         storageAuth(dataToSave);
         const dataToken = decode(response.data.accessToken);
         console.log(dataToken);
         this.setUserID(dataToken.sub);
         this.setAuth(true);
         this.clearError();
         this.resetForm();
         this.$router.push('/');
      },
      randomNumber(maxNumber) {
         return Math.floor(Math.random() * maxNumber);
      },
      generateAvatar() {
         this.userData.avatar = `https://avataaars.io/?avatarStyle=${
            this.avatars.avatarStyle[
               this.randomNumber(this.avatars.avatarStyle.length)
            ]
         }&topType=${
            this.avatars.topType[this.randomNumber(this.avatars.topType.length)]
         }&accessoriesType=${
            this.avatars.accessoriesType[
               this.randomNumber(this.avatars.accessoriesType.length)
            ]
         }&hairColor=${
            this.avatars.hairColor[
               this.randomNumber(this.avatars.hairColor.length)
            ]
         }&facialHairType=${
            this.avatars.facialHairType[
               this.randomNumber(this.avatars.facialHairType.length)
            ]
         }&facialHairColor=${
            this.avatars.hairColor[
               this.randomNumber(this.avatars.hairColor.length)
            ]
         }&clotheType=${
            this.avatars.clotheType[
               this.randomNumber(this.avatars.clotheType.length)
            ]
         }&clotheColor=${
            this.avatars.clotheColor[
               this.randomNumber(this.avatars.clotheColor.length)
            ]
         }&eyeType=${
            this.avatars.eyeType[this.randomNumber(this.avatars.eyeType.length)]
         }&eyebrowType=${
            this.avatars.eyebrowType[
               this.randomNumber(this.avatars.eyebrowType.length)
            ]
         }&mouthType=${
            this.avatars.mouthType[
               this.randomNumber(this.avatars.mouthType.length)
            ]
         }&skinColor=${
            this.avatars.skinColor[
               this.randomNumber(this.avatars.skinColor.length)
            ]
         }`;
      }
   }
};
</script>

<style scoped>
.img-size {
   width: 264px;
   height: 280px;
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
