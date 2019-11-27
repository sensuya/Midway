<template>

<v-content>
  <v-data-table 
    dense
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    :hide-default-footer="true"
    class="elevation-1 mytable"
  >
    <template slot="item" slot-scope="props">
    <tr>
    <td class="center">{{ props.item.no }}</td>
    <td class="left">{{ props.item.title }}</td>
    <td class="center">{{ props.item.writer }}</td>
    <td class="center">{{ props.item.create_date }}</td>
    <td class="center">{{ props.item.click_no }}</td>
    <td class="center">{{ props.item.recomend_no }}</td>
    </template>
  </v-data-table>
</v-content>

</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: '번호',
            align: 'center',
            //sortable: false,
            value: 'no',
            width: "10%"
          },
          { text: '제목', value: 'title' , align: 'left' , width: "50%"},
          { text: '글쓴이', value: 'writer' , align: 'center', width: "10%"},
          { text: '작성일', value: 'create_date' , align: 'center', width: "10%"},
          { text: '조회', value: 'click_no' , align: 'center', width: "10%"},
          { text: '추천', value: 'recomend_no' , align: 'center', width: "10%"},
        ],
        desserts: [
          {
            no: '5123645',
            title: '현진이 요즘 빵 안먹나',
            writer: '창피해',
            create_date: '19.07.25',
            click_no: '4',
            recomend_no: '1',
          },
          {
            no: '5123644',
            title: '최규범 선주희',
            writer: '최선',
            create_date: '19.07.26',
            click_no: '5',
            recomend_no: '3',
          }
        ],
      }
    },
  }
</script>

<style scoped>
>>>.mytable thead{
  background-color: skyblue;
}
>>>.mytable table {
    width: 90%;
    margin: auto;
    border: 1px solid black;
}
>>>.mytable td.left {
    text-align:left;
}
>>>.mytable td.center {
    text-align:center;
}
</style>