<template>
  <v-app class="d-flex">
    <div><Header /></div>
    <Navigation />
    <router-view></router-view>
  </v-app>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';
import Header from './component/Header.vue';
import Navigation from './component/Navigation.vue';

Vue.use(VueRouter);

export default {
  name: 'App',
  components: { Header, Navigation },
  data() {
    return {
      message: 'Using Parcel In A Vue.js App',
      //drawer: {},
      icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram'],
    };
  },
};
</script>

<style scoped>
.container {
  width: 600px;
  margin: 50px auto;
  text-align: center;
}
</style>
