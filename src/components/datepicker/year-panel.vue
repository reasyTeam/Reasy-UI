<template>
  <div>
    <header-panel
      :year="year"
      :month="month"
      :isRange="false"
      :type="headerType"
      :maxYear="maxYear"
      :minYear="minYear"
      :name="name"
      @change="changeHeader"
      @clickHeader="clickHeader"
    ></header-panel>
    <div class="v-datepicker--panel__wrapper">
      <!-- 年选择 -->
      <ul class="v-datepicker--panel__date-list" v-if="headerType === 'year'">
        <template v-for="(item, index) in yearList">
          <li
            :key="index"
            class="pointer year"
            :class="{
              'v-datepicker--invalid': validateYear(item)
            }"
            :id="name | id('yp' + item)"
            @click="selectYear(item)"
          >
            <span
              class="v-datepicker--info"
              :class="{ 'v-datepicker--active': year === item }"
            >
              <span>{{ item }}</span>
            </span>
          </li>
          <br :key="index + 50" v-if="(index + 1) % 3 === 0" />
        </template>
      </ul>
      <!-- 月份选择 -->
      <ul class="v-datepicker--panel__date-list" v-else>
        <template v-for="(item, index) in monthList">
          <li
            :key="index"
            class="pointer year"
            :class="{
              'v-datepicker--invalid': validateMonth(item)
            }"
            :id="name | id('mp' + item)"
            @click="selectMonth(item)"
          >
            <span
              class="v-datepicker--info"
              :class="{
                'v-datepicker--active': year === tmpYear && month === item
              }"
            >
              <span>{{ item | month(item) }}</span>
            </span>
          </li>
          <br :key="index + 50" v-if="(index + 1) % 3 === 0" />
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderPanel from "./header-panel.vue";
import NameMixin from "../name-mixins";
export default {
  mixins: [NameMixin],
  components: {
    HeaderPanel
  },
  props: {
    headerType: String,
    year: Number,
    month: Number,
    maxYear: Number,
    minYear: Number,
    name: String
  },
  filters: {
    month: item => {
      return {
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
      }[item];
    }
  },
  computed: {
    yearList() {
      let startYear = parseInt(this.tmpYear / 10, 10) * 10,
        list = [];
      for (let i = 0; i < 10; i++) {
        list.push(startYear + i);
      }
      return list;
    },
    monthList() {
      let list = [];
      for (let i = 0; i < 12; i++) {
        list.push(i);
      }
      return list;
    }
  },
  data() {
    return {
      tmpYear: 0,
      showYear: true
    };
  },
  methods: {
    // 合法年份
    validateYear(year) {
      return year > this.maxYear || year < this.minYear;
    },
    // 合法月份
    validateMonth(month) {
      if (this.tmpYear > this.maxYear || this.tmpYear < this.minYear) {
        return true;
      } else if (this.tmpYear === this.maxYear) {
        return month > this.maxMonth;
      } else if (this.tmpYear === this.minYear) {
        return month < this.minMonth;
      }
      return false;
    },
    // 点击上一页
    previousYear() {
      if (this.showYear) {
        // 年份选择时
        if (this.tmpYear - 10 < this.minYear) return;
        this.tmpYear -= 10;
      } else {
        // 月份选择时
        if (this.tmpYear <= this.minYear) return;
        this.tmpYear -= 1;
      }
    },
    // 点击下一页
    nextYear() {
      if (this.showYear) {
        // 年份选择时
        if (this.tmpYear + 10 > this.maxYear) return;
        this.tmpYear += 10;
      } else {
        // 月份选择时
        if (this.tmpYear >= this.maxYear) return;
        this.tmpYear += 1;
      }
    },
    // 选择年份
    selectYear(year) {
      if (this.validateYear(year)) {
        return;
      }
      this.tmpYear = year;
      this.$emit("change", this.tmpYear, this.tmpMonth);
      this.$emit("clickHeader", "month");
    },
    clickHeader(type) {
      this.$emit("clickHeader", type);
    },
    // 选择月份
    selectMonth(month) {
      if (this.validateMonth(month)) {
        return;
      }
      this.tmpMonth = month;
      this.$emit("change", this.tmpYear, this.tmpMonth);
      this.$emit("clickHeader", "init");
    },
    changeHeader(year, month) {
      this.$emit("change", year, month);
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
    },
    showYear(val) {
      this.$emit("clickHeader", val ? "year" : "month");
    }
  }
};
</script>
