<script>
export default {
  props: {
    option: Object,
    fn: Function
  },
  render(createElement) {
    return createElement("div", this.fn(this.option));
  }
};
</script>
