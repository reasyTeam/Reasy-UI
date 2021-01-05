<template>
  <div>
    <v-row class="v-datepicker--panel__header">
      <v-col :span="isRange ? 12 : 24">
        {{ isRange ? "开始时间" : "时间" }}
      </v-col>
      <v-col v-if="isRange" :span="12"> 结束时间 </v-col>
    </v-row>
    <v-row>
      <v-col class="v-timepicker__wrapper" :span="isRange ? 12 : 24">
        <time-panel
          :format="format"
          :minuteInterval="minuteInterval"
          :secondInterval="secondInterval"
          :time="startTime"
          :min="minTime"
          :max="maxTime"
          @change="changeTime"
        ></time-panel>
      </v-col>
      <v-col v-if="isRange" class="v-timepicker__wrapper" :span="12">
        <time-panel
          :format="format"
          :minuteInterval="minuteInterval"
          :secondInterval="secondInterval"
          :time="endTime"
          :min="endMinTime"
          :max="endMaxTime"
          @change="changeEndTime"
        ></time-panel>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import TimePanel from "../timepicker/time-panel.vue";
import { parseDate, formatDate } from "../libs";

export default {
  components: {
    TimePanel
  },
  props: {
    format: String,
    isRange: Boolean,
    minuteInterval: Number,
    secondInterval: Number,
    startTime: String,
    endTime: String,
    min: String,
    max: String
  },
  computed: {
    minTime() {
      return formatDate(new Date(2020, 1, 1, 0, 0, 0), this.format);
    },
    isSameDate() {
      let startTime = this.formatTimeNumber(this.startTime),
        endTime = this.formatTimeNumber(this.endTime);
      return startTime === endTime && this.isRange;
    },
    maxTime() {
      if (this.endTime && this.isSameDate) {
        return this.endTime;
      }
      return formatDate(new Date(2020, 1, 1, 23, 59, 59), this.format);
    },
    endMinTime() {
      if (this.startTime && this.isSameDate) {
        return this.startTime;
      }
      return formatDate(new Date(2020, 1, 1, 0, 0, 0), this.format);
    },
    endMaxTime() {
      return formatDate(new Date(2020, 1, 1, 23, 59, 59), this.format);
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
      if (time !== this.startTime) {
        this.$emit("changeTime", this.formTime(time));
      }
    },
    changeEndTime(time) {
      if (time !== this.endTime) {
        this.$emit("changeEndTime", this.formTime(time));
      }
    }
  }
};
</script>
