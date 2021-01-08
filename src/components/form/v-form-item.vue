<template>
  <div class="v-form-item">
    <!-- 左边文字 -->
    <label
      v-if="!isNoLabel"
      :style="{ width: labelWidth + 'px' }"
      ref="label"
      :class="[
        sizeCss,
        {
          'v-form-item__label--right': labelPosition === 'right'
        }
      ]"
      class="v-form-item__label"
    >
      <!-- 文字显示 -->
      <span ref="labelTxt" v-if="label">{{ label }}</span>
      <!-- 左边插槽 -->
      <slot name="label"></slot>
    </label>
    <!-- 右边内容 -->
    <div
      class="v-form-item__content"
      :style="{ 'margin-left': !isNoLabel ? labelWidth + 20 + 'px' : '0' }"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { checkData } from "../libs";
export default {
  name: "v-form-item",
  props: {
    //左边文字
    label: String,
    //是否隐藏文字
    isNoLabel: {
      type: Boolean,
      default: false
    },
    //属性值，数据验证和提交数据时必填
    prop: String,
    //是否必填
    required: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    //组件标题宽度
    labelWidth() {
      return this.$getLabelWidth();
    },
    sizeCss() {
      let cssObj = {
        M: "v-form-item__label--medium",
        S: "v-form-item__label--small",
        L: "v-form-item__label--large"
      };
      return cssObj[this.size] || cssObj.M;
    },
    //是否禁用
    disabled() {
      return this.childNode.disabled;
    },
    //子元素值
    value() {
      return this.childNode.value;
    },
    //子元素尺寸大小
    size() {
      return this.childNode.size;
    }
  },
  data() {
    return {
      isMounted: false, //子元素是否挂载
      errorMsg: "", //错误信息
      valid: [], //数据验证规则，由form表单处理
      isFoucs: false, //是否聚焦
      labelPosition: "left", //标题文字方向
      childNode: {} //子元素Vnode
    };
  },

  created() {
    //创建组件时，将子组件保存下来
    this.$on("form:created", vnode => {
      if (!this.isMounted) {
        this.childNode = vnode;
        this.isMounted = true;
      }
    });
    //失焦后数据验证
    this.$on("form:blur", () => {
      this.checkValid();
    });
    //数据验证
    this.$on("form:check", () => {
      this.checkValid();
    });
    //注册组件到form表单
    this.$dispatch("v-form", "form.addField", this);
  },

  mounted() {
    //标题文字长度改变事件
    this.changeTitle();
  },
  methods: {
    //数据验证
    checkValid(val) {
      let result = true;
      val = val || this.value;
      result = checkData.call(
        this,
        {
          disabled: this.disabled,
          valid: this.valid,
          required: this.required,
          ignore: !this.prop
        },
        val
      );
      //错误文字信息
      this.setError(result);
      return !result;
    },
    setError(msg) {
      this.errorMsg = msg;
      this.childNode.error = msg;
    },
    changeTitle() {
      if (this.$refs.labelTxt) {
        let width = this.$refs.labelTxt.offsetWidth;
        //将宽度广播到表单组件
        this.$dispatch("v-form", "label-width", width);
      }
    }
  },
  watch: {
    title: {
      handler() {
        this.changeTitle();
      }
      //immediate: true
    }
  },
  //组件注销时，删除表单的注册
  destroyed() {
    this.$dispatch("v-form", "form.removeField", this);
    this.childNode = {};
  }
};
</script>
