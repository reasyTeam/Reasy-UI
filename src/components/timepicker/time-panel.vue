<template>
  <div class="v-timepicker--panel" :id="name">
    <v-row>
      <!-- 时 -->
      <v-col class="v-timepicker__group" :span="colSpan">
        <v-x-scroll
          :count="count"
          ref="hour"
          :to-index="hourIndex"
          @mounted="setPosition"
          :animate="true"
        >
          <ul class="v-timepicker__list">
            <li
              v-for="hours in hoursList"
              :key="hours"
              class="v-timepicker__li"
              :class="{
                'v-timepicker__li--active': hour === hours,
                'v-timepicker__li--disabled': getHourDisabled(hours)
              }"
              @click="clickList('hour', hours, getHourDisabled(hours))"
              :id="name | id('h-' + hours)"
            >
              {{ hours }}
            </li>
            <li
              v-for="(item, index) in repeatList"
              :key="index + 'repeat'"
              class="v-timepicker__li v-timepicker__li--empty"
            ></li>
          </ul>
        </v-x-scroll>
      </v-col>
      <!-- 分 -->
      <v-col class="v-timepicker__group" v-if="hasMinute" :span="colSpan">
        <v-x-scroll
          :count="count"
          ref="minute"
          :to-index="minuteIndex"
          :animate="true"
        >
          <ul class="v-timepicker__list">
            <li
              v-for="minutes in minutesList"
              :key="minutes"
              class="v-timepicker__li"
              :class="{
                'v-timepicker__li--active': minute === minutes,
                'v-timepicker__li--disabled': getMinuteDisabled(minutes)
              }"
              @click="clickList('minute', minutes, getMinuteDisabled(minutes))"
              :id="name | id('m-' + minutes)"
            >
              {{ minutes }}
            </li>
            <li
              v-for="(item, index) in repeatList"
              :key="index + 'repeat'"
              class="v-timepicker__li v-timepicker__li--empty"
            ></li>
          </ul>
        </v-x-scroll>
      </v-col>
      <!-- 秒 -->
      <v-col class="v-timepicker__group" v-if="hasSecond" :span="colSpan">
        <v-x-scroll
          :count="count"
          ref="second"
          :to-index="secondIndex"
          :animate="true"
        >
          <ul class="v-timepicker__list">
            <li
              v-for="seconds in secondsList"
              :key="seconds"
              class="v-timepicker__li"
              :class="{
                'v-timepicker__li--active': seconds === second,
                'v-timepicker__li--disabled': getSecondDisabled(seconds)
              }"
              @click="clickList('second', seconds, getSecondDisabled(seconds))"
              :id="name | id('s-' + seconds)"
            >
              {{ seconds }}
            </li>
            <li
              v-for="(item, index) in repeatList"
              :key="index + 'repeat'"
              class="v-timepicker__li v-timepicker__li--empty"
            ></li>
          </ul>
        </v-x-scroll>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { parseDate, formatTime } from "../libs";
import NameMixin from "../name-mixins";
export default {
  mixins: [NameMixin],
  props: {
    //时间格式
    format: String,
    minuteInterval: {
      type: Number,
      default: 1
    },
    secondInterval: {
      type: Number,
      default: 1
    },
    //内容区域最多显示多少条
    count: {
      type: Number,
      default: 7
    },
    //时间值
    time: String,
    min: String,
    max: String,
    isAllDay: Boolean,
    name: String
  },
  computed: {
    //是否支持分钟
    hasMinute() {
      return this.format.indexOf("mm") > -1;
    },
    //是否支持秒
    hasSecond() {
      return this.format.indexOf("ss") > -1;
    },
    repeatList() {
      return new Array(this.count - 1).fill("");
    },
    colSpan() {
      if (this.hasSecond) {
        return 8;
      } else if (!this.hasMinute) {
        return 24;
      }
      return 12;
    },
    //小时列表
    hoursList() {
      let list = [];
      for (let i = 0; i < 24; i++) {
        list.push(`0${i}`.slice(-2));
      }
      if (this.isAllDay) {
        list.push("24");
      }
      return list;
    },
    //分钟列表
    minutesList() {
      let list = [];
      for (let i = 0; i < 60; i++) {
        if (i % this.minuteInterval === 0) {
          list.push(`0${i}`.slice(-2));
        }
      }
      return list;
    },
    //秒钟列表
    secondsList() {
      let list = [];
      for (let i = 0; i < 60; i++) {
        if (i % this.secondInterval === 0) {
          list.push(`0${i}`.slice(-2));
        }
      }
      return list;
    },
    //小时选中第几个
    hourIndex() {
      let index = this.hoursList.indexOf(this.hour) + 1;
      this.$refs.hour && this.$refs.hour.scrollToIndex(index);
      return index;
    },
    //分钟选中第几个
    minuteIndex() {
      let index = this.minutesList.indexOf(this.minute) + 1;
      this.$refs.minute && this.$refs.minute.scrollToIndex(index);
      return index;
    },
    //秒钟选中第几个
    secondIndex() {
      let index = this.secondsList.indexOf(this.second) + 1;
      this.$refs.second && this.$refs.second.scrollToIndex(index);
      return index;
    },
    // 最小时间
    minTimeStr() {
      if (this.min) {
        return this.min;
      }
      return this.formatTimeStr(0, 0, 0);
    },
    // 最大时间
    maxTimeStr() {
      if (this.max) {
        return this.max;
      }
      if (this.isAllDay) {
        return "24:00:00";
      }
      return this.formatTimeStr(23, 59, 59);
    },
    //最小时间
    minTime() {
      return this.getTimeNumber(this.minTimeStr);
    },

    //最大时间
    maxTime() {
      return this.getTimeNumber(this.maxTimeStr);
    }
  },
  data() {
    return {
      // count: 7, //内容区域最多显示多少条
      hour: "",
      minute: "",
      second: ""
    };
  },
  methods: {
    setPosition() {
      this.$nextTick(() => {
        this.$dispatch("create-to-body", "update:position");
        this.$refs.hour.scrollToIndex(this.hourIndex);
        this.hasMinute && this.$refs.minute.scrollToIndex(this.minuteIndex);
        this.hasSecond && this.$refs.second.scrollToIndex(this.secondIndex);
      });
    },
    //获取时分秒的数字
    getTimeNumber(time) {
      let timeObj = parseDate(time, this.format);
      return (
        (timeObj.hour || 0) * 60 * 60 +
        (timeObj.minute || 0) * 60 +
        (timeObj.second || 0)
      );
    },
    getTime() {
      let time = this.formatTimeStr(this.hour, this.minute, this.second);
      let timeNumber = this.getTimeNumber(time);
      if (timeNumber < this.minTime) {
        time = this.minTimeStr;
      } else if (timeNumber > this.maxTime) {
        time = this.maxTimeStr;
      }
      return time;
    },
    setTime() {
      let time = this.getTime();
      if (time === this.time) {
        return;
      }

      this.$emit("change", time);
    },
    //处理点击事件
    clickList(type, value, isDisabled) {
      if (isDisabled) return;
      switch (type) {
        case "hour":
          this.hour = value;

          break;
        case "minute":
          this.minute = value;

          break;
        case "second":
          this.second = value;

          break;
      }

      this.setTime();
    },
    //解析成标准的时分秒格式
    formatTimeStr(hour, minute, second) {
      return formatTime(
        {
          hour,
          minute,
          second
        },
        this.format
      );
    },
    //获取小时是否禁用
    getHourDisabled(hour) {
      let maxTimeNumber = this.getTimeNumber(this.formatTimeStr(hour, 59, 59)),
        minTimeNumber = this.getTimeNumber(this.formatTimeStr(hour, 0, 0));
      return minTimeNumber > this.maxTime || maxTimeNumber < this.minTime;
    },
    //获取分钟是否禁用
    getMinuteDisabled(minute) {
      let maxTimeNumber = this.getTimeNumber(
          this.formatTimeStr(this.hour, minute, 59)
        ),
        minTimeNumber = maxTimeNumber - 59;
      if (this.hour === 24) {
        minTimeNumber = this.maxTime;
      }
      return minTimeNumber > this.maxTime || maxTimeNumber < this.minTime;
    },
    //获取秒钟是否禁用
    getSecondDisabled(second) {
      let timeNumber = this.getTimeNumber(
        this.formatTimeStr(this.hour, this.minute, second)
      );
      return timeNumber > this.maxTime || timeNumber < this.minTime;
    }
  },
  watch: {
    time: {
      handler(val) {
        let timeNum = this.getTimeNumber(val);
        if (timeNum < this.minTime) {
          this.$emit("change", this.minTimeStr);
          return;
        }
        if (timeNum > this.maxTime) {
          this.$emit("change", this.maxTimeStr);
          return;
        }
        let timeObj = parseDate(val, this.format);
        this.hour = `0${timeObj.hour}`.slice(-2);
        this.minute = `0${timeObj.minute}`.slice(-2);
        this.second = `0${timeObj.second}`.slice(-2);
      },
      immediate: true
    }
  }
};
</script>
