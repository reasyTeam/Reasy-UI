<template>
  <div
    class="v-chart__legends"
    :style="{
      paddingRight: showArrow ? `${offsetHeight}px` : '0',
      height: height
    }"
  >
    <label
      class="legend"
      v-for="item in legends"
      :key="item"
      @click.prevent.stop="change(item)"
    >
      <i
        :class="legend"
        :style="{
          background: hideLegends[item] ? '#ddd' : legendColor[item]
        }"
      ></i>
      <span :style="{ color: hideLegends[item] ? '#ddd' : 'inherit' }">{{
        item
      }}</span>
    </label>
    <label class="v-chart__legends__slide" v-if="showArrow" @click="toogle">
      <i :class="['icon v-icon-up', { active: active }]"></i>
    </label>
  </div>
</template>

<script>
export default {
  name: "v-chart-legend",
  props: {
    // 图例样式
    legend: {
      type: String,
      default: "circle"
    },
    // 图例列表
    legends: {
      type: Array,
      required: true
    },
    // 置灰图例
    hideLegends: {
      type: Object,
      required: true
    },
    // 图例样式集
    legendColor: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      offsetHeight: 22,
      scrollHeight: 0,
      active: false
    };
  },
  computed: {
    height() {
      return `${this.active ? this.scrollHeight : this.offsetHeight}px`;
    },
    showArrow() {
      return this.offsetHeight + 2 < this.scrollHeight;
    }
  },
  methods: {
    change(item) {
      this.$emit("change", item);
    },
    toogle() {
      this.active = !this.active;
    }
  },
  mounted() {
    this.scrollHeight = this.$el.scrollHeight;
  }
};
</script>
