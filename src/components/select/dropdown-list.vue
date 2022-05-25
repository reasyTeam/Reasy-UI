<template>
  <div class="v-select-options" :id="name">
    <v-x-scroll ref="scroll" @mounted="setPosition" :count="count">
      <!-- 下拉选项列表 -->
      <ul class="v-select-options__list">
        <li
          v-for="(item, index) in options"
          :key="index"
          class="v-select-options__item"
          :class="{
            active: getSelected(item, index),
            'v-select-options__item--disabled': getDisabled(item, index)
          }"
          :id="name | id(index)"
          @click="clickOption(item)"
        >
          <select-item
            v-if="fn && !item.isManual"
            :fn="fn"
            :option="item"
          ></select-item>
          <template v-else>
            {{ item.label }}
            <span
              v-if="isMultiple && getSelected(item, index)"
              class="v-select__icon--right--active v-icon-ok"
            ></span>
          </template>
        </li>
      </ul>
    </v-x-scroll>
  </div>
</template>

<script>
import SelectItem from "./select-item.vue";
import NameMixin from "../name-mixins";

export default {
  mixins: [NameMixin],
  props: {
    //下拉框选项
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    //是否显示
    show: Boolean,
    //下拉框值
    selectValue: [String, Number, Array, Boolean],
    //多选长度限制
    multipleLimit: Number,
    //是否支持多选
    isMultiple: Boolean,
    fn: Function,
    isExsit: Boolean,
    count: Number,
    name: String
  },
  components: {
    SelectItem
  },
  methods: {
    clickOption(options) {
      if (options.disabled) {
        return;
      }
      if (!this.isMultiple) {
        this.hide();
      }
      //点击选项事件
      this.$emit("click-options", options);
    },
    // 是否选中
    getSelected(options, index) {
      if (this.isMultiple) {
        return this.selectValue.indexOf(options.value) >= 0;
      }
      if (this.selectValue === options.value) {
        this.$nextTick(() => {
          this.$refs.scroll.scrollToIndex(index + 1);
        });
        return true;
      }
      if (this.selectValue && options.isManual && !this.isExsit) {
        this.$nextTick(() => {
          this.$refs.scroll.scrollToIndex(index + 1);
        });
        return true;
      }
    },
    // 是否禁用
    getDisabled(options, index) {
      //选项禁用 或者（支持多选 && 多选限制个数 >= 当前选中个数 && 当前未选中）
      return (
        options.disabled ||
        (this.isMultiple &&
          this.multipleLimit > 0 &&
          this.selectValue.length >= this.multipleLimit &&
          !this.getSelected(options, index))
      );
    },
    hide() {
      this.$emit("hide");
    },
    setPosition() {
      this.$dispatch("create-to-body", "update:position");
    }
  }
};
</script>
