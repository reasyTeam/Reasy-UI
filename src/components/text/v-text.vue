<template>
  <div class="form-group form-text" :class="css">
    <label class="form-title">{{title}}</label>
    <div class="form-content bold-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-text",
  props: ["title", "css"]
};
</script>
