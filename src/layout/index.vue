<template>
  <div class="m-layout">
    <my-menu></my-menu>
    <div class="p-right">
      <div class="p-head">This is head</div>
      <router-view to="/home"></router-view>
    </div>
  </div>
</template>

<script>
import myMenu from "./component/menu";
export default {
  components: {
    myMenu
  }
};
</script>

<style lang="scss" scoped>
.m-layout {
  display: flex;
  height: 100%;
}
.p {
  &-right {
    flex: 1;
  }
  &-head {
    height: 32px;
  }
}
</style>