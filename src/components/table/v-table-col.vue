<template>
  <div></div>
</template>

<script>
import { copyDeepData, IGuid } from "../libs";
let expandFn = function() {};
export default {
  name: "v-table-col",
  props: {
    type: String,
    fixed: {
      type: [String, Boolean],
      default: false
    },
    //表头列表项操作
    addOperate: {
      type: Boolean,
      default: true
    },
    //表头列表项默认状态
    isDefaultValue: {
      type: Boolean,
      default: true
    },
    hideInOpreate: {
      type: Boolean,
      default: false
    },
    //文字换行 数据为数组
    wordWrap: {
      type: Boolean,
      default: false
    },
    //状态颜色 数据为对象
    // textColor: {
    //   type: Boolean,
    //   default: false
    // },
    // colorObj: {
    //   type: Object,
    //   default: () => {
    //     return {};
    //   }
    // },
    label: {
      //表头文字
      default: "",
      type: String
    },
    prop: {
      //表格字段
      default: "",
      type: String
    },
    width: {
      //宽度
      type: [String, Number],
      default: ""
    },
    maxWidth: {
      //宽度
      type: [String, Number],
      default: ""
    },

    isHtmlHeader: {
      //是否支持html
      type: Boolean,
      default: false
    },
    isTooltip: {
      //是否支持提示信息
      type: Boolean,
      default: false
    },
    // 提示信息的配置信息
    tooltipOption: {
      type: Object,
      default: () => {
        return {};
      }
    },
    isNoFixed: {
      //是否没有fixed样式
      type: Boolean,
      default: false
    },
    isSort: {
      //是否支持排序
      type: Boolean,
      default: false
    },
    defaultSortType: {
      type: String,
      default: ""
    },
    isSearch: {
      //是否支持搜索
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: "left"
    },
    format: {
      type: Function,
      default(prop, data) {
        return data[prop];
      }
    },
    beforeSelected: {
      type: Function,
      default() {
        return true;
      }
    },
    getDisabled: {
      type: Function,
      default() {
        return false;
      }
    }
  },
  computed: {
    // 当前列对应的字段
    tableProp() {
      if (this.prop === "") {
        return IGuid();
      }
      return this.prop;
    }
  },
  mounted() {
    this.$dispatch("v-table", "add.column", this.getProps());
  },
  methods: {
    getProps() {
      let props = copyDeepData(this.$props);
      props.sortType = "";
      // vue作用域插槽渲染函数,该函数返回相应VNode。
      props.fn = this.$scopedSlots.default;
      if (props.fn === undefined && this.$slots.default) {
        props.fn = this.$slots.default;
      }
      props.expandFn = this.$scopedSlots.expand || expandFn;
      // 表格字段
      props.prop = this.tableProp;
      return props;
    }
  },
  beforeDestroy() {
    this.$dispatch("v-table", "remove.column", this.tableProp);
  },
  watch: {
    label() {
      this.$dispatch("v-table", "update.column", this.getProps());
    }
  }
};
</script>
