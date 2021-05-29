import { checkData, isUndefinedOrNull } from "./libs";
export default {
  props: {
    isChild: {
      type: Boolean,
      default: false
    },
    // 是否忽略 组件 更新form-item的值 change 事件， 主要用于 组件中使用组件的情况 比如 select 中使用input
    // 默认不忽略
    ignoreUpdateValue: {
      type: Boolean,
      default: false
    }
  },
  inject: {
    elFormItem: {
      default: ""
    }
  },
  // computed: {
  //   errorMsg() {
  //     if (this.elFormItem) {
  //       return this.elFormItem.errorMsg;
  //     }
  //     return false;
  //   }
  // },
  computed: {
    isDisabled() {
      return (this.elFormItem && this.elFormItem.isDisabled) || this.disabled;
    }
  },
  data() {
    return {
      error: "",
      _name: ""
    };
  },
  created() {
    if (this.elFormItem && !this.elFormItem.isMounted) {
      this.$dispatch("v-form-item", "form-item:created", this);
      this.elFormItem.getValue = this.getValue.bind(this);
      this.elFormItem.checkData = this.checkData.bind(this);
      this.elFormItem.isMounted = true;
    }
    this._name = this.name || this.elFormItem.prop;
  },
  methods: {
    getValue() {
      return this.value;
    },
    beforeCheckError() {
      return false;
    },
    checkValid(val) {
      let result = this.checkData(val);
      this.elFormItem && this.elFormItem.setError(result);
    },
    checkData(val) {
      let result,
        valid = this.valid || [],
        required = false,
        ignore = false;

      //有表单组件时
      if (this.elFormItem) {
        required = this.elFormItem.required;
        ignore = this.elFormItem.ignore;
        valid =
          this.elFormItem.valid ||
          this.elFormItem.getValidateType(this.elFormItem.prop) ||
          [];
      }
      val = isUndefinedOrNull(val) ? this.value : val;
      result = this.beforeCheckError(val);
      //默认返回false 当返回true时 表示值正确，无需再进入下一步验证 返回string类型时 提示错误string
      if (result) {
        if (result === true) {
          return;
        }
        return result;
      }
      result = checkData.call(
        this,
        {
          disabled: this.isDisabled,
          valid: valid,
          required: required,
          ignore: ignore
        },
        val
      );
      return result;
    }
  },
  beforeMount() {
    this.$emit("form-item:remove");
  },
  watch: {
    // errorMsg(val) {
    //   if (
    //     (this.elFormItem && this.elFormItem.childVm === this) ||
    //     (!this.elFormItem && !this.isChild)
    //   ) {
    //     this.error = val;
    //   }
    // },
    size: {
      handler(val) {
        this.$dispatch("v-form-item", "form:size", val);
      },
      immediate: true
    },
    isDisabled(disabled) {
      if (this.elFormItem && !this.elFormItem.ignore) {
        //当form组件存在且需要数据验证时
        this.$dispatch("v-form-item", "form:error", !disabled);
      }
    }
  }
};
