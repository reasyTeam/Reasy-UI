<template>
  <div>
    <template v-if="headerType === 'init'">
      <header-panel
        :year="tmpYear"
        :month="tmpMonth"
        :isRange="isRange"
        :icon-type="type"
        :type="headerType"
        :maxYear="initMaxYear"
        :minYear="initMinYear"
        :name="name"
        @change="changeHeader"
        @clickHeader="clickHeader"
      ></header-panel>
      <div class="v-datepicker--panel__wrapper" @mouseleave="handlerMouseLeave">
        <!-- 星期 -->
        <ul class="v-datepicker--panel__weeks">
          <li class="date" v-for="item in weekList" :key="item">
            {{ item | week(item) }}
          </li>
        </ul>
        <ul class="v-datepicker--panel__date-list">
          <!-- 天 -->
          <template v-for="(item, index) in dateList">
            <li
              :key="index"
              class="pointer date"
              :class="{
                'v-datepicker__pre-month': item.previousMonth,
                'v-datepicker__next-month': item.nextMonth,
                'v-datepicker--invalid': validateDate(item)
              }"
              :id="name | id('d' + index)"
              @click="clickDate(item)"
              @mouseover="handlerOver(item)"
            >
              <span
                class="v-datepicker--info"
                :class="{
                  'v-datepicker--active': isSelected(item),
                  'v-datepicker--range': isRangedSelected(item)
                }"
              >
                <span>{{ item.value }}</span>
                <div v-if="isActive(item)" class="v-datepicker__top"></div>
              </span>
            </li>
            <!-- 每周换行 -->
            <br :key="index + 50" v-if="(index + 1) % 7 === 0" />
          </template>
        </ul>
      </div>
    </template>

    <year-panel
      v-else
      :headerType="headerType"
      :year="date.year"
      :month="date.month"
      :minYear="minDate.year"
      :maxYear="maxDate.year"
      :name="name"
      @change="changeYear"
      @clickHeader="clickHeader"
    ></year-panel>
  </div>
</template>

<script>
import HeaderPanel from "./header-panel.vue";
import YearPanel from "./year-panel.vue";
import NameMixin from "../name-mixins";
export default {
  mixins: [NameMixin],
  components: {
    HeaderPanel,
    YearPanel
  },
  props: {
    type: {
      //面板类型
      type: String,
      default: ""
    },
    //实际开始日期
    originDate: {
      type: Object,
      default() {
        return {};
      }
    },
    //实际结束日期
    originEndDate: {
      type: Object,
      default() {
        return {};
      }
    },
    //面板当前的年月日
    date: {
      type: Object,
      default() {
        return {};
      }
    },
    //是否支持范围
    isRange: Boolean,
    //最小日期
    minDate: Object,
    //最大日期
    maxDate: Object,
    //显示日期右上角样式列表
    activeList: {
      type: Array,
      default() {
        return [];
      }
    },
    selectedDate: {
      type: Object,
      default() {
        return {};
      }
    },
    //真正选中的开始日期（黑色字体）
    realDate: {
      type: Object,
      default() {
        return {};
      }
    },
    //真正选中的结束日期（黑色字体）
    realEndDate: {
      type: Object,
      default() {
        return {};
      }
    },
    name: String
  },
  computed: {
    //日期列表
    dateList() {
      let currentMonthLength = new Date(
        this.tmpYear,
        this.tmpMonth + 1,
        0
      ).getDate();
      let dateList = Array.from(
        { length: currentMonthLength },
        (val, index) => {
          return {
            currentMonth: true,
            value: index + 1
          };
        }
      );
      let startDay = new Date(this.tmpYear, this.tmpMonth, 1).getDay();
      let previousMonthLength = new Date(
        this.tmpYear,
        this.tmpMonth,
        0
      ).getDate();

      for (let i = 0, len = startDay; i < len; i++) {
        dateList = [
          { previousMonth: true, value: previousMonthLength - i }
        ].concat(dateList);
      }
      for (let i = dateList.length, item = 1; i < 42; i++, item++) {
        dateList[dateList.length] = { nextMonth: true, value: item };
      }
      return dateList;
    },
    //开始时间
    startTime() {
      return new Date(
        this.originDate.year,
        this.originDate.month,
        this.originDate.day
      ).getTime();
    },
    //结束时间
    endTime() {
      return new Date(
        this.originEndDate.year,
        this.originEndDate.month,
        this.originEndDate.day
      ).getTime();
    }
  },
  filters: {
    week: item => {
      return {
        0: _("o#TuN#Su"),
        1: _("o#TuN#Mo"),
        2: _("o#TuN#Tu"),
        3: _("o#TuN#We"),
        4: _("o#TuN#Th"),
        5: _("r#ZlG#Fr"),
        6: _("s#jdm#Sa")
      }[item];
    }
  },
  data() {
    return {
      weekList: [0, 1, 2, 3, 4, 5, 6],
      tmpYear: 0,
      tmpMonth: 0,
      tmpDay: 0,
      headerType: "init",
      initMaxYear: 0,
      initMinYear: 0
    };
  },
  mounted() {
    this.$dispatch("create-to-body", "update:position");
  },
  methods: {
    clickHeader(type) {
      this.headerType = type;
    },
    changeHeader(year, month, type) {
      this.$emit("change-header", year, month, type);
    },
    changeYear(year, month) {
      this.$emit("change-header", year, month);
    },
    validateDate(date) {
      let mon = this.tmpMonth;
      if (date.previousMonth) {
        mon -= 1;
      } else if (date.nextMonth) {
        mon += 1;
      }
      if (
        new Date(this.tmpYear, mon, date.value).getTime() >=
          new Date(
            this.minDate.year,
            this.minDate.month,
            this.minDate.day
          ).getTime() &&
        new Date(this.tmpYear, mon, date.value).getTime() <=
          new Date(
            this.maxDate.year,
            this.maxDate.month,
            this.maxDate.day
          ).getTime()
      ) {
        return false;
      }
      return true;
    },
    isRangedSelected(item) {
      let startTime = this.startTime,
        endTime = this.endTime;
      if (
        this.isRange &&
        this.originEndDate.year > 0 &&
        this.originEndDate.day > 0 &&
        this.originDate.day > 0
      ) {
        let time = new Date(this.tmpYear, this.tmpMonth, item.value).getTime();
        let start, end;

        start = startTime;
        end = endTime;

        return item.currentMonth && time <= end && time >= start;
      }
      return false;
    },
    isSelected(item) {
      if (this.isRange && this.originEndDate.year > 0) {
        let isEqualStart =
            this.tmpYear === this.realDate.year &&
            this.tmpMonth === this.realDate.month &&
            this.realDate.day === item.value,
          isEqualEnd =
            this.tmpYear === this.realEndDate.year &&
            this.tmpMonth === this.realEndDate.month &&
            this.realEndDate.day === item.value;

        return item.currentMonth && (isEqualStart || isEqualEnd);
      }
      if (this.realDate.day) {
        return (
          this.realDate.day === item.value &&
          item.currentMonth &&
          this.realDate.month === this.tmpMonth &&
          this.realDate.year === this.tmpYear
        );
      } else {
        return (
          this.tmpDay === item.value &&
          item.currentMonth &&
          this.tmpMonth === this.originDate.month &&
          this.tmpYear === this.originDate.year
        );
      }
    },
    isActive(item) {
      //去掉上月和下月
      if (item.previousMonth || item.nextMonth) {
        return false;
      }
      return this.activeList.some(item1 => {
        return (
          //item.currentMonth &&
          +item.value === +item1.day &&
          +this.tmpMonth === +item1.month &&
          +this.tmpYear === +item1.year
        );
      });
    },
    handlerOver(date) {
      //上月或者下月时不处理
      //if (date.previousMonth || date.nextMonth) return;
      this.selectDate(date);
    },
    handlerMouseLeave() {
      this.$emit("mouseover", this.tmpYear, this.tmpMonth, this.tmpDay, false);
    },
    selectDate(date) {
      if (!this.isRange) {
        //return;
      }
      //if (this.validateDate(date)) return;
      let year = this.tmpYear,
        month = this.tmpMonth,
        day = date.value;

      if (date.previousMonth) {
        if (this.tmpMonth === 0) {
          year = this.tmpYear - 1;
          month = 11;
        } else {
          month = this.tmpMonth - 1;
        }
      } else if (date.nextMonth) {
        if (this.tmpMonth === 11) {
          year = this.tmpYear + 1;
          month = 0;
        } else {
          month = this.tmpMonth + 1;
        }
      }

      this.$emit("mouseover", year, month, day, true);
    },
    clickDate(date) {
      if (this.validateDate(date)) return;
      let year = this.tmpYear,
        month = this.tmpMonth,
        day = date.value;
      if (date.previousMonth) {
        if (this.tmpMonth === 0) {
          year = this.tmpYear - 1;
          month = 11;
        } else {
          month = this.tmpMonth - 1;
        }
      } else if (date.nextMonth) {
        if (this.tmpMonth === 11) {
          year = this.tmpYear + 1;
          month = 0;
        } else {
          month = this.tmpMonth + 1;
        }
      }
      this.$emit("change", year, month, day);
      this.$emit("change-select", year, month, day);
      this.$emit("clickDate");
    },
    showYear() {
      this.$emit("showYear");
    }
  },
  watch: {
    date: {
      handler(date) {
        this.tmpYear = date.year;
        this.tmpMonth = date.month;
        this.tmpDay = date.day;
      },
      immediate: true,
      deep: true
    },
    minDate: {
      handler(value) {
        if (!this.initMinYear) {
          //初始化header-panel的最小年份
          this.initMinYear = value.year;
        }
      },
      immediate: true
    },
    maxDate: {
      handler(value) {
        if (!this.initMaxYear) {
          this.initMaxYear = value.year;
        }
      },
      immediate: true
    }
  }
};
</script>
