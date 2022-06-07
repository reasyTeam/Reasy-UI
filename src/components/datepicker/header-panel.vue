<template>
  <div class="v-datepicker--panel__header">
    <!-- 左边按钮 -->
    <div
      class="v-datepicker--panel__left"
      v-if="!(isRange && iconType === 'end')"
    >
      <span
        class="v-icon-double-left v-datepicker--panel__icon pointer v-date-icon"
        :id="name | id('y-p')"
        @click="previousYear()"
      ></span>
      <span
        v-if="type === 'init'"
        class="v-icon-left v-datepicker--panel__icon pointer v-date-icon"
        :id="name | id('m-p')"
        @click="previousMonth()"
      ></span>
    </div>
    <!-- 右边按钮 -->
    <div
      class="v-datepicker--panel__right"
      v-if="!(isRange && iconType === 'start')"
    >
      <span
        v-if="type === 'init'"
        class="v-icon-right v-datepicker--panel__icon pointer v-date-icon"
        :id="name | id('m-n')"
        @click="nextMonth()"
      ></span>
      <span
        class="v-icon-double-right v-datepicker--panel__icon pointer v-date-icon"
        :id="name | id('y-n')"
        @click="nextYear()"
      ></span>
    </div>
    <!-- 中间文字显示 -->
    <v-row class="v-datepicker--panel__title">
      <div class="pointer" @click="showYear()" :id="name | id('show')">
        {{ headerText }}
      </div>
    </v-row>
  </div>
</template>

<script>
import NameMixin from "../name-mixins";
export default {
  mixins: [NameMixin],
  props: {
    //面板类型 支持start / end
    iconType: {
      type: String,
      default: ""
    },
    isRange: Boolean,
    //当前面板显示初始状态 选择年 选择月
    type: String,
    year: Number,
    month: Number,
    minYear: Number,
    maxYear: Number,
    name: String
  },
  data() {
    this.monthMap = {
      0: _("Jan."),
      1: _("Feb."),
      2: _("Mar."),
      3: _("Apr."),
      4: _("May"),
      5: _("June"),
      6: _("July"),
      7: _("Aug."),
      8: _("Sept."),
      9: _("Oct."),
      10: _("Nov."),
      11: _("Dec.")
    };
    return {
      tmpYear: 0,
      tmpMonth: 0
    };
  },
  computed: {
    headerText() {
      const { type, year, month, monthMap } = this;
      return type !== "month"
        ? _("Y#eaR#%s %s", [year, monthMap[month]])
        : _("Y#eaR#%s", [year]);
    }
  },
  methods: {
    // 前一年
    previousYear() {
      let index = this.type === "year" ? 10 : 1;
      if (this.tmpYear - index < this.minYear) return;
      this.tmpYear -= index;
      this.setDate();
    },
    // 前一月
    previousMonth() {
      if (this.tmpMonth === 0) {
        if (this.tmpYear <= this.minYear) return;
        this.tmpYear -= 1;
        this.tmpMonth = 11;
      } else {
        this.tmpMonth -= 1;
      }
      this.setDate();
    },
    // 下一年
    nextYear() {
      let index = this.type === "year" ? 10 : 1;
      if (this.tmpYear + index > this.maxYear) return;
      this.tmpYear += index;
      this.setDate();
    },
    // 下一月
    nextMonth() {
      if (this.isRange && this.tmpMonth >= 11) {
        if (this.tmpYear + 1 >= this.maxYear) return;
      }
      if (this.tmpMonth === 11) {
        if (this.tmpYear >= this.maxYear) return;
        this.tmpYear += 1;
        this.tmpMonth = 0;
      } else {
        this.tmpMonth += 1;
      }
      this.setDate();
    },
    setDate() {
      this.$emit("change", this.tmpYear, this.tmpMonth, this.iconType);
    },
    // 点击年选择
    showYear() {
      if (this.isRange) return;
      this.$emit("clickHeader", "year");
    }
  },
  watch: {
    year: {
      handler(val) {
        this.tmpYear = val;
      },
      immediate: true
    },
    month: {
      handler(val) {
        this.tmpMonth = val;
      },
      immediate: true
    }
  }
};
</script>
