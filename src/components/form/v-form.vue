<template>
  <section class="v-form">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: "v-form",
  props: {
    //数据验证规则
    rules: {
      type: Object,
      default() {
        return {};
      }
    },
    //表单数据对象
    model: {
      type: Object,
      default() {
        return {};
      }
    },
    //文字方向
    isLabelRight: {
      type: Boolean,
      default: false
    },
    //提交前自定义事件，返回false时不会执行submit
    beforeSubmit: {
      type: Function,
      default(data) {
        return data;
      }
    }
  },
  data() {
    return {
      fields: [],
      labelWidth: 0
    };
  },

  created() {
    this.$on("form.addField", field => {
      this.addField(field);
    });
    this.$on("form.removeField", field => {
      this.removeField(field);
    });
    this.$on("label-width", width => {
      if (width > this.labelWidth) {
        this.labelWidth = width;
      }
    });
  },
  methods: {
    addField(field) {
      //给formItem添加验证规则
      field.valid = this.rules[field.prop] || [];
      field.labelPosition = this.isLabelRight ? "right" : "left";
      this.fields.push(field);
    },

    removeField(field) {
      this.fields = this.fields.filter(item => item !== field) || [];
    },

    //表单数据验证
    checkValidate() {
      let error = true;
      this.fields.forEach(field => {
        if (field.prop) {
          let checkSuccess = field.checkValid(field.value);
          if (!checkSuccess) {
            error = false;
          }
        }
      });
      return error;
    },

    //获取表单提交数据
    getSubmitData() {
      let subData = {};
      this.fields.forEach(field => {
        if (!field.ignore && field.prop) {
          //未忽略时传值
          subData[field.prop] = this.model[field.prop];
        }
      });
      return subData;
    },
    //表单提交时执行
    submitForm() {
      //有错
      if (!this.checkValidate()) {
        this.$message.error("请检查错误信息");
        return false;
      }
      //表单自定义事件
      let subData = this.getSubmitData();
      let result = this.beforeSubmit(subData);
      if (typeof result === "string") {
        this.$message.error(result);
        return false;
      } else if (result === false) {
        return false;
      }
      //数据验证通过
      this.$emit("submit", subData);
    },

    cancelForm() {
      if (typeof this.cancel == "function") {
        this.cancel();
      } else {
        this.$emit("cancel");
      }
    }
  }
};
</script>
