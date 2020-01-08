<template>
  <div>
    <transition name="fade">
      <div class="mask" v-show="visible" @click="visible = false"></div>
    </transition>
    <transition name="slide">
      <div class="picker" v-show="visible">
        <div class="picker-title border-b">
          <span class="pt-button pt-cancel" @click="cancel" :style="{ color: colorCancel }">{{textCancel}}</span>
          <h4 :style="{ color: colorTitle }">{{textTitle}}</h4>
          <span class="pt-button pt-submit" @click="confirm" :style="{ color: colorConfirm }">{{textConfirm}}</span>
        </div>
        <div class="picker-panel">
          <div class="picker-mask-top border-b"></div>
          <div class="picker-mask-bottom border-t"></div>
          <div class="picker-wheel-wrapper">
            <div class="picker-wheel" ref="wheelbox">
              <ul class="wheel-scroll">
                <li class="wheel-item" v-for="item in pickerData" :key="item.value">{{item.title}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { copyDeepData } from "../libs";
import { setTimeout } from "timers";

const DATA_NORMAL = "normal";
// 级联

const TEXT_TITLE = "";
const TEXT_CONFIRM = _("Confirm");
const TEXT_CANCEL = _("Cancel");

const COLOR_TITLE = "#262626";
const COLOR_CONFIRM = "#fe6600";
const COLOR_CANCEL = "#595959";

const COMFIRM_EVENT = "confirm";
const V_MODEL_EVENT = "V_MODEL_EVENT";

export default {
  name: "v-picker",
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    value: [Boolean, String, Number],
    visible: {
      type: Boolean,
      default: false
    },
    textTitle: {
      type: String,
      default: TEXT_TITLE
    },
    textConfirm: {
      type: String,
      default: TEXT_CONFIRM
    },
    textCancel: {
      type: String,
      default: TEXT_CANCEL
    },
    colorTitle: {
      type: String,
      default: COLOR_TITLE
    },
    colorConfirm: {
      type: String,
      default: COLOR_CONFIRM
    },
    colorCancel: {
      type: String,
      default: COLOR_CANCEL
    },
    manualText: {
      type: String,
      default: ""
    }
  },
  model: {
    prop: "visible",
    event: V_MODEL_EVENT
  },
  inject: ["manualBack"],
  data() {
    return {
      //   visible: false,
      wheel: null
    };
  },
  watch: {
    data() {
      this._setPickerData();
    },
    visible(val) {
      if (val) {
        this.show();
      } else {
        this.hide();
      }
    }
  },
  computed: {
    pickerData() {
      let data = copyDeepData(this.data);
      if (data.length > 0 && typeof data[0] !== "object") {
        data = data.map(item => {
          return { title: item, value: item };
        });
      }

      // 添加自定义项
      if (this.manualText) {
        data.push({
          title: this.manualText,
          value: this.manualText
        });
      }
      return [...data];
    },
    valueToIndex() {
      let data = {};
      this.pickerData.forEach((item, i) => {
        data[item.value] = i;
      });
      return data;
    },
    anchor() {
      let index = this.valueToIndex[this.value];
      if (index !== undefined) {
        return index;
      }
      if (this.manualText) {
        return this.pickerData.length - 1;
      }
      return 0;
    }
  },
  methods: {
    show() {
      if (!this.wheel) {
        this.$nextTick(() => {
          const wheelbox = this.$refs.wheelbox;
          this._createWheel(wheelbox).enable();
          this._wheelToAnchor();
        });
      } else {
        this.wheel.enable();
        this._wheelToAnchor();
      }
    },

    hide() {
      this.wheel && this.wheel.disable();
      this.$emit(V_MODEL_EVENT, false);
    },

    _createWheel(wheelbox) {
      if (!this.wheel) {
        this.wheel = new BScroll(wheelbox, {
          wheel: {
            selectedIndex: 0,
            rotate: 20
          }
        });
      } else {
        this.wheel.refresh();
      }
      return this.wheel;
    },

    _wheelToAnchor(i) {
      i = i === undefined ? this.anchor : i;
      this.wheel.wheelTo(i);
    },

    _getCurrentValue() {
      let i = this.wheel.getSelectedIndex(),
        val = this.pickerData[i].value;

      this.value = val;
      // if (val !== this.manualText) {
      //   this.value = val;
      // }
      //  else if (this.valueToIndex[this.value] !== undefined) {
      //   this.value = "";
      // }
    },

    _setPickerData() {
      if (this.visible) {
        this.$nextTick(() => {
          const wheelbox = this.$refs.wheelbox;
          this._createWheel(wheelbox);
          this._wheelToAnchor();
        });
      }
    },

    confirm() {
      this._getCurrentValue();
      this.hide();
      if (this.value === this.manualText) {
        this.manualBack();
      } else {
        this.$emit(COMFIRM_EVENT, this.value);
      }
    },

    cancel() {
      this.hide();
    }
  }
};
</script>

