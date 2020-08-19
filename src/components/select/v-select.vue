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
                v-model="inputValue"
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
            <div ref="inputtext" class="input-text ellipsis" :class="{'active': dropdownShow, 'disabled': dataKey.disabled}" v-show="!isEdit"><span>{{selectLabel}}</span></div>
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
import { isObject, isDefined } from "../libs";
import addEvent from "../add-event";
let defaults = {
    required: true,
    css: "", //样式
    show: true, //是否显示
    ignore: false, //是否忽略
    disabled: false, //是否禁用
    hasManual: false, //是否支持自定义
    manualText: _("Customize"),
    manualValue: "-1", //选择自定义时的值
    maxlength: "", //输入框最大输入长度
    error: "", //错误
    name: "",
    defaultVal: "",
    immediate: true,
    isNum: false, //是否输入框内允许只输入数字或浮点型
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
        } else {
            this.dataKey.hasManual && (this.isEdit = true);
        }
        this.addEvent();
    },
    data() {
        return {
            error: "",
            inputValue: "",
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
            
            newVal = val;
            if(this.dataKey.isNum) {
                newVal = Number(val).toString();
            }
            
            if (this.$refs.input.value === "") {
                newVal = this.lastLabel || this.dataKey.defaultVal;
                this.dataKey.error = "";
            }
            
            this.dataKey.val = newVal;
            this.isInput = false;
            
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
            this.dataKey.val = this.dataKey.manualValue;
            
             this.$refs.inputtext.style.display = "none";
             this.$refs.input.style.visibility = "visible";
            this.$nextTick(function() {
                this.isEdit = true;
                this.$refs.input.focus();
                this.$refs.input.scrollIntoView({ block: "center" });
                this.isInput = true;
            });
            
        },

        hanlderManual() {
            this.handlerCallBack();
            this.hide();
            this.dataKey.changeCallBack(this.dataKey.val);
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
                this.inputValue = newValue;
                if(newValue === this.dataKey.manualValue) {
                    this.inputValue = "";
                }
                let varArr = this.dataKey.sortArray.filter(
                        item => item.value === newValue
                    );
                //存在下拉列表
                if(varArr.length === 1) {
                    this.selectLabel = varArr[0].title;
                    this.$nextTick(function() {
                        this.isEdit = false;
                    });
                    
                } else {
                    this.selectLabel = newValue;
                    //支持自定义时
                    this.dataKey.hasManual && (this.$nextTick(function() {
                        this.isEdit = true;
                    }));
                }
                if (
                    (this.dataKey.immediate !== false ||
                        this.firstChange == true) &&
                    //hasVal &&
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
