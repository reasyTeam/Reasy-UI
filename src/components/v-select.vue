<template>
    <div
        class="form-el-content form-select"
        :class="{'error-group': dataKey.error}"
        v-show="dataKey.show"
    >
        <div v-clickoutside="hide" @click.stop="showOption">
            <input
                type="text"
                class="text"
                :class="dataKey.css"
                v-model="selectLabel"
                :style="{visibility: isEdit?'visible':'hidden'}"
                :disabled="dataKey.disabled"
                :name="dataKey.name"
                @keyup="changeValue()"
                @blur="setKeyValue()"
                :maxlength="dataKey.maxlength"
                ref="input"
                v-manualevent="evtHandlerList"
                :evt-name="evtName"
            />
            <div ref="inputtext" class="input-text" :class="{'active': dropdownShow, 'disabled': dataKey.disabled}" v-show="!isEdit">{{selectLabel}}</div>
            <div
                class="select-arrow"
                @click.stop="clickArrow"
                :class="dropdownShow ? 'arrow-up' : 'arrow-down'"
            >
                <div class="select-arrow-icon v-icon-arrrow-down"></div>
            </div>
        </div>
        <transition>
            <ul
                class="select-dropdown"
                :style="{'top': dropdownTop + 'px'}"
                ref="dropdown"
                v-show="dropdownShow && !dataKey.disabled && !$isMobile"
            >
                <template v-for="item in dataKey.sortArray">
                    <li
                        :value="item.value"
                        :key="item.value"
                        class="select-li"
                        :class="{'active': dataKey.val == item.value, 'disabled': item.disabled}"
                        @click.stop="changeSelect(item.value, item.title)"
                    >{{item.title}}</li>
                </template>
                <li
                    v-show="dataKey.hasManual"
                    class="select-li"
                    @click.stop="hanlderManual()"
                >{{dataKey.manualText}}</li>
            </ul>
        </transition>
        <div class="error-bottom text-error" v-if="dataKey.error">{{dataKey.error}}</div>
        <v-picker
            v-model="pickerVisible"
            :value="dataKey.val"
            :data="dataKey.sortArray"
            @confirm="setValue"
        ></v-picker>
    </div>
</template>

<script>
import { isObject, isDefined } from "./libs";
import addEvent from "./add-event";
let defaults = {
    required: true,
    css: "", //样式
    show: true, //是否显示
    ignore: false, //是否忽略
    disabled: false, //是否禁用
    hasManual: false, //是否支持自定义
    manualText: _("Manual"),
    maxlength: "", //输入框最大输入长度
    error: "", //错误
    name: "",
    defaultVal: "",
    immediate: true,
    sortArray: [
        /* {
            value: xxx,
            title: xxx
        }*/
    ],
    val: "", //组件id
    valid: [], //数据验证 仅自定义时生效
    options: {}, //options 和sortArray 同时存在时优先以sortArray存在
    changeCallBack: function() {},
    beforeChange: function() {} //改变之前，返回false时不会执行changeCallBack
};

let MANUAL_VALUE = "-1";

export default {
    name: "v-select",
    props: ["dataKey"],
    mixins: [addEvent],
    provide() {
        return {
            manualBack: this.handlerCallBack
        };
    },
    created() {
        if (!Array.isArray(this.dataKey.sortArray)) {
            this.$set(this.dataKey, "sortArray", []);
        }

        this.dataKey.sortArray.forEach((item, index) => {
            if (!isObject(item)) {
                this.dataKey.sortArray[index] = {
                    value: item,
                    title: item
                };
            }
        });

        //sortArray为空时，默认以dataKey.options 对象属性排序
        if (this.dataKey.sortArray.length === 0) {
            for (let prop in this.dataKey.options) {
                this.dataKey.sortArray.push({
                    title: this.dataKey.options[prop],
                    value: prop
                });
            }
        }
        //默认值
        defaults.val = isDefined(this.dataKey.defaultVal)
            ? this.dataKey.defaultVal
            : "";

        this.dataKey = this.setOptions(this.dataKey, defaults);

        let newVal = this.dataKey.val,
            valArr = this.dataKey.sortArray.filter(
                item => item.value === newVal
            );
        if (valArr.length === 1) {
            this.isEdit = false;
            this.selectLabel = valArr[0].title;
        } else {
            this.dataKey.hasManual && (this.isEdit = true);
            this.selectLabel = newVal;
        }
        this.addEvent();
    },
    data() {
        return {
            error: "",
            isEdit: false,
            isInput: false, //是否正在输入
            dropdownShow: false,
            dropdownTop: 0,
            firstChange: false,
            lastLabel: "",
            selectLabel: "",
            //selectLabel: "",
            dataOption: {}
        };
    },
    computed: {
        pickerVisible: {
            set(val) {
                this.dropdownShow = val;
            },
            get() {
                return this.$isMobile && this.dropdownShow;
            }
        },
        isInSelect: {
            set() {},
            get() {
                let newVal = this.dataKey.val,
                    valArr = this.dataKey.sortArray.filter(
                        item => item.value === newVal
                    );
                if (valArr.length === 1) {
                    this.isEdit = false;
                    this.selectLabel = valArr[0].title;
                } else {
                    this.dataKey.hasManual && (this.isEdit = true);
                    this.selectLabel = newVal;
                }
                return valArr;
            }
        }
    },
    mounted() {
        //定义body click事件
        //this.globalEvent("click", this.hide);
    },
    methods: {
        isObject(obj) {
            return isObject(obj);
        },
        changeSelect(value, label) {
            this.dropdownShow = false;

            if (value === this.dataKey.val) {
                return;
            }
            this.firstChange = true;

            if (this.dataKey.beforeChange(value) === false) {
                return;
            }

            this.dataKey.error = "";
            this.dataKey.val = value;
            this.handlerChange();
        },
        handlerChange() {
            if (this.dataKey.events && this.dataKey.events.change) {
                if (typeof this.dataKey.events.change === "function") {
                    this.dataKey.events.change();
                }
            }
        },
        setValue(val) {
            this.dataKey.val = val;
        },
        clickArrow() {
            if (!this.dataKey.disabled) {
                this.dropdownShow = !this.dropdownShow;
            }
        },
        showOption() {
            if (!this.dataKey.disabled && !this.isEdit) {
                this.dropdownShow = !this.dropdownShow;
            }
        },
        /**
         * 失去焦点时，修改KEY值
         */
        setKeyValue() {
            let val = this.$refs.input.value;
            let valArr = this.dataKey.sortArray.filter(
                    item => item.title === val
                ),
                newVal;
            if (valArr.length === 1) {
                newVal = valArr[0].value;
            } else if (val !== "") {
                newVal = val;
            }
            if (this.$refs.input.value === "") {
                newVal = this.lastLabel || this.dataKey.defaultVal;
                this.dataKey.error = "";
            }
            if (this.dataKey.val === newVal) {
                valArr = this.isInSelect;
                if (valArr.length === 1) {
                    this.isEdit = false;
                    this.selectLabel = valArr[0].title;
                } else {
                    this.isEdit = true;
                    this.selectLabel = newVal;
                }
            } else {
                this.dataKey.val = newVal;
            }

            this.isInput = false;
            //不存在下拉框 && 有自定义
            this.isEdit = !(valArr.length === 1) && this.dataKey.hasManual;
        },

        changeValue() {
            //this.checkData(this.dataKey, this.selectLabel);
            if (!this.isEdit) {
                return;
            }
            this.isInput = true;
            this.dropdownShow = false;
            let isCheckTrue = this.check(this.dataKey, this.$refs.input.value);
        },

        handlerCallBack() {
            this.lastLabel = this.dataKey.val;
            let arr = this.isInSelect;

            //如果存在于下拉框中，并且value != title则清空
            if (arr.length === 1 && arr[0].value !== arr[0].title) {
                this.selectLabel = "";
            }

            this.isEdit = true;
            this.$refs.inputtext.style.display = "none";
            this.$refs.input.style.visibility = "visible";
            this.$refs.input.focus();
            this.$refs.input.scrollIntoView({ block: "center" });
            this.isInput = true;
        },

        hanlderManual() {
            this.handlerCallBack();
            this.hide();
            this.dataKey.changeCallBack();
            this.handlerChange();
        },
        hide() {
            this.$isMobile || (this.dropdownShow = false);
        },
        check(dataObj, value) {
            if (typeof this.$checkData == "function") {
                return this.$checkData(dataObj, value);
            }
            return true;
        },
        focus() {
            this.showOption();
        },
        setPosition() {
            let dropdownHeight = this.$refs.dropdown.offsetHeight,
                inputRect = this.$refs.input.getBoundingClientRect(),
                bodyHeight = document.body.clientHeight;
            if (inputRect.bottom + dropdownHeight > bodyHeight) {
                this.dropdownTop = 0 - dropdownHeight - 8;
            } else {
                this.dropdownTop = inputRect.height;
            }
        }
    },
    destroyed() {
        //this.globalRemoveEvent("click", this.hide);
        this.dataKey.error = "";
    },
    watch: {
        "dataKey.val": {
            handler(newValue, oldValue) {
                if (newValue === undefined || newValue === "") {
                    return;
                }
                let hasVal = this.isInSelect.length === 1;
                if (
                    (this.dataKey.immediate !== false ||
                        this.firstChange == true) &&
                    hasVal &&
                    !this.isInput
                ) {
                    this.dataKey.changeCallBack &&
                        this.dataKey.changeCallBack(newValue);
                }
            },
            //立即执行
            immediate: true
        },
        dropdownShow: {
            handler(newValue, oldValue) {
                if (newValue) {
                    //选中
                    this.$isMobile ||
                        this.$nextTick(function() {
                            this.setPosition();
                        });
                }
            }
        },
        "dataKey.show": {
            handler(newValue, oldValue) {
                if (!newValue) {
                    this.dataKey.error = "";
                }
            }
        },
        "dataKey.disabled": {
            handler(newValue, oldValue) {
                if (!newValue) {
                    this.dataKey.error = "";
                }
            }
        }
    }
};
</script>
