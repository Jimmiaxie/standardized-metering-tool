<template>
  <el-menu class="m-menu">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>菜单1</span>
      </template>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.m-menu {
  width: 200px;
  height: 100%;
}
</style>