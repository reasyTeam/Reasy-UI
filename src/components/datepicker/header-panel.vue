<template>
  <div class="v-datepicker--panel__header">
    <div class="v-datepicker--panel__left">
      <span
        class="v-icon-double-left v-datepicker--panel__icon pointer"
        @click="previousYear()"
      ></span>
      <span
        v-if="type === 'init'"
        class="v-icon-left v-datepicker--panel__icon pointer"
        @click="previousMonth()"
      ></span>
    </div>
    <div class="v-datepicker--panel__right">
      <span
        v-if="type === 'init'"
        class="v-icon-right v-datepicker--panel__icon pointer"
        @click="nextMonth()"
      ></span>
      <span
        class="v-icon-double-right v-datepicker--panel__icon pointer"
        @click="nextYear()"
      ></span>
    </div>
    <v-row class="v-datepicker--panel__title">
      <v-col :span="isRange ? 12 : 24">
        <div :class="{ pointer: !isRange }" @click="showYear()">
          {{ type !== "month" ? `${year}年${month + 1}月` : `${year}年` }}
        </div>
      </v-col>
      <v-col v-if="isRange" :span="12">
        <div>
          {{ `${endYear}年${endMonth + 1}月` }}
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    isRange: Boolean,
    //当前面板显示初始状态 选择年 选择月
    type: String,
    year: Number,
    month: Number,
    endYear: Number,
    endMonth: Number,
    minYear: Number,
    maxYear: Number
  },
  data() {
    return {
      tmpYear: 0,
      tmpMonth: 0
    };
  },
  methods: {
    previousYear() {
      let index = this.type === "year" ? 10 : 1;
      if (this.tmpYear - index < this.minYear) return;
      this.tmpYear -= index;
      this.setDate();
    },
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
    nextYear() {
      let index = this.type === "year" ? 10 : 1;
      if (this.tmpYear + index > this.maxYear) return;
      this.tmpYear += index;
      this.setDate();
    },
    nextMonth() {
      if (this.isRange && this.tmpMonth >= 10) {
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
      this.$emit("change", this.tmpYear, this.tmpMonth);
    },
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
