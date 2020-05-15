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
   faTrash,
   faListUl,
   faSpinner
} from '@fortawesome/free-solid-svg-icons';
import {
   FontAwesomeIcon,
   FontAwesomeLayers,
   FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome';
library.add(
   faSignOutAlt,
   faSignInAlt,
   faUserCog,
   faShoppingCart,
   faTrash,
   faListUl,
   faSpinner
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

import vmodal from 'vue-js-modal';
Vue.use(vmodal, {
   dialog: true,
   dynamic: true,
   dynamicDefaults: {
      foo: 'foo'
   },
   injectModalsContainer: true
});

Vue.config.productionTip = false;

new Vue({
   router,
   store,
   render: h => h(App)
}).$mount('#app');
