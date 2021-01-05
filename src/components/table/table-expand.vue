<script>
export default {
  props: {
    rowsData: Object,
    index: Number,
    expandFn: Function
  },
  render(createElement) {
    return createElement("div", [this.expandFn(this.rowsData)]);
  }
};
</script>
