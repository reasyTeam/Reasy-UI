<template>
  <div class="v-badge">
    <sup
      :class="[
        `v-badge__${type}`,
        `v-badge__${status}`,
        { 'v-badge__rt': position !== '' }
      ]"
      >{{ text }}</sup
    >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "v-badge",
  props: {
    text: [String, Number],
    type: {
      type: String,
      default: "tip",
      validator(val) {
        let index = ["tip", "dot"].indexOf(val);
        if (index === -1) {
          console.error(`v-badge的type只能为tip或dot`);
        }
        return index !== -1;
      }
    },
    status: {
      type: String,
      default: "default",
      validator(val) {
        let index = ["success", "error", "warn", "default"].indexOf(val);
        if (index === -1) {
          console.error(
            `v-badge的status只能为['success', 'error', 'warn', 'default']`
          );
        }
        return index !== -1;
      }
    },
    position: {
      type: String,
      default: "",
      validator(val) {
        let index = ["", "rt"].indexOf(val);
        if (index === -1) {
          console.error(`v-badge的status只能为空或rt`);
        }
        return index !== -1;
      }
    }
  }
};
</script>
