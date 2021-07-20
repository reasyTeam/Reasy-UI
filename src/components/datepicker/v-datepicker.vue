<template>
  <div
    class="v-datepicker"
    :class="sizeCss"
    :style="{ width: datePickerWidth }"
  >
    <div
      :name="name"
      :data-name="_name"
      class="v-datepicker__label input-text"
      :class="{ 'is-disabled': isDisabled, 'is-focus': showDatePanel }"
      @click="showPanel"
    >
      <!-- <span :class="{ 'placeholder-text': placeholder && !startDate }">
        {{ startDate || placeholder }}
      </span> -->
      <v-input
        class="v-input--no-border v-datepicker__input"
        :class="{ 'v-datepicker__input--half': isRange }"
        v-model="startDate"
        :disabled="isDisabled"
        @click.native="clickInput"
        :placeholder="placeholder"
        ref="start"
        @input="inputStartDate"
        @change="changeStartDate"
      ></v-input>
      <template v-if="isRange">
        <span class="v-datepicker__splitter v-icon-spliter"></span>
        <v-input
          class="v-input--no-border v-datepicker__input v-datepicker__input--half"
          v-model="endDate"
          ref="end"
          :disabled="isDisabled"
          @click.native="clickInput"
          :placeholder="endPlaceholder"
          @input="inputEndDate"
          @change="changeEndDate"
        ></v-input>
      </template>
    </div>
    <span
      class="v-datepicker__icon"
      :class="[
        hasClear ? 'v-icon-close-plane' : 'v-icon-calendar',
        { 'v-datepicker__icon--disabled': isDisabled }
      ]"
      @mouseover="handlerMouseover"
      @mouseout="isMouseover = false"
      @click="clickIcon"
    ></span>
    <create-to-body
      :class="sizeCss"
      :data-name="_name"
      class="v-datepicker--panel"
      :show="showDatePanel"
      v-clickoutside="hide"
      :width="isRange || hasTime ? '456px' : '228px'"
    >
      <!-- 日期设置 -->
      <v-row>
        <!-- 时间日期范围 -->
        <template v-if="isRangeDatetime">
          <template v-if="!isClickRange">
            <v-col :span="12">
              <date-panel
                :isRange="isRange"
                :date="tmpDate"
                :isClickRange="isClickRange"
                :originDate="originDate"
                :originEndDate="originEndDate"
                :minDate="minDate"
                :maxDate="maxDate"
                @change-header="changeHeader"
                @change="changeTmpDate"
                @hide="hide"
                @clickDate="clickStartPanel"
              ></date-panel>
            </v-col>
            <v-col :span="12" class="v-datepicker__time-border">
              <time-panel
                class="v-datepicker__time-panel"
                :format="dateFormat"
                :isRange="isRange"
                :minuteInterval="minuteInterval"
                :secondInterval="secondInterval"
                @changeTime="changeTime"
                :time="startDate"
              ></time-panel>
            </v-col>
          </template>
          <template v-else>
            <v-col :span="12">
              <date-panel
                :isRange="isRange"
                :isClickRange="isClickRange"
                :date="tmpDate"
                :originDate="originDate"
                :originEndDate="originEndDate"
                :minDate="minEndDate"
                :maxDate="maxDate"
                @change="changeTmpDate"
                @change-header="changeHeader"
                @clickDate="clickEndPanel"
                @hide="hide"
              ></date-panel>
            </v-col>
            <v-col :span="12" class="v-datepicker__time-border">
              <time-panel
                class="v-datepicker__time-panel"
                :format="dateFormat"
                :isRange="isRange"
                :minuteInterval="minuteInterval"
                :secondInterval="secondInterval"
                @changeTime="changeEndTime"
                :time="endDate"
              ></time-panel>
            </v-col>
          </template>
        </template>
        <template v-else>
          <!-- 日期选择 -->
          <v-col :span="hasTime || isRange ? 12 : 24">
            <date-panel
              :isRange="isRange"
              :date="tmpDate"
              :isClickRange="isClickRange"
              :originDate="originDate"
              :originEndDate="originEndDate"
              :minDate="minDate"
              :maxDate="maxDate"
              @change-header="changeHeader"
              @change="changeTmpDate"
              @hide="hide"
              @clickDate="clickStartPanel"
            ></date-panel>
          </v-col>
          <!-- 结束日期 -->
          <v-col :span="12" v-if="isRange">
            <date-panel
              :isRange="isRange"
              :isClickRange="isClickRange"
              :date="tmpEndDate"
              :originDate="originDate"
              :originEndDate="originEndDate"
              :minDate="minDate"
              :maxDate="maxDate"
              @change="changeTmpEndDate"
              @change-header="changeHeader"
              @clickDate="clickEndPanel"
              @hide="hide"
            ></date-panel>
          </v-col>
          <!-- 时间 -->
          <v-col :span="12" v-if="hasTime" class="v-datepicker__time-border">
            <time-panel
              class="v-datepicker__time-panel"
              :format="dateFormat"
              :isRange="isRange"
              :minuteInterval="minuteInterval"
              :secondInterval="secondInterval"
              @changeTime="changeTime"
              :time="startDate"
            ></time-panel>
          </v-col>
        </template>
      </v-row>

      <div class="v-datepicker--panel__footer" v-if="hasTime">
        <div class="v-datepicker--panel__right">
          <!-- <v-button
            class="v-datepicker--panel__footer__btn"
            size="S"
            @click="clearDate"
            >清空</v-button
          > -->
          <v-button
            size="S"
            :disabled="submitDisabled"
            type="primary"
            @click="setDateTime"
            >确定</v-button
          >
        </div>
      </div>
    </create-to-body>
  </div>
</template>

<script>
import CreateToBody from "../create-to-body.vue";
//import YearPanel from "./year-panel.vue";
import DatePanel from "./date-panel.vue";
import TimePanel from "./time-select-panel.vue";
//import HeaderPanel from "./header-panel.vue";
import FormMixin from "../form-mixins";
import { size } from "../filters";

import { parseDate, preFormatDate, formatDate, isValidDate } from "../libs";
export default {
  name: "v-datepicker",
  mixins: [FormMixin],
  components: {
    CreateToBody,
    DatePanel, //日期面板
    // YearPanel, //年月面板
    // HeaderPanel, //头部面板
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
    placeholder: {
      type: String,
      default() {
        return this.isRange ? "开始时间" : "选择时间";
      }
    },
    endPlaceholder: {
      type: String,
      default: "结束时间"
    },
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
    }
    //暂时不支持size配置
    // size: {
    //   type: String,
    //   default: "M"
    // }
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
    },
    isRangeDatetime() {
      return this.isRange && this.hasTime;
    },
    minEndDate() {
      if (this.startDate) {
        return parseDate(this.startDate, this.dateFormat);
      }
      return this.minDate;
    },
    submitDisabled() {
      if (this.isClickRange) {
        return !this.endDate;
      }
      return !this.startDate;
    }
  },
  data() {
    return {
      isClickRange: false,
      isSetTime: false,
      isSetStartTime: true, //是否设置开始时间
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
      initStartDate: "",
      initEndDate: "",
      startTime: "",
      endTime: "",
      maxDate: {},
      minDate: {},
      isMouseover: false,
      showDatePanel: false
    };
  },
  methods: {
    clickInput(e) {
      if (this.showDatePanel) {
        e.stopPropagation();
      } else {
        this.$refs.start.focus();
      }
    },
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
      if (this.isDisabled) return;
      this.showDatePanel = !this.showDatePanel;
    },
    clickIcon() {
      if (this.isDisabled) return;
      if (this.hasClear) {
        this.clearDate();
      } else {
        this.showPanel();
      }
    },
    //手动输入
    inputStartDate(val) {
      if (!isValidDate(val, this.dateFormat)) {
        return;
      }
      let dateObj = parseDate(val, this.dateFormat);

      if (dateObj.day === 0 || dateObj.year > this.maxDate.year) {
        return;
      }
      //修改日期
      this.changeTmpDate(dateObj.year, dateObj.month, dateObj.day);
      if (this.hasTime) {
        //修改时间
        this.setTime(
          {
            hour: dateObj.hour,
            minute: dateObj.minute,
            second: dateObj.second
          },
          true
        );
      }
    },
    inputEndDate(val) {
      if (!isValidDate(val, this.dateFormat)) {
        return;
      }

      let dateObj = parseDate(val, this.dateFormat);

      if (dateObj.day === 0 || dateObj.year > this.maxDate.year) {
        return;
      }
      //修改日期
      this.changeTmpEndDate(dateObj.year, dateObj.month, dateObj.day);
      if (this.hasTime) {
        //修改时间
        this.setTime(
          {
            hour: dateObj.hour,
            minute: dateObj.minute,
            second: dateObj.second
          },
          false
        );
      }
    },
    changeStartDate(val) {
      if (!isValidDate(val, this.dateFormat)) {
        //当输入时间不合法时，赋值初始化值
        this.startDate = this.initStartDate;
        this.$refs.start.setInputValue(this.initStartDate);
        return;
      }
      let dateObj = parseDate(val, this.dateFormat);
      let startDate = formatDate(
        new Date(
          dateObj.year,
          dateObj.month,
          dateObj.day,
          dateObj.hour,
          dateObj.minute,
          dateObj.second
        ),
        this.dateFormat
      );
      this.startDate = startDate;
    },
    changeEndDate(val) {
      if (!isValidDate(val, this.dateFormat)) {
        this.endDate = this.initEndDate;
        this.$refs.end.setInputValue(this.initEndDate);
        return;
      }
      let dateObj = parseDate(val, this.dateFormat);
      let endDate = formatDate(
        new Date(
          dateObj.year,
          dateObj.month,
          dateObj.day,
          dateObj.hour,
          dateObj.minute,
          dateObj.second
        ),
        this.dateFormat
      );
      this.endDate = endDate;
    },

    clearDate() {
      this.isClickRange = false;
      this.startDate = "";
      this.endDate = "";
      this.changeValue(this.isRange ? [] : "");
    },
    //点击日期执行事件
    clickStartPanel() {
      this.isDoubleClickEnd = false;
      this.clickDate();
      this.setStartFocus();
    },
    clickEndPanel() {
      if (this.isClickRange) {
        this.isDoubleClickEnd = true;
      }
      this.clickDate();
      this.setEndFocus();
    },
    clickDate() {
      if (this.isRangeDatetime) {
        //this.isSetStartTime = false;
      } else if (this.isRange) {
        this.isClickRange = !this.isClickRange;
      }

      this.changeDate();
    },
    setStartFocus() {
      this.$refs.start && this.$refs.start.focus();
    },
    setEndFocus() {
      this.$refs.end && this.$refs.end.focus();
    },
    hide() {
      this.showDatePanel = false;
    },
    handlerMouseover() {
      if (!this.isDisabled) this.isMouseover = true;
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
      this.setStartFocus();
    },
    //修改结束时间
    changeEndTime(time) {
      this.setTime(time, false);
      this.setEndFocus();
    },
    //修改header
    changeHeader(year, month) {
      this.tmpDate.year = year;
      this.tmpDate.month = month;
      this.updateTmpEndDate();
      if (this.isClickRange) {
        this.setEndFocus();
      } else {
        this.setStartFocus();
      }
    },
    changeYear(year, month) {
      this.tmpDate.year = year;
      this.tmpDate.month = month;
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

      if (
        this.isRange &&
        ((!this.isClickRange && !this.isRangeDatetime) ||
          (this.isRangeDatetime && this.isClickRange))
      ) {
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
      if (this.isRangeDatetime) {
        if (!this.isClickRange) {
          this.isClickRange = true;
          //this.isSetStartTime = false;
          return;
        }
      }
      let dateTime = this.startDate;

      if (this.isRange) {
        let endDateTime = this.endDate;
        if (dateTime != this.value[0] || endDateTime !== this.value[1]) {
          this.changeValue([dateTime, endDateTime]);
        }
      } else {
        if (dateTime != this.value) {
          this.changeValue(dateTime);
        }
      }
      this.hide();
    },
    changeValue(val) {
      this.$emit("change", val);
      if (this.elFormItem && !this.elFormItem.ignore) {
        //当form组件存在且需要数据验证时
        this.$dispatch("v-form-item", "form:blur", val);
      } else {
        // this.checkValid(this.value);
      }
    },
    formatData(value) {
      if (value) {
        value = preFormatDate(value, this.dateFormat);
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
      this.initStartDate = this.startDate;
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
      this.initEndDate = this.endDate;
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
    beforeCheckError(val) {
      if (this.isRange) {
        let startTime = val[0] || "",
          endTime = val[1] || "";
        if (!startTime && !endTime) {
          return "请选择日期范围";
        } else if (!startTime) {
          return "请选择开始时间";
        } else if (!endTime) {
          return "请选择结束时间";
        }
      }
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
      handler(val) {
        //if (val) {
        this.headerType = "init";
        this.isClickRange = false;
        //this.isSetStartTime = true;
        this.initData();

        if (this.elFormItem && !this.elFormItem.ignore) {
          //当form组件存在且需要数据验证时
          this.$dispatch("v-form-item", "form:error", !val);
        }
      },
      immediate: true
    }
  }
};
</script>
