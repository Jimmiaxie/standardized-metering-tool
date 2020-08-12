<template>
  <el-tree
    :data="data"
    :empty-text="emptyText"
    :accordion="accordion"
    :default-expanded-keys="expandeds"
    :default-checked-keys="selecteds"
    :filter-node-method="filter"
    @node-click="nodeClick"
  >
    <slot></slot>
  </el-tree>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    emptyText: {
      type: String,
      default: "暂无数据"
    },
    nodeKey: {
      require: true,
      type: String,
      default: ""
    },
    props: {
      require: true,
      type: Object,
      default: () => ({})
    },
    expandeds: {
      type: Array,
      default: () => []
    },
    selecteds: {
      type: Array,
      default: () => []
    },
    filter: {
      type: Function,
      default: () => () => true
    },
    accordion: {
      type: Boolean,
      default: () => true
    }
  },
  methods: {
    /**
     * 节点被点击时的回调
     *
     */
    nodeClick(obj, node, nodeComp) {
      this.$emit("node-click", obj, node, nodeComp);
    }
  }
};
</script>

<style>
</style>