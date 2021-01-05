export default {
  data() {
    return {
      error: ""
    };
  },
  created() {
    this.$dispatch("v-form-item", "form:created", this);
  },
  watch: {
    value() {
      //值变化后执行数据验证
      this.$dispatch("v-form-item", "form:check");
    }
  }
};
