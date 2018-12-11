import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import store from './_store';
import './registerServiceWorker';

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faMapMarkerAlt, faCog, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faCoffee, faMapMarkerAlt, faCog, faBars);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// setup fake backend
import { configureFakeBackend } from '@/_helpers/fake-backend';
configureFakeBackend();

Vue.config.productionTip = false;

// Create vue app
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
