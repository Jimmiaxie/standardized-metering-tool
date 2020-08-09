<template>
  <el-table
    :data="data"
    class="min-table"
    :height="height"
    :border="border"
    :fit="fit"
    @cell-click="cellClick"
    @row-click="rowClick"
    style="width: 100%"
  >
    <el-table-column
      v-for="(item,index) in column"
      :label="item.label"
      :width="item.width"
      :min-width="item.minWidth"
      :key="index"
      :formatter="item.formatter"
      :show-overflow-tooltip="item.showToolTip"
      :prop="item.prop"
    >
      <slot name="scope"></slot>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    data: {
      required: true,
      type: Array,
      default: () => []
    },
    height: {
      type: String,
      default: "100%"
    },
    border: {
      type: Boolean,
      default: () => false
    },
    column: {
      type: Array,
      default: () => []
    },
    fit: {
      type: Boolean,
      default: () => true
    }
  },
  methods: {
    cellClick() {},
    rowClick() {}
  }
};
</script>

<style lang="scss" scoped>

</style>