<template>
  <my-table :column="columns" :data="data" border height="calc(100% - 32px)"></my-table>
</template>

<script>
import MyTable from "@/components/Table";
import TableHead from "../TableHead";
export default {
  components: {
    MyTable
  },
  props: {
    data: {
      type: Array,
      default: ()=>[]
    },
    head: {
      type: Array,
      default: ()=>[]
    }
  },
  data() {
    return {
        // columns:[]
    };
  },
  mounted(){

  },
  computed: {
    columns() {
        const widthList = {
            number: '46',
            unit: '60',
        };
      let columnList = [];
      this.head.forEach(i => {
          i.showToolTip = true;
         i.width =  widthList[i.key];
         i.minWidth = "150";
        columnList.push(new TableHead(i));
      });
      return columnList;
    }
  }
};
</script>

<style>
</style>