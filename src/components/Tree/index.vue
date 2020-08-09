<template>
  <el-tree></el-tree>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    props:{
        type: Object,
        default(){
            return {
               label: "label",
                
            }
        }
    }
  }
};
</script>

<style>
</style>