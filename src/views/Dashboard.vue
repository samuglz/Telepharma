<template>
   <div class="bg-green-400 screen">
      <div class="inline-flex w-full bg-white justify-around">
         <button
            class="py-2 w-full focus:outline-none"
            :class="{
               'border-b-2': !isHistory,
               'border-green-700': !isHistory,
               'font-bold': !isHistory,
               'bg-gray-100': !isHistory
            }"
            @click="isHistory = false"
         >
            Datos
         </button>
         <button
            class="py-2 w-full focus:outline-none"
            :class="{
               'border-b-2': isHistory,
               'border-green-700': isHistory,
               'font-bold': isHistory,
               'bg-gray-100': isHistory
            }"
            @click="isHistory = true"
         >
            Historial
         </button>
      </div>
      <div v-if="isHistory">
         <div v-if="userData.pedidos.length < 1" class="flex justify-center">
            <div
               class="mt-2 mx-2 p-4 bg-white rounded shadow text-center flex flex-col md:w-3/5"
            >
               <p>No has realizado pedidos con anterioridad.</p>
               <router-link
                  class="hover:underline hover:text-green-800 text-green-400"
                  to="/"
                  >Ir a la tienda.</router-link
               >
            </div>
         </div>
         <historial
            v-for="pedido in userData.pedidos"
            :key="pedido.orderID"
            :pedido="pedido"
         />
      </div>
      <div v-if="!isHistory">
         <div class="flex justify-center w-full">
            <button
               class="m-3 py-2 px-6 w-3/4 rounded font-bold hover:text-white bg-green-200 hover:bg-green-600"
               @click="enableEdit()"
            >
               Editar Perfil
            </button>
         </div>
         <div class="flex justify-center">
            <div
               class="img-size flex justify-center items-center"
               v-show="!isLoadedImg"
            >
               <font-awesome-icon icon="spinner" class="rotation text-5xl" />
            </div>
            <img
               :src="userData.avatar"
               alt="PROF_PIC"
               width="264"
               height="280"
               v-show="isLoadedImg"
               @load="loaded"
            />
         </div>
         <div class="rounded mx-3 p-2 bg-white shadow grid grid-cols-2 gap-3">
            <label for="firstName">Nombre: </label>
            <input
               name="firstName"
               v-model="userData.firstName"
               type="text"
               :readonly="isEditable"
            />
            <label for="lastName">Apellidos: </label>
            <input
               name="lastName"
               v-model="userData.lastName"
               type="text"
               :readonly="isEditable"
            />
            <label for="password">Contraseña: </label>
            <input
               placeholder="*****"
               name="password"
               v-model="userData.password"
               type="password"
               :readonly="isEditable"
            />
            <label for="email">Correo: </label>
            <input
               name="email"
               v-model="userData.email"
               type="email"
               :readonly="isEditable"
            />
         </div>
         <div class="flex justify-center w-full">
            <button
               :disabled="isEditable"
               class="m-3 py-2 px-6 w-3/4 rounded font-bold"
               :class="{
                  'hover:text-white': !isEditable,
                  'hover:bg-green-600': !isEditable,
                  'bg-gray-400': isEditable,
                  'bg-green-200': !isEditable
               }"
               @click="update()"
            >
               Guardar cambios
            </button>
         </div>
      </div>
   </div>
</template>

<script>
import { decode } from '@/services/auth';
import dbService from '@/services/databaseService';
import Historial from '@/components/Historial';
export default {
   data() {
      return {
         userData: {},
         isEditable: true,
         isLoadedImg: false,
         isHistory: false
      };
   },
   components: {
      Historial
   },
   mounted() {
      this.loadImg();
      this.getUserData();
   },
   methods: {
      enableEdit() {
         this.isEditable = false;
      },
      async getUserData() {
         const { sub } = decode(localStorage.getItem('accessToken'));
         const api = new dbService();
         const response = await api.getUser({ id: sub });
         this.userData = response.data[0];
         this.userData.password = '';
      },
      loadImg() {
         this.isLoadedImg = false;
      },
      loaded() {
         this.isLoadedImg = true;
      },
      update() {
         const api = new dbService();
         if (this.userData.password === '') {
            this.userData.password = localStorage.getItem('password');
         }
         this.$swal({
            title: '¿Desea guardar los cambios?',
            icon: 'info',
            text: 'Los datos proporcionados actualizarán su perfil.',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#21b534',
            showCancelButton: true
         }).then(async result => {
            if (result.value) {
               const response = await api.update(this.userData);
               if (response.status == 200) {
                  this.userData = response.data;
                  this.userData.password = '';
                  this.$swal({
                     title: 'Se han guardado los datos correctamente',
                     icon: 'success',
                     showConfirmButton: false,
                     timer: 1500
                  });
               } else {
                  this.$swal({
                     title: 'Se ha producido un error en la petición',
                     icon: 'error',
                     showConfirmButton: true,
                     confirmButtonColor: 'rgba(250,0,0,0.8)'
                  });
               }
            }
         });
         this.isEditable = false;
      }
   }
};
</script>

<style scoped>
label {
   text-align: right;
}
.screen {
   min-height: 90.8vh;
}
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
