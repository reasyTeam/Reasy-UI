<script>
export default {
  props: {
    rowsData: Object,
    index: Number,
    fn: Function
  },
  render(createElement) {
    return createElement("div", this.fn(this.rowsData));
  }
};
</script>
