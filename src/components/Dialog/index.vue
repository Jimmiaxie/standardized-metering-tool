<template>
  <el-dialog :title="title" :visible.sync="dialogVisible" :before-close="handleClose" @close="handleClose">
    <slot name="content"></slot>
    <div v-if="footer">
      <slot name="footer" class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button @click="handleConfirm">确定</el-button>
      </slot>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "提示"
    },
    width: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean,
      default: () => false
    },
    footer: {
      type: Boolean,
      default: () => true
    }
  },
  data() {
    return {
      dialogVisible: this.visible
    };
  },
  watch: {
    visible(val) {
      console.log("visible", val);
      this.dialogVisible = val;
    }
  },
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
      this.dialogVisible = false;
    },
    handleCancel() {
      this.dialogVisible = false;
    },
    handleConfirm() {
      this.$emit("confirm");
      this.dialogVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.dialog-footer {
  margin-top: 10px;
}
</style>