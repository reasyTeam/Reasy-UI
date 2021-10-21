<script>
export default {
  props: {
    rowData: Object,
    index: Number,
    fn: Function
  },
  render(createElement) {
    return createElement("div", this.fn(this.rowData));
  }
};
</script>
