<template>
  <div
    class="v-datepicker"
    :class="sizeCss"
    :style="{ width: datePickerWidth }"
    ref="datepicker"
    @mouseover="handlerMouseover"
    @mouseout="isMouseover = false"
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
        :class="{
          'v-datepicker__input--half': isRange,
          'v-datepicker__input--placeholder': isDateMouseover
        }"
        v-model="startDate"
        :disabled="isDisabled"
        @click.native="clickInput"
        :placeholder="placeholder"
        ref="start"
        @input="inputStartDate"
        @change="changeStartDate"
        @focus="handlerStartFocus"
      ></v-input>
      <template v-if="isRange">
        <span class="v-datepicker__splitter v-icon-spliter"></span>
        <v-input
          class="v-input--no-border v-datepicker__input v-datepicker__input--half"
          :class="{ 'v-datepicker__input--placeholder': isEndDateMouseover }"
          v-model="endDate"
          ref="end"
          :disabled="isDisabled"
          @click.native="clickInput"
          :placeholder="endPlaceholder"
          @input="inputEndDate"
          @change="changeEndDate"
          @focus="handlerEndFocus"
        ></v-input>
      </template>
    </div>
    <span
      class="v-datepicker__icon"
      :class="[
        hasClear ? 'v-icon-close-plane' : 'v-icon-calendar',
        { 'v-datepicker__icon--disabled': isDisabled }
      ]"
      @click="clickIcon"
    ></span>
    <create-to-body
      :class="sizeCss"
      :data-name="_name"
      class="v-datepicker--panel"
      :show="showDatePanel"
      v-clickoutside="() => hide(true)"
      :width="isRange || hasTime ? '456px' : '228px'"
    >
      <!-- 日期设置 -->
      <v-row>
        <!-- 时间日期范围 -->
        <template v-if="isRangeDatetime">
          <template v-if="isSetStartTime">
            <v-col :span="12">
              <date-panel
                :realDate="realDate"
                :realEndDate="realEndDate"
                :isRange="isRange"
                :date="tmpDate"
                :originDate="originDate"
                :originEndDate="originEndDate"
                :minDate="minSetDate"
                :maxDate="maxSetDate"
                @change-header="changeHeader"
                @change="changeTmpDate"
                @mouseover="handlerDateMouseover"
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
                @changeTime="changeTime"
                :time="startDate"
              ></time-panel>
            </v-col>
          </template>
          <template v-else>
            <v-col :span="12">
              <date-panel
                :realDate="realDate"
                :realEndDate="realEndDate"
                :isRange="isRange"
                :date="tmpEndDate"
                :originDate="originDate"
                :originEndDate="originEndDate"
                :minDate="minSetDate"
                :maxDate="maxSetDate"
                @change="changeTmpDate"
                @change-header="changeHeader"
                @mouseover="handlerDateMouseover"
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
              :realEndDate="realEndDate"
              :isRange="isRange"
              :date="tmpDate"
              type="start"
              :originDate="originDate"
              :originEndDate="originEndDate"
              :minDate="minSetDate"
              :maxDate="maxSetDate"
              :realDate="realDate"
              @change-header="changeHeader"
              @change="changeTmpDate"
              @mouseover="handlerDateMouseover"
              @hide="hide"
            ></date-panel>
          </v-col>
          <!-- 结束日期 -->
          <v-col :span="12" v-if="isRange">
            <date-panel
              :realEndDate="realEndDate"
              :realDate="realDate"
              :isRange="isRange"
              :date="tmpEndDate"
              type="end"
              :originDate="originDate"
              :originEndDate="originEndDate"
              :minDate="minSetDate"
              :maxDate="maxSetDate"
              @change="changeTmpDate"
              @change-header="changeHeader"
              @mouseover="handlerDateMouseover"
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
          <v-button
            size="S"
            :disabled="submitDisabled"
            type="primary"
            @click="setDateTime"
            >{{ _("OK") }}</v-button
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

import {
  parseDate,
  preFormatDate,
  formatDate,
  isValidDate,
  getTimeNumber,
  on
} from "../libs";
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
        return this.isRange ? _("Start Time") : _("Choose Time");
      }
    },
    endPlaceholder: {
      type: String,
      default: _("End Time")
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
    minSetDate() {
      if (
        this.startDate &&
        this.isChangedInput &&
        this.isRange &&
        !this.isSetStartTime
      ) {
        //用于切换后禁用表盘不可选的日期
        return parseDate(this.startDate, this.dateFormat);
      }
      //用于设置header-panel最小年份
      return this.minDate;
    },
    maxSetDate() {
      if (
        this.endDate &&
        this.isChangedInput &&
        this.isRange &&
        this.isSetStartTime
      ) {
        return parseDate(this.endDate, this.dateFormat);
      }
      return this.maxDate;
    },
    submitDisabled() {
      if (!this.isSetStartTime) {
        return !this.endDate;
      }
      return !this.startDate;
    },
    realDate() {
      return parseDate(this.initStartDate, this.dateFormat);
    },
    realEndDate() {
      return parseDate(this.initEndDate, this.dateFormat);
    }
  },
  data() {
    return {
      isSetTime: false,
      isSetStartTime: true, //是否设置开始时间
      isChangedInput: false, //是否输入框聚焦已切换
      isStartFocus: false, //当前聚焦是否是开始日期
      isEndFocus: false, //当前聚焦是否是结束日期
      originDate: {
        //实时变化的开始日期，会随mousemove事件变化
        year: "",
        month: "",
        day: "",
        hour: "",
        minute: "",
        second: ""
      },
      originEndDate: {
        //实时变化的结束日期，会随mousemove事件变化
        year: "",
        month: "",
        day: "",
        hour: "",
        minute: "",
        second: ""
      },
      tmpDate: {
        //当前表盘显示的开始年月日数据
        year: "",
        month: "",
        day: ""
      },
      tmpEndDate: {
        //当前表盘显示的结束年月日数据
        year: "",
        month: "",
        day: ""
      },
      startDate: "", //实时变化的开始日期 浅灰色字体显示
      endDate: "", //实时变化的开始日期 浅灰色字体显示
      initStartDate: "", //当前选中的开始日期 黑色字体显示
      initEndDate: "", //当前选中的结束日期 黑色字体显示
      // startTime: "",
      // endTime: "",
      maxDate: {},
      minDate: {},
      isMouseover: false,
      showDatePanel: false, //是否显示表盘弹窗
      isDateMouseover: false,
      isEndDateMouseover: false
    };
  },
  methods: {
    //年月日表盘Mouseover事件
    handlerDateMouseover(year, month, day, isOver) {
      if (this.isSetStartTime) {
        this.isDateMouseover = isOver;
        this.isEndDateMouseover = false;
        let startDate = formatDate(
          new Date(
            year,
            month,
            day,
            this.originDate.hour,
            this.originDate.minute,
            this.originDate.second
          ),
          this.dateFormat
        );
        if (this.validateDate(year, month, day, true)) {
          this.startDate = startDate;
        }
        if (!isOver || !this.validateDate(year, month, day, true)) {
          //如果未选中或移入区域为禁用区域，则还原表盘
          this.startDate = this.initStartDate;
        }
      } else {
        this.isEndDateMouseover = isOver;
        this.isDateMouseover = false;
        let endDate = formatDate(
          new Date(
            year,
            month,
            day,
            this.originEndDate.hour,
            this.originEndDate.minute,
            this.originEndDate.second
          ),
          this.dateFormat
        );
        if (this.validateDate(year, month, day, false)) {
          this.endDate = endDate;
        }
        if (!isOver || !this.validateDate(year, month, day, false)) {
          this.endDate = this.initEndDate;
        }
      }
    },
    clickInput(e) {
      if (this.showDatePanel) {
        e.stopPropagation();
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
      if (!this.isStartFocus && !this.isEndFocus) {
        //点击除输入框外的其他地方，如中间箭头
        this.setStartFocus();
      }
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
      this.changeTmpDate(dateObj.year, dateObj.month, dateObj.day, true);

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
      this.changeTmpDate(dateObj.year, dateObj.month, dateObj.day, true);
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

    handlerStartFocus() {
      if (this.showDatePanel && !this.isStartFocus && this.originEndDate.day) {
        //未点击确认按钮，直接点击输入框切换
        this.changeSetInput();
      }
      this.isSetStartTime = true;
      let year = this.tmpDate.year,
        month = this.tmpDate.month;

      if (!this.showDatePanel || !this.isStartFocus) {
        year = this.originDate.year;
        month = this.originDate.month;
      }
      if (!this.isRange) {
        this.tmpDate.day = this.originDate.day;
      }
      this.isStartFocus = true;
      this.isEndFocus = false;
      this.updateTmpDate(year, month);
    },
    handlerEndFocus() {
      if (this.showDatePanel && !this.isEndFocus && this.originDate.day > 0) {
        this.changeSetInput();
      }
      this.isSetStartTime = false;
      let year = this.tmpEndDate.year,
        month = this.tmpEndDate.month;

      if (!this.showDatePanel || !this.isEndFocus) {
        year = this.originEndDate.year;
        month = this.originEndDate.month;
      }
      this.isStartFocus = false;
      this.isEndFocus = true;
      // if (
      //   this.tmpDate.year === year &&
      //   this.tmpDate.month === month &&
      //   this.isRange &&
      //   !this.hasTime
      // ) {
      //   // month += 1;
      //   if (month > 11) {
      //     month = 0;
      //     year += 1;
      //   }
      // }
      this.updateTmpEndDate(year, month);
    },

    clearDate() {
      this.isChangedInput = false;
      this.startDate = "";
      this.endDate = "";
      this.changeValue(this.isRange ? [] : "");
      if (this.showDatePanel) {
        if (this.isStartFocus) {
          this.setStartFocus();
        }

        if (this.isEndFocus) {
          this.setEndFocus();
        }
      }
    },
    setStartFocus() {
      this.isEndDateMouseover = false;
      this.$refs.start && this.$refs.start.focus();
    },
    setEndFocus() {
      this.isDateMouseover = false;
      this.$refs.end && this.$refs.end.focus();
    },
    hide(beforeHide = false) {
      //isRange组件关闭弹窗前需要保存数据
      beforeHide && this.beforeHide();
      this.isEndDateMouseover = false;
      this.isDateMouseover = false;
      this.showDatePanel = false;
      this.isStartFocus = false;
      this.isEndFocus = false;
    },
    handlerMouseover() {
      if (!this.isDisabled) this.isMouseover = true;
    },
    //年月日盘改变后的回调
    changeTmpDate(year, month, day, isInput = false) {
      if (this.isSetStartTime) {
        this.originDate.year = this.tmpDate.year = year;
        this.originDate.month = this.tmpDate.month = month;
        this.originDate.day = this.tmpDate.day = day;
        this.initStartDate = formatDate(
          new Date(
            this.originDate.year,
            this.originDate.month,
            this.originDate.day,
            this.originDate.hour,
            this.originDate.minute,
            this.originDate.second
          ),
          this.dateFormat
        );

        if (!this.isRangeDatetime && this.isRange) {
          this.updateTmpDate(year, month);
        }
        this.setStartFocus();
      } else {
        this.originEndDate.year = this.tmpEndDate.year = year;
        this.originEndDate.month = this.tmpEndDate.month = month;
        this.originEndDate.day = this.tmpEndDate.day = day;
        this.initEndDate = formatDate(
          new Date(
            this.originEndDate.year,
            this.originEndDate.month,
            this.originEndDate.day,
            this.originEndDate.hour,
            this.originEndDate.minute,
            this.originEndDate.second
          ),
          this.dateFormat
        );
        if (!this.isRangeDatetime) {
          this.updateTmpEndDate(year, month);
        }
        this.setEndFocus();
      }

      if (!isInput && !this.hasTime) {
        //直接输入的形式和有时分秒盘的形式都需要下一步操作,其他不需要下一步操作
        this.setDateTime();
      }
      // if (this.isRange && !this.isChangedInput) {
      // //   this.changeSetInput();
      // // } else {
      //   // if (!this.hasTime) {
      //     this.changeDate();
      //   // }
      // }
    },
    //选择结束时间事件
    // changeTmpEndDate(year, month, day, isInput = false) {
    //   if (!this.isSetStartTime) {
    //     this.originEndDate.year = this.tmpEndDate.year = year;
    //     this.originEndDate.month = this.tmpEndDate.month = month;
    //     this.originEndDate.day = this.tmpEndDate.day = day;
    //     this.initEndDate = formatDate(
    //       new Date(
    //         this.originEndDate.year,
    //         this.originEndDate.month,
    //         this.originEndDate.day,
    //         this.originEndDate.hour,
    //         this.originEndDate.minute,
    //         this.originEndDate.second
    //       ),
    //       this.dateFormat
    //     );
    //     if (!this.isRangeDatetime) {
    //       this.updateTmpEndDate(year, month);
    //     }
    //   }
    //   if (isInput) {
    //     return;
    //   }
    //   if (!this.isRangeDatetime && !this.isChangedInput) {
    //     this.changeSetInput();
    //   } else {
    //     if (!this.isRangeDatetime) {
    //       this.changeDate();
    //     }
    //   }
    // },
    //

    /**
     * 是否交换位置并设置新的聚焦
     * @param { Boolean } setFocus  true：第一次交换聚焦  false: 弹窗关闭前的调用
     */
    changeSetInput(setFocus = true) {
      //结束日期 >= 开始日期
      let startDate = new Date(
          this.originDate.year,
          this.originDate.month,
          this.originDate.day
        ).getTime(),
        endDate = new Date(
          this.originEndDate.year,
          this.originEndDate.month,
          this.originEndDate.day
        ).getTime(),
        startTime,
        endTime,
        isTimeCheckValid = true;

      if (this.hasTime) {
        startTime = getTimeNumber({
          hour: this.originDate.hour,
          minute: this.originDate.minute,
          second: this.originDate.second
        });
        endTime = getTimeNumber({
          hour: this.originEndDate.hour,
          minute: this.originEndDate.minute,
          second: this.originEndDate.second
        });
        isTimeCheckValid = endTime >= startTime;
      }

      let isCheckValid = endDate >= startDate;
      if (this.isSetStartTime) {
        if (!isCheckValid && setFocus) {
          this.endDate = this.initEndDate = "";

          //等待聚焦事件更新表盘头部年月后再更新
          this.$nextTick(() => {
            //清空结束日期后，聚焦到结束表盘，结束表盘的头部年月设置为开始表盘的年月
            this.updateTmpEndDate(this.originDate.year, this.originDate.month);
          });
        } else if (
          (endDate == startDate && !isTimeCheckValid) ||
          !isCheckValid
        ) {
          // 1.日期相同，时分秒结束小于开始
          // 2.通过直接输入值或enter事件使切换后的结束日期小于开始日期
          this.changeDatePosition();
        }
        setFocus && this.setEndFocus();
      } else {
        if (!isCheckValid && setFocus) {
          this.startDate = this.initStartDate = "";
          this.$nextTick(() => {
            this.updateTmpDate(
              this.originEndDate.year,
              this.originEndDate.month
            );
          });
        } else if (
          (endDate == startDate && !isTimeCheckValid) ||
          !isCheckValid
        ) {
          this.changeDatePosition();
        }
        setFocus && this.setStartFocus();
      }
      this.isChangedInput = true;
    },
    //交换开始和结束的日期
    changeDatePosition() {
      const dateStart = new Date(
          this.originEndDate.year,
          this.originEndDate.month,
          this.originEndDate.day,
          this.originEndDate.hour,
          this.originEndDate.minute,
          this.originEndDate.second
        ),
        dateEnd = new Date(
          this.originDate.year,
          this.originDate.month,
          this.originDate.day,
          this.originDate.hour,
          this.originDate.minute,
          this.originDate.second
        ),
        startDate = formatDate(dateStart, this.dateFormat),
        endDate = dateEnd === "" ? "" : formatDate(dateEnd, this.dateFormat);

      this.startDate = this.initStartDate = startDate;
      this.endDate = this.initEndDate = endDate;
    },
    //更新开始日期的显示年月
    updateTmpDate(year, month) {
      this.tmpDate.year = year;
      this.tmpDate.month = month;
      //范围选择且不支持时间时
      if (this.isRange && !this.hasTime) {
        if (month === 11) {
          this.tmpEndDate.year = year + 1;
          this.tmpEndDate.month = 0;
        } else {
          this.tmpEndDate.year = year;
          this.tmpEndDate.month = month + 1;
        }
      }

      //this.setStartFocus();
    },
    //更新结束日期的显示年月
    updateTmpEndDate(year, month) {
      this.tmpEndDate.year = year;
      this.tmpEndDate.month = month;
      if (this.isRange && !this.hasTime) {
        if (month === 0) {
          this.tmpDate.year = year - 1;
          this.tmpDate.month = 11;
        } else {
          this.tmpDate.year = year;
          this.tmpDate.month = month - 1;
        }
      }
    },
    //切换time-panel时分秒盘
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
    //time-panel时分秒盘改变的回调：修改起始时间
    changeTime(time) {
      this.setTime(time, true);
      this.setStartFocus();
    },
    //time-panel时分秒盘改变的回调：修改结束时间
    changeEndTime(time) {
      this.setTime(time, false);
      this.setEndFocus();
    },
    //修改header
    changeHeader(year, month, type) {
      if (this.isSetStartTime) {
        if (type === "end") {
          month -= 1;
          if (month <= -1) {
            year -= 1;
            month = 11;
          }
        }
        this.tmpDate.year = year;
        this.tmpDate.month = month;
        this.setStartFocus();
      } else {
        if (type === "start") {
          month += 1;
          if (month >= 12) {
            year += 1;
            month = 0;
          }
        }
        this.tmpEndDate.year = year;
        this.tmpEndDate.month = month;
        this.setEndFocus();
      }
    },
    changeYear(year, month) {
      this.tmpDate.year = year;
      this.tmpDate.month = month;
      this.updateTmpDate(year, month);
    },

    //用于时分秒盘赋值
    changeDate() {
      //未设置年月日，直接设置时分秒，初始化年月日
      if (this.originDate.day == 0 && this.isStartFocus) {
        if (this.originEndDate.day) {
          //结束日期存在
          this.originDate.day = this.originEndDate.day;
          this.originDate.month = this.originEndDate.month;
          this.originDate.year = this.originEndDate.year;
        } else {
          //结束日期不存在
          this.originDate.day = new Date().getDate();
        }
      }

      if (this.originEndDate.day == 0 && this.isEndFocus) {
        if (this.originDate.day) {
          //开始日期存在
          this.originEndDate.day = this.originDate.day;
          this.originEndDate.month = this.originDate.month;
          this.originEndDate.year = this.originDate.year;
        } else {
          //开始日期不存在
          this.originEndDate.day = new Date().getDate();
        }
      }

      const dateStart = new Date(
          this.originDate.year,
          this.originDate.month,
          this.originDate.day,
          this.originDate.hour,
          this.originDate.minute,
          this.originDate.second
        ),
        dateEnd = new Date(
          this.originEndDate.year,
          this.originEndDate.month,
          this.originEndDate.day,
          this.originEndDate.hour,
          this.originEndDate.minute,
          this.originEndDate.second
        ),
        startDate = formatDate(dateStart, this.dateFormat),
        endDate = dateEnd === "" ? "" : formatDate(dateEnd, this.dateFormat);

      //起止日期赋值
      if (this.isStartFocus) {
        this.startDate = this.initStartDate = startDate;
      }
      if (this.isEndFocus) {
        this.endDate = this.initEndDate = endDate;
      }

      // //点击后是否隐藏
      // // let isHide = false;
      // if (this.isRange) {
      //   //支持范围选择
      //   if (!this.hasTime) {
      //     //第二次点击 && 不支持时间配置时
      //     isHide = true;
      //   }
      // } else {
      //   //不支持范围
      //   if (!this.hasTime) {
      //     //不支持时间配置
      //     isHide = true;
      //   }
      // }
      // this.setDateTime(isHide);
    },

    //向外emit时间，弹窗的关闭
    setDateTime() {
      //不隐藏面板时，不处理
      //if (!isHide) return;

      if (this.isRange && !this.isChangedInput) {
        //还未切换，进入切换流程
        this.changeSetInput();
        return;
      }

      if (this.isRange) {
        this.changeSetInput(false);
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
      }
    },
    formatData(value) {
      if (value) {
        value = preFormatDate(value, this.dateFormat);
        this.startDate = value;
      } else {
        this.startDate = "";
      }
      this.initStartDate = this.startDate;
    },
    formatEndData(value) {
      if (value) {
        this.endDate = value;
      } else {
        this.endDate = "";
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
          return _("Please select the peroid");
        } else if (!startTime) {
          return _("Please select the start time");
        } else if (!endTime) {
          return _("Please select the end time");
        }
      }
    },
    beforeHide() {
      if (this.isRange && this.isChangedInput) {
        let dateTime = this.startDate,
          endDateTime = this.endDate;

        if (dateTime != this.value[0] && this.isEndFocus && endDateTime) {
          //开始日期改了且已保存
          this.changeValue([dateTime, this.value[1]]);
        } else if (
          endDateTime !== this.value[1] &&
          this.isStartFocus &&
          dateTime
        ) {
          //结束日期改了且已保存
          this.changeValue([this.value[0], endDateTime]);
        }
      }
    },
    /**
     * 是否在可选范围内
     * @param { Boolean } exceed true：设置开始日期 false: 设置结束日期
     * @returns { Boolean } true：在范围内 false: 不在范围内
     */
    validateDate(year, month, day, exceed) {
      if (!this.isRange || !this.isChangedInput) {
        return true;
      }
      if (exceed) {
        return (
          new Date(year, month, day).getTime() <=
          new Date(
            this.realEndDate.year,
            this.realEndDate.month,
            this.realEndDate.day
          ).getTime()
        );
      } else {
        return (
          new Date(year, month, day).getTime() >=
          new Date(
            this.realDate.year,
            this.realDate.month,
            this.realDate.day
          ).getTime()
        );
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
        this.isChangedInput = false;
        this.initData();
        if (this.elFormItem && !this.elFormItem.ignore) {
          //当form组件存在且需要数据验证时
          this.$dispatch("v-form-item", "form:error", !val);
        }
      },
      immediate: true
    },
    startDate: {
      handler(value) {
        if (value) {
          let dateObj = parseDate(value, this.dateFormat);
          Object.assign(this.originDate, dateObj);
        } else {
          let dateObj = this.getNowDate();
          Object.assign(this.originDate, {
            year: dateObj.year,
            month: dateObj.month,
            day: 0,
            hour: "",
            minute: "",
            second: ""
          });
        }
      },
      immediate: true
    },
    endDate: {
      handler(value) {
        if (value) {
          let dateObj = parseDate(value, this.dateFormat);
          Object.assign(this.originEndDate, dateObj);
        } else {
          let dateObj = this.getNowDate();
          let year = dateObj.year,
            month = dateObj.month;
          if (!this.isRangeDatetime) {
            month += 1;
            if (month >= 12) {
              month = 0;
              year += 1;
            }
          }
          Object.assign(this.originEndDate, {
            year: year,
            month: month,
            day: 0,
            hour: "23",
            minute: 60 - this.minuteInterval,
            second: 60 - this.secondInterval
          });
        }
      },
      immediate: true
    }
  },
  mounted() {
    const vm = this;

    on(this.$refs.datepicker, "keydown", e => {
      if (e.keyCode == 13) {
        if (
          (!vm.startDate && vm.isStartFocus) ||
          (!vm.endDate && vm.isEndFocus)
        ) {
          //有一个没填都关闭弹窗
          vm.hide();
        } else {
          if (vm.isSetStartTime) {
            vm.initStartDate = vm.startDate;
          } else {
            vm.initEndDate = vm.endDate;
          }
          vm.setDateTime();
        }
      }
    });
  }
};
</script>
