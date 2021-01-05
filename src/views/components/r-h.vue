<template>
  <section class="section">
    <component :is="tag" :class="['h', tag]">{{ title }}</component>
    <p class="description">
      {{ desc }}
    </p>
    <div class="section-body" v-if="$slots.default">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      validator: function(value) {
        return ["h1", "h2", "h3"].indexOf(value) !== -1;
      }
    },
    desc: String
  }
};
</script>

<style lang="scss">
.section {
  margin-bottom: 40px;
  .h {
    font-weight: 500;
    color: #262626;
    margin-bottom: 8px;
  }
  .h1 {
    height: 32px;
    font-size: 24px;
    line-height: 32px;
  }

  .h2 {
    height: 26px;
    font-size: 18px;
    line-height: 26px;
  }

  .description {
    font-size: 14px;
    font-weight: 400;
    color: #595959;
    line-height: 22px;
  }

  .section-body {
    margin-top: 16px;
  }
}
</style>
