<template>
  <v-app class="d-flex">
    <div>
      <Header />
    </div>
    <div>
        <Navigation />
    </div>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Header from './component/Header';
import Navigation from './component/Navigation';

export default {
  name: 'App',
  components: { Header, Navigation },
  data() {
    return {
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
