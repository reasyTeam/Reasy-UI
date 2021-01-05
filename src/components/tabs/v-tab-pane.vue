<template>
  <div v-if="!lazy" v-show="active" class="v-tab-pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "v-tab-pane",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    },
    value: String
  },
  computed: {
    active() {
      return this.$parent.value === this.value;
    },
    lazy() {
      const { lazy } = this.$parent;
      if (lazy) {
        return this.active ? !this.active : lazy;
      }
      return lazy;
    }
  },
  updated() {
    this.$parent.$emit("tab-nav-update");
  }
};
</script>
