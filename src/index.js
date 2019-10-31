import 'babel-polyfill';
import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import App from './App';

Vue.use(Vuetify);

const opts = {
  theme: {
    dark: true,
  },
  icons: {
    iconfont: 'mdi',
  },
};

new Vue({
  el: '#app',
  vuetify: new Vuetify(opts),
  render: h => h(App),
});
