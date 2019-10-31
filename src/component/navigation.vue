<template>
  <v-list dense>
    <v-list-item :key="item.key" v-for="item in listItem">
      <v-list-item-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      listItem: [
        { key: 1, icon: 'home', title: '홈' },
        { key: 2, icon: 'mdi-tennis', title: '자유게시판' },
      ],
    };
  },
};
</script>
