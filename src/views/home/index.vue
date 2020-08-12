<template>
  <div class="home-content">
    <div class="home-main">
      <left class="home-left" />
      <div class="center">
        <el-button>快速绑定</el-button>
      </div>
      <right class="home-right" />
    </div>
    <footer class="home-footer">
      <el-checkbox class="home-footer-item">隐藏已经绑定测点</el-checkbox>
      <el-button>生成</el-button>
      <span class="home-footer-item">version: 1.0</span>
    </footer>
  </div>
</template>

<script>
import Left from "./Left";
import Right from "./Right";
export default {
  components: {
    Left,
    Right
  }
};
</script>

<style lang="scss" scoped>
.home {
  &-content {
    height: calc(100% - 32px);
  }
  &-main {
    display: flex;
    height: calc(100% - 32px);
  }
  &-left,
  &-right {
    flex: 1;
    position: relative;
  }
  &-footer {
    height: 32px;
    display: flex;
    &-item {
      flex: 1;
    }
  }
}
</style>