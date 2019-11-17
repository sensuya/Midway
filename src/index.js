import 'babel-polyfill';
import Vue from 'vue';
import Vuetify from 'vuetify';
import router from './route';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App';

Vue.use(Vuetify);

const opts = {
  icons: {
    iconfont: 'mdi',
  },
};

new Vue({
  el: '#app',
  vuetify: new Vuetify(opts),
  render: h => h(App),
  router,
});
