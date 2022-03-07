// 控制强制设置ID，且id不能重复
export default {
  props: {
    name: {
      type: String,
      required: false,
      default: ""
    },
    noId: {
      type: Boolean,
      default: false
    }
  },
  filters: {
    id(name, suffix) {
      if (name === "") {
        return "";
      }
      return `${name}-${suffix}`;
    }
  },
  mounted() {
    let { noId, name } = this;
    if (noId === false) {
      if (name === "") {
        console.error(`[${this.$options.name}][name为必填]`);
        return;
      }
      if (document.querySelectorAll(`#${name}`).length > 1) {
        console.error(
          `[${this.$options.name}][id为${name}的元素已存在，请重新设置name]`
        );
      }
    }
  }
};
