<template>
  <div>
    Home
    <div>
      <Table :items="items" :headers="headers" />
    </div>
  </div>
</template>

<script>
import Table from '../component/Table';

export default {
  components: { Table },
  data: () => {
    return {
      headers: [
        {
          text: '번호',
          align: 'center',
          value: 'no',
          width: '10%',
        },
        { text: '제목', value: 'title', align: 'left', width: '50%' },
        { text: '글쓴이', value: 'writer', align: 'center', width: '10%' },
        { text: '작성일', value: 'create_date', align: 'center', width: '10%' },
        { text: '조회', value: 'click_no', align: 'center', width: '10%' },
        { text: '추천', value: 'recomend_no', align: 'center', width: '10%' },
      ],
      items: [
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
        },
      ],
    };
  },
};
</script>

<style></style>
