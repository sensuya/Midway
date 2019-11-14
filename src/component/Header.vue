<template>
  <v-app-bar :class="`d-flex justify-center align-center`" height="100rem" style="padding-top: 1.5rem;">
    <p style="padding-right:10px;">흥정망정</p>
    <v-text-field rounded="true" outlined="true"></v-text-field>
    <v-btn icon class="test"><v-icon>mdi-magnify</v-icon></v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style>
.test {
  display: inline;
}
</style>
