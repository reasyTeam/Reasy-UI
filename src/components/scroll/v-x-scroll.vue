<template>
  <v-scroll
    ref="scroll"
    :width="width"
    :toX="toX"
    :toY="toY"
    :sliderWidth="4"
    :toIndex="toIndex"
    :overflow="overflow"
    :isBlock="isBlock"
    @mounted="setPosition"
  >
    <slot></slot>
  </v-scroll>
</template>

<script>
export default {
  name: "v-x-scroll",
  props: {
    width: {
      type: Number,
      default: 0
    },
    border: {
      default: 0,
      type: Number
    },
    toX: {
      type: Number,
      default: 0
    },
    toY: {
      type: Number,
      default: 0
    },
    toIndex: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 5
    },
    overflow: {
      type: String,
      default: "auto",
      validator(val) {
        return ["x", "y", "auto", "hidden"].indexOf(val) !== -1;
      }
    },
    isBlock: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    scroll() {
      return this.$refs.scroll;
    }
  },
  watch: {
    count() {
      this.update();
    }
  },
  methods: {
    update() {
      if (this.count > 0) {
        let node = this.scroll.view.children[0];
        if (node && node.children && node.children.length !== 0) {
          let height = node.children[0].offsetHeight;
          let maxHeight = height;
          let childrenLen = node.children.length;
          let count = this.count > childrenLen ? childrenLen : this.count;
          for (let i = 1; i < count; i++) {
            if (node.children[i]) {
              maxHeight += node.children[0].offsetHeight;
            } else {
              maxHeight += height;
            }
          }
          this.scroll.setSize(maxHeight + this.border, this.width);
        } else {
          this.scroll.setSize(0, this.width);
        }
      }
    },
    scrollToIndex(index) {
      this.$refs.scroll.scrollToIndex(index);
    },
    setPosition(position) {
      this.$emit("mounted", position);
    }
  },
  mounted() {
    this.update();
  }
};
</script>
