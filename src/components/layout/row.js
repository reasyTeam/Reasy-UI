export default {
  name: "v-row",
  props: {
    gutter: {
      type: [Number, String],
      default: 0,
      validator(val) {
        val = parseInt(val);
        if (val < 0) {
          console.error("[v-row]的[gutter]属性必须大于零");
          return false;
        }
        if (val % 2 !== 0) {
          console.warn("[v-row]的[gutter]属性建议设成偶数");
          return false;
        }
        return true;
      }
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  computed: {
    style() {
      let style = {};
      if (this.gutter) {
        style.marginLeft = `-${this.gutter / 2}px`;
        style.marginRight = `-${this.gutter / 2}px`;
      }
      return style;
    }
  },
  render(h) {
    return h(
      this.tag,
      {
        class: ["v-row"],
        style: this.style
      },
      [this.$slots.default]
    );
  }
};
