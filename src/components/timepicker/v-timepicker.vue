<template>
  <div
    class="v-timepicker"
    :class="sizeCss"
    :style="{ width: timePickerWidth }"
  >
    <div
      :name="name"
      :data-name="_name"
      class="v-timepicker__label input-text"
      :class="{ 'is-disabled': isDisabled, 'is-focus': showTimePanel }"
      @click="showPanel"
    >
      <!-- 开始时间 -->
      <span :class="{ 'placeholder-text': placeholder && !startTime }">
        {{ startTime || placeholder }}
      </span>
      <!-- 结束时间 -->
      <template v-if="isRange">
        <span class="v-timepicker__splitter">-</span>
        <span
          :class="{
            'placeholder-text': endPlaceholder && !endTime
          }"
        >
          {{ endTime || endPlaceholder }}
        </span>
      </template>
    </div>
    <!-- 图标信息 -->
    <span
      class="v-timepicker__icon"
      :class="[
        hasClear ? 'v-icon-close-plane' : 'v-icon-time',
        { 'v-timepicker__icon--disabled': isDisabled }
      ]"
      @mouseover="handlerMouseover"
      @mouseout="isMouseover = false"
      @click="clickIcon"
    ></span>
    <!-- 下拉内容 -->
    <create-to-body
      :class="sizeCss"
      :data-name="_name"
      :show="showTimePanel"
      v-clickoutside="hide"
      :width="timePickerWidth"
      :scale="isRange ? 2 : 1"
    >
      <v-row v-if="isRange">
        <v-col class="v-timepicker__title" :span="12">开始时间</v-col>
        <v-col class="v-timepicker__title" :span="12">结束时间</v-col>
      </v-row>
      <v-row>
        <!-- 开始时间 -->
        <v-col class="v-timepicker__wrapper" :span="isRange ? 12 : 24">
          <time-panel
            :format="format"
            :minuteInterval="minuteInterval"
            :secondInterval="secondInterval"
            :time="startTime"
            :min="min"
            :max="max"
            @change="changeTime"
          ></time-panel>
        </v-col>
        <!-- 结束时间 -->
        <v-col v-if="isRange" class="v-timepicker__wrapper" :span="12">
          <time-panel
            :format="format"
            :minuteInterval="minuteInterval"
            :secondInterval="secondInterval"
            :time="endTime"
            :min="min"
            :max="max"
            @change="changeEndTime"
          ></time-panel>
        </v-col>
      </v-row>
    </create-to-body>
  </div>
</template>
<script>
import TimePanel from "./time-panel";
import CreateToBody from "../create-to-body.vue";
import FormMixin from "../form-mixins";
import { size } from "../filters";
export default {
  name: "v-timepicker",
  mixins: [FormMixin],
  components: {
    TimePanel,
    CreateToBody
  },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    //时间值  支持范围时为数组形式
    value: [String, Array],
    name: String,
    disabled: {
      type: Boolean,
      default: false
    },
    //宽度
    width: [String, Number],
    //是否支持清空
    isClear: {
      type: Boolean,
      default: true
    },
    //是否支持范围
    isRange: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    //结束时间占位符
    endPlaceholder: String,
    //时间格式
    format: {
      type: String,
      default: "hh:mm"
    },
    min: String,
    max: String,
    //分钟间隔
    minuteInterval: {
      type: Number,
      default: 1
    },
    //秒钟间隔
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
        M: "v-timepicker--medium",
        S: "v-timepicker--small",
        L: "v-timepicker--large"
      };
      return cssObj[this.size] || cssObj.M;
    },
    //是否显示清除标志 支持清除 && 时间不为空 && 鼠标放在上面
    hasClear() {
      return this.isClear && this.value !== "" && this.isMouseover;
    },
    //宽度
    timePickerWidth() {
      return size(this.width);
    }
  },
  data() {
    return {
      startTime: "",
      endTime: "",
      showTimePanel: false,
      isMouseover: false
    };
  },
  methods: {
    showPanel() {
      if (this.isDisabled) return;
      this.showTimePanel = !this.showTimePanel;
    },
    clickIcon() {
      if (this.isDisabled) return;
      if (this.hasClear) {
        if (this.isRange) {
          this.$emit("change", []);
        } else {
          this.$emit("change", "");
        }
        this.checkValid("");
      } else {
        this.showPanel();
      }
    },
    hide() {
      this.showTimePanel = false;
      this.checkValid(this.value);
    },
    changeTime(time) {
      if (time !== this.startTime) {
        this.setTime([time, this.endTime]);
      }
    },
    changeEndTime(time) {
      if (time !== this.endTime) {
        this.setTime([this.startTime, time]);
      }
    },
    setTime(time) {
      if (this.isRange) {
        this.$emit("change", time);
      } else {
        this.$emit("change", time[0]);
      }
    },
    handlerMouseover() {
      if (!this.isDisabled) this.isMouseover = true;
    },
    beforeCheckError(val) {
      if (this.isRange) {
        let startTime = val[0] || "",
          endTime = val[1] || "";
        if (!startTime && !endTime) {
          return "请选择时间范围";
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
      handler(value) {
        if (this.isRange) {
          this.startTime = value[0] || "";
          this.endTime = value[1] || "";
        } else {
          this.startTime = value || "";
        }
      },
      immediate: true
    },
    showTimePanel(val) {
      if (this.elFormItem && !this.elFormItem.ignore) {
        //当form组件存在且需要数据验证时
        this.$dispatch("v-form-item", "form:error", !val);
      }
    }
  }
};
</script>
