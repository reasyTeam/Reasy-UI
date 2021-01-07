<template>
  <div
    class="v-datepicker"
    :class="sizeCss"
    :style="{ width: datePickerWidth }"
  >
    <div
      :name="name"
      class="v-datepicker__label input-text"
      :class="{ 'is-disabled': disabled, 'is-focus': showDatePanel }"
      @click="showPanel"
    >
      <span :class="{ 'placeholder-text': placeholder && !startDate }">
        {{ startDate || placeholder }}
      </span>
      <template v-if="isRange">
        <span class="v-datepicker__splitter">-</span>
        <span
          :class="{
            'placeholder-text': endPlaceholder && !endDate
          }"
        >
          {{ endDate || endPlaceholder }}
        </span>
      </template>
    </div>
    <span
      class="v-datepicker__icon"
      :class="[
        hasClear ? 'v-icon-close-plane' : 'v-icon-calendar',
        { 'v-datepicker__icon--disabled': disabled }
      ]"
      @mouseover="handlerMouseover"
      @mouseout="isMouseover = false"
      @click="clickIcon"
    ></span>
    <div
      class="v-form-item__content__msg is-error"
      v-if="error && !showDatePanel"
    >
      {{ error }}
    </div>
    <create-to-body
      :class="sizeCss"
      class="v-datepicker--panel"
      :show="showDatePanel"
      v-clickoutside="hide"
      :width="isRange ? '480px' : '240px'"
    >
      <template v-if="!isSetTime">
        <header-panel
          :year="tmpDate.year"
          :month="tmpDate.month"
          :endYear="tmpEndDate.year"
          :endMonth="tmpEndDate.month"
          :isRange="isRange"
          :type="headerType"
          :maxYear="maxDate.year"
          :minYear="minDate.year"
          @change="changeHeader"
          @clickHeader="clickHeader"
        ></header-panel>
        <template v-if="headerType === 'init'">
          <date-panel
            :class="isRange ? 'v-datepicker--panel--group' : ''"
            :isRange="isRange"
            :date="tmpDate"
            :isClickRange="isClickRange"
            :originDate="originDate"
            :originEndDate="originEndDate"
            :minDate="minDate"
            :maxDate="maxDate"
            @change="changeTmpDate"
            @hide="hide"
            @clickDate="clickStartPanel"
          ></date-panel>
          <date-panel
            v-if="isRange"
            class="v-datepicker--panel--group"
            :isRange="isRange"
            :isClickRange="isClickRange"
            :date="tmpEndDate"
            :originDate="originDate"
            :originEndDate="originEndDate"
            :minDate="minDate"
            :maxDate="maxDate"
            @change="changeTmpEndDate"
            @clickDate="clickEndPanel"
            @hide="hide"
          ></date-panel>
        </template>
        <year-panel
          v-else
          :headerType="headerType"
          :year="tmpDate.year"
          :month="tmpDate.month"
          :minYear="minDate.year"
          :maxYear="maxDate.year"
          @change="changeYear"
          @clickHeader="clickHeader"
        ></year-panel>
      </template>

      <template v-if="isSetTime">
        <time-panel
          :format="dateFormat"
          :isRange="isRange"
          :minuteInterval="minuteInterval"
          :secondInterval="secondInterval"
          @changeTime="changeTime"
          @changeEndTime="changeEndTime"
          :startTime="startDate"
          :endTime="endDate"
        ></time-panel>
      </template>
      <div class="v-datepicker--panel__footer" v-if="hasTime">
        <div class="v-datepicker--panel__left">
          <span class="pointer" @click="isSetTime = !isSetTime">
            {{ isSetTime ? "选择日期" : "选择时间" }}
          </span>
        </div>
        <div class="v-datepicker--panel__right">
          <v-button
            class="v-datepicker--panel__footer__btn"
            size="S"
            @click="clearDate"
            >清空</v-button
          >
          <v-button size="S" type="primary" @click="setDateTime">确定</v-button>
        </div>
      </div>
    </create-to-body>
  </div>
</template>
<script>
import CreateToBody from "../create-to-body.vue";
import YearPanel from "./year-panel.vue";
import DatePanel from "./date-panel.vue";
import TimePanel from "./time-select-panel.vue";
import HeaderPanel from "./header-panel.vue";
import FormMixin from "../form-mixins";
import { size } from "../filters";

import { parseDate, formatDate } from "../libs";
export default {
  name: "v-datepicker",
  mixins: [FormMixin],
  components: {
    CreateToBody,
    DatePanel, //日期面板
    YearPanel, //年月面板
    HeaderPanel, //头部面板
    TimePanel //时间面板
  },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: [String, Array],
    //日期类型 值为date， datetime
    type: {
      type: String,
      default: "date"
    },
    name: String,
    //是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    //宽度
    width: [String, Number],
    //是否支持清除
    isClear: {
      type: Boolean,
      default: true
    },
    isRange: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    endPlaceholder: String,
    //时间日期格式
    format: String,
    min: {
      type: String,
      default: "1970-01-01 00:00:00"
    },
    max: {
      type: String,
      default: "2037-12-31 23:59:59"
    },
    //分钟间隔
    minuteInterval: {
      type: Number,
      default: 1
    },
    secondInterval: {
      type: Number,
      default: 1
    },
    size: {
      type: String,
      default: "M"
    }
  },
  computed: {
    sizeCss() {
      let cssObj = {
        M: "v-datepicker--medium",
        S: "v-datepicker--small",
        L: "v-datepicker--large"
      };
      return cssObj[this.size] || cssObj.M;
    },
    hasClear() {
      return this.isClear && this.value !== "" && this.isMouseover;
    },
    hasTime() {
      return this.type === "datetime";
    },
    //处理默认时间格式
    dateFormat() {
      if (this.format) return this.format;
      if (this.type === "datetime") {
        return "YYYY-MM-DD hh:mm:ss";
      }
      return "YYYY-MM-DD";
    },
    //宽度
    datePickerWidth() {
      return size(this.width);
    }
  },
  data() {
    return {
      isClickRange: false,
      headerType: "init",
      isSetTime: false,
      isDoubleClickEnd: true, //两次是否都是点击结束面板
      originDate: {
        //真实数据
        year: "",
        month: "",
        day: "",
        hour: "",
        minute: "",
        second: ""
      },
      originEndDate: {
        year: "",
        month: "",
        day: "",
        hour: "",
        minute: "",
        second: ""
      },
      tmpDate: {
        //当前显示年月日数据
        year: "",
        month: "",
        day: ""
      },
      tmpEndDate: {
        year: "",
        month: "",
        day: ""
      },
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      maxDate: {},
      minDate: {},
      isMouseover: false,
      showDatePanel: false
    };
  },
  methods: {
    getNowDate() {
      let now = new Date();
      return {
        year: now.getFullYear(),
        month: now.getMonth(),
        day: now.getDate(),
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds()
      };
    },
    showPanel() {
      if (this.disabled) return;
      this.showDatePanel = !this.showDatePanel;
    },
    clickIcon() {
      if (this.disabled) return;
      if (this.hasClear) {
        this.clearDate();
      } else {
        this.showPanel();
      }
    },
    clearDate() {
      this.isClickRange = false;
      this.$emit("change", this.isRange ? ["", ""] : "");
    },
    //点击日期执行事件
    clickStartPanel() {
      this.isDoubleClickEnd = false;
      this.clickDate();
    },
    clickEndPanel() {
      if (this.isClickRange) {
        this.isDoubleClickEnd = true;
      }
      this.clickDate();
    },
    clickDate() {
      if (this.isRange) {
        this.isClickRange = !this.isClickRange;
      }
      this.changeDate();
    },
    hide() {
      this.showDatePanel = false;
    },
    handlerMouseover() {
      if (!this.disabled) this.isMouseover = true;
    },
    setFirstClick(year, month, day) {
      this.originDate.year = this.originEndDate.year = year;
      this.originDate.month = this.originEndDate.month = month;
      this.originDate.day = this.originEndDate.day = day;
    },
    changeTmpDate(year, month, day) {
      this.tmpDate.year = year;
      this.tmpDate.month = month;
      this.tmpDate.day = day;
      this.updateTmpEndDate();
      if (!this.isRange && !this.hasTime) {
        this.setFirstClick(year, month, day);
        //this.setDateTime();
        return;
      }
      if (!this.isClickRange) {
        //第一次点击
        this.setFirstClick(year, month, day);
      } else {
        //第二次点击
        this.originEndDate.year = year;
        this.originEndDate.month = month;
        this.originEndDate.day = day;
      }
    },
    //选择结束时间事件
    changeTmpEndDate(year, month, day) {
      if (!this.isClickRange) {
        this.tmpEndDate.year = year;
        this.tmpEndDate.month = month;
        this.tmpEndDate.day = day;
        //更新起始时间模板
        this.updateTmpDate();
        //第一次点击时同步日期
        this.setFirstClick(year, month, day);
      } else {
        this.originEndDate.year = year;
        this.originEndDate.month = month;
        this.originEndDate.day = day;
      }
    },
    //更新开始日期的显示年月
    updateTmpDate() {
      if (this.tmpEndDate.month === 0) {
        this.tmpDate.year = this.tmpEndDate.year - 1;
        this.tmpDate.month = 11;
      } else {
        this.tmpDate.year = this.tmpEndDate.year;
        this.tmpDate.month = this.tmpEndDate.month - 1;
      }
    },
    //更新结束日期的显示年月
    updateTmpEndDate() {
      if (this.tmpDate.month === 11) {
        this.tmpEndDate.year = this.tmpDate.year + 1;
        this.tmpEndDate.month = 0;
      } else {
        this.tmpEndDate.year = this.tmpDate.year;
        this.tmpEndDate.month = this.tmpDate.month + 1;
      }
    },
    //切换时间
    setTime(time, isStart) {
      let nowObj = {},
        setDate = isStart ? this.originDate : this.originEndDate,
        backDate = !isStart ? this.originDate : this.originEndDate;
      if (setDate.year === "") {
        nowObj = this.getNowDate();
      }
      Object.assign(setDate, nowObj, time);
      if (backDate.year === "") {
        Object.assign(backDate, nowObj, {
          hour: !isStart ? "" : "23",
          minute: !isStart ? "" : 60 - this.minuteInterval,
          second: !isStart ? "" : 60 - this.secondInterval
        });
      }
      this.changeDate();
    },
    //修改起始时间
    changeTime(time) {
      this.setTime(time, true);
    },
    //修改结束时间
    changeEndTime(time) {
      this.setTime(time, false);
    },
    //修改header
    changeHeader(year, month) {
      this.tmpDate.year = year;
      this.tmpDate.month = month;
      this.updateTmpEndDate();
    },
    changeYear(year, month) {
      this.tmpDate.year = year;
      this.tmpDate.month = month;
      this.headerType = "init";
      this.updateTmpEndDate();
    },

    changeDate() {
      //开始日期
      let startDate = new Date(
          this.originDate.year,
          this.originDate.month,
          this.originDate.day
        ),
        //结束日期
        endDate = new Date(
          this.originEndDate.year,
          this.originEndDate.month,
          this.originEndDate.day
        ),
        isReverse; //开始时间是否大于结束时间

      //开始时间
      let dateStart = new Date(
          this.originDate.year,
          this.originDate.month,
          this.originDate.day,
          this.originDate.hour,
          this.originDate.minute,
          this.originDate.second
        ),
        dateEnd = "";

      if (this.isRange && !this.isClickRange) {
        //支持范围选择 && 第二次点击
        dateEnd = new Date(
          this.originEndDate.year,
          this.originEndDate.month,
          this.originEndDate.day,
          this.originEndDate.hour,
          this.originEndDate.minute,
          this.originEndDate.second
        );
        isReverse = startDate.getTime() > endDate.getTime();
        //开始日期大于结束日期
        if (isReverse) {
          //交换年月日
          dateStart = new Date(
            this.originEndDate.year,
            this.originEndDate.month,
            this.originEndDate.day,
            this.originDate.hour,
            this.originDate.minute,
            this.originDate.second
          );
          dateEnd = new Date(
            this.originDate.year,
            this.originDate.month,
            this.originDate.day,
            this.originEndDate.hour,
            this.originEndDate.minute,
            this.originEndDate.second
          );
        }
      } else {
        isReverse = false;
      }
      startDate = formatDate(dateStart, this.dateFormat);
      endDate = dateEnd === "" ? "" : formatDate(dateEnd, this.dateFormat);

      //起止日期赋值
      this.startDate = startDate;
      this.endDate = endDate;

      //点击后是否隐藏
      let isHide = false;
      if (this.isRange) {
        //支持范围选择
        if (!this.isClickRange && !this.hasTime) {
          //第二次点击 && 不支持时间配置时
          isHide = true;
        }
      } else {
        //不支持范围
        if (!this.hasTime) {
          //不支持时间配置
          isHide = true;
        }
      }
      this.setDateTime(isHide);
    },
    //设置日期时间
    setDateTime(isHide = true) {
      //不隐藏面板时，不处理
      if (!isHide) return;
      let dateTime = this.startDate;

      if (this.isRange) {
        let endDateTime = this.endDate;
        if (dateTime != this.value[0] || endDateTime !== this.value[1]) {
          this.$emit("change", [dateTime, endDateTime]);
        }
      } else {
        if (dateTime != this.value) {
          this.$emit("change", dateTime);
        }
      }
      this.hide();
    },
    formatData(value) {
      if (value) {
        let dateObj = parseDate(value, this.dateFormat);
        Object.assign(this.originDate, dateObj);
        this.startDate = value;
        if (this.isDoubleClickEnd && this.tmpDate.year) {
          return;
        }
        if (!this.isClickRange) {
          Object.assign(this.tmpDate, dateObj);
        }
      } else {
        this.startDate = "";
        Object.assign(this.originDate, {
          year: "",
          month: "",
          day: "",
          hour: "",
          minute: "",
          second: ""
        });
        let dateObj = new Date();
        this.tmpDate.year = dateObj.getFullYear();
        this.tmpDate.month = dateObj.getMonth();
        this.tmpDate.day = dateObj.getDate();
      }
      this.updateTmpEndDate();
      //this.endDay = dateObj.D;
    },
    formatEndData(value) {
      if (value) {
        let dateObj = parseDate(value, this.dateFormat);
        Object.assign(this.originEndDate, dateObj);
        this.endDate = value;
      } else {
        this.endDate = "";
        Object.assign(this.originEndDate, {
          year: "",
          month: "",
          day: "",
          hour: "23",
          minute: 60 - this.minuteInterval,
          second: 60 - this.secondInterval
        });
      }
    },
    formatMinData(value) {
      let dateObj = parseDate(value, this.dateFormat);
      this.minDate = dateObj;
    },
    formatMaxData(value) {
      let dateObj = parseDate(value, this.dateFormat);
      this.maxDate = dateObj;
    },
    initData() {
      if (this.isRange) {
        this.formatData(this.value[0]);
        this.formatEndData(this.value[1]);
      } else {
        this.formatData(this.value);
      }
    },
    clickHeader(type) {
      this.headerType = type;
    }
  },
  watch: {
    value: {
      handler() {
        this.initData();
      },
      immediate: true
    },
    min: {
      handler(value) {
        this.formatMinData(value);
      },
      immediate: true
    },
    max: {
      handler(value) {
        this.formatMaxData(value);
      },
      immediate: true
    },
    showDatePanel: {
      handler() {
        //if (val) {
        this.headerType = "init";
        this.isClickRange = false;
        this.isSetTime = false;
        this.initData();
      },
      immediate: true
    }
  }
};
</script>
