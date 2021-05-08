<template>
  <div class="v-datepicker--panel__wrapper">
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
          @click="updateDate(item)"
          @mouseover="setDate(item)"
        >
          <span
            class="v-datepicker--info"
            :class="{
              'v-datepicker--active': isSelected(item),
              'v-datepicker--range': isRangedSelected(item)
            }"
          >
            <span>{{ item.value }}</span>
          </span>
        </li>
        <!-- 每周换行 -->
        <br :key="index + 50" v-if="(index + 1) % 7 === 0" />
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    //实际开始日期
    originDate: Object,
    //实际结束日期
    originEndDate: Object,
    //面板当前的年月日
    date: Object,
    //是否点击了范围
    isClickRange: Boolean,
    //是否支持范围
    isRange: Boolean,
    //最小日期
    minDate: Object,
    //最大日期
    maxDate: Object
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
      let previousMongthLength = new Date(
        this.tmpYear,
        this.tmpMonth,
        0
      ).getDate();

      for (let i = 0, len = startDay; i < len; i++) {
        dateList = [
          { previousMonth: true, value: previousMongthLength - i }
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
        0: "日",
        1: "一",
        2: "二",
        3: "三",
        4: "四",
        5: "五",
        6: "六"
      }[item];
    }
  },
  data() {
    return {
      weekList: [0, 1, 2, 3, 4, 5, 6],
      tmpYear: 0,
      tmpMonth: 0,
      tmpDay: 0
    };
  },
  mounted() {
    this.$dispatch("create-to-body", "update:position");
  },
  methods: {
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
      if (this.isRange && this.originEndDate.year > 0) {
        let time = new Date(this.tmpYear, this.tmpMonth, item.value).getTime();
        let start, end;
        if (startTime > endTime) {
          end = startTime;
          start = endTime;
        } else {
          start = startTime;
          end = endTime;
        }
        return item.currentMonth && time <= end && time >= start;
      }
      return false;
    },
    isSelected(item) {
      if (this.isRange && this.originEndDate.year > 0) {
        let isEqualStart =
            this.tmpYear === this.originDate.year &&
            this.tmpMonth === this.originDate.month &&
            this.originDate.day === item.value,
          isEqualEnd =
            this.tmpYear === this.originEndDate.year &&
            this.tmpMonth === this.originEndDate.month &&
            this.originEndDate.day === item.value;

        return item.currentMonth && (isEqualStart || isEqualEnd);
      }
      return (
        this.tmpDay === item.value &&
        item.currentMonth &&
        this.tmpMonth === this.originDate.month &&
        this.tmpYear === this.originDate.year
      );
    },
    setDate(date) {
      if (!this.isClickRange) return;
      //上月或者下月时不处理
      if (date.previousMonth || date.nextMonth) return;
      this.selectDate(date);
    },
    selectDate(date) {
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
    },
    updateDate(date) {
      this.selectDate(date);
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
    }
  }
};
</script>
