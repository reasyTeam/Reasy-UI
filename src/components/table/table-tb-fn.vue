<script>
export default {
  props: {
    rowData: Object,
    index: Number,
    className: String,
    fn: [Function, Object, Array]
  },
  render(createElement) {
    return createElement(
      "div",
      { class: this.className },
      typeof this.fn === "function" ? this.fn(this.rowData) : this.fn
    );
  }
};
</script>
