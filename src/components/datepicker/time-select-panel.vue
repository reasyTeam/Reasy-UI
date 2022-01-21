<template>
  <div>
    <v-row class="v-datepicker--panel__header">
      {{ headerTime }}
    </v-row>
    <div class="v-timepicker__wrapper">
      <time-panel
        :format="timeFormat"
        :minuteInterval="minuteInterval"
        :secondInterval="secondInterval"
        :time="currentTime"
        :count="count"
        @change="changeTime"
      ></time-panel>
    </div>
  </div>
</template>

<script>
import TimePanel from "../timepicker/time-panel.vue";
import { parseDate, formatTime } from "../libs";

export default {
  components: {
    TimePanel
  },
  props: {
    //内容区域最多显示多少条
    count: {
      type: Number,
      default: 7
    },
    format: String,
    isRange: Boolean,
    minuteInterval: Number,
    secondInterval: Number,
    time: String,
    endTime: String,
    min: String,
    max: String
  },
  computed: {
    // minTime() {
    //   return formatDate(new Date(2020, 1, 1, 0, 0, 0), this.format);
    // },
    // maxTime() {
    //   return formatDate(new Date(2020, 1, 1, 23, 59, 59), this.format);
    // },
    headerTime() {
      let dateObj = parseDate(this.currentTime, this.timeFormat);
      return formatTime(
        {
          hour: dateObj.hour,
          minute: dateObj.minute,
          second: dateObj.second
        },
        "hh:mm:ss"
      );
    },
    timeFormat() {
      //生成time-panel时分秒表盘需要的时间格式
      return this.format.split(" ")[1];
    },
    currentTime() {
      //生成time-panel时分秒表盘需要的时间
      if (this.time) {
        return this.time.split(" ")[1];
      } else {
        return "00:00:00";
      }
    }
  },
  methods: {
    //解析成时间
    formatTimeNumber(timeStr) {
      let dateObj = parseDate(timeStr, this.timeFormat);
      let time = new Date(dateObj.year, dateObj.month, dateObj.day, 0, 0, 0);
      return time.getTime();
    },
    formTime(time) {
      let timeObj = parseDate(time, this.timeFormat);
      return {
        hour: timeObj.hour,
        minute: timeObj.minute,
        second: timeObj.second
      };
    },
    changeTime(time) {
      if (time !== this.time) {
        this.$emit("changeTime", this.formTime(time));
      }
    }
  }
};
</script>
