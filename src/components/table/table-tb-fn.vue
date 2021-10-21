<script>
export default {
  props: {
    rowData: Object,
    index: Number,
    fn: [Function, Object, Array]
  },
  render(createElement) {
    return createElement(
      "div",
      typeof this.fn === "function" ? this.fn(this.rowData) : this.fn
    );
  }
};
</script>
