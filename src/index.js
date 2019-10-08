import 'babel-polyfill';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import App from './App';

Vue.use(Vuetify);

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  render: h => h(App),
});
