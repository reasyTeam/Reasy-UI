<template>
  <div>
    <v-row class="v-datepicker--panel__header">
      {{ headerTime }}
    </v-row>
    <div class="v-timepicker__wrapper">
      <time-panel
        :format="format"
        :minuteInterval="minuteInterval"
        :secondInterval="secondInterval"
        :time="time"
        :min="minTime"
        :max="maxTime"
        @change="changeTime"
      ></time-panel>
    </div>
  </div>
</template>

<script>
import TimePanel from "../timepicker/time-panel.vue";
import { parseDate, formatDate, formatTime } from "../libs";

export default {
  components: {
    TimePanel
  },
  props: {
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
    minTime() {
      return formatDate(new Date(2020, 1, 1, 0, 0, 0), this.format);
    },
    maxTime() {
      return formatDate(new Date(2020, 1, 1, 23, 59, 59), this.format);
    },
    headerTime() {
      let dateObj = parseDate(this.time, this.format);
      return formatTime(
        {
          hour: dateObj.hour,
          minute: dateObj.minute,
          second: dateObj.second
        },
        "hh:mm:ss"
      );
    }
  },
  methods: {
    //解析成时间
    formatTimeNumber(timeStr) {
      let dateObj = parseDate(timeStr, this.format);
      let time = new Date(dateObj.year, dateObj.month, dateObj.day, 0, 0, 0);
      return time.getTime();
    },
    formTime(time) {
      let timeObj = parseDate(time, this.format);
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
