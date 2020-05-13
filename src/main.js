import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/styles/index.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
   faSignOutAlt,
   faSignInAlt,
   faUserCog,
   faShoppingCart,
   faTrash
} from '@fortawesome/free-solid-svg-icons';
import {
   FontAwesomeIcon,
   FontAwesomeLayers,
   FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome';
library.add(faSignOutAlt, faSignInAlt, faUserCog, faShoppingCart, faTrash);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

Vue.config.productionTip = false;

new Vue({
   router,
   store,
   render: h => h(App)
}).$mount('#app');
