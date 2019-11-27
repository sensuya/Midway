<template>
  <v-content>
    <v-data-table dense :headers="headers" :items="items" :items-per-page="5" :hide-default-footer="true" class="elevation-1 mytable">
      <template slot="item" slot-scope="props">
        <tr>
          <td class="center">{{ props.item.no }}</td>
          <td class="left">{{ props.item.title }}</td>
          <td class="center">{{ props.item.writer }}</td>
          <td class="center">{{ props.item.create_date }}</td>
          <td class="center">{{ props.item.click_no }}</td>
          <td class="center">{{ props.item.recomend_no }}</td>
        </tr>
      </template>
    </v-data-table>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      items: this.items,
      headers: this.headers,
    };
  },
};
</script>

<style scoped>
>>> .mytable thead {
  background-color: skyblue;
}
>>> .mytable table {
  width: 90%;
  margin: auto;
  border: 1px solid black;
}
>>> .mytable td.left {
  text-align: left;
}
>>> .mytable td.center {
  text-align: center;
}
</style>
