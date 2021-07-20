<template>
  <div class="v-popups v-popups--dark">
    <div class="v-popups__main">
      <div class="v-tooltip__main">
        <div class="v-tooltip__content">{{ value }}</div>
      </div>
    </div>
    <i class="v-popups__arrow v-popups__arrow v-popups__arrow--top"></i>
  </div>
</template>

<script>
export default {
  name: "slider-popups",
  props: {
    value: {
      default: ""
    }
  }
};
</script>
