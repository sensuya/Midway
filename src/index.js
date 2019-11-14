import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import routes from './route/router';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App';

Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({ routes });

const opts = {
  icons: {
    iconfont: 'mdi',
  },
};

new Vue({
  router,
  el: '#app',
  vuetify: new Vuetify(opts),
  render: h => h(App),
});
