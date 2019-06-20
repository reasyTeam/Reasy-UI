<template>
    <div class="form-el-content form-select" :class="{'error-group': dataKey.error}"  v-show="dataKey.show">
        <div v-clickoutside="hide" @click.stop="showOption">
            <input
                :readonly="dataKey.hasManual !== true"
                type="text"
                class="text"
                :class="dataKey.css"
                v-model="selectLabel"
                :disabled="dataKey.disabled"
                :name="dataKey.name"
                @keyup="changeValue()"
                @blur="setKeyValue()"
                :maxlength="dataKey.maxlength"
                ref="input"
            >
            <div class="select-arrow" :class="dropdownShow ? 'arrow-up' : 'arrow-down'">
                <div class="select-arrow-icon v-icon-arrrow-down"></div>
            </div>
        </div>
        <transition>
            <ul class="select-dropdown" v-show="dropdownShow && !dataKey.disabled">
                <template v-for="item in dataKey.sortArray">
                    <li
                        v-if="isObject(item)"
                        :value="item.value"
                        :key="item.value"
                        class="select-li"
                        :class="{'active': dataKey.val == item.value, 'disabled': item.disabled}"
                        @click.stop="changeSelect(item.value, item.title)"
                    >{{item.title}}</li>
                    <li v-else
                        :value="item"
                        :key="item"
                        class="select-li"
                        :class="{'active': dataKey.val == item, 'disabled': item.disabled}"
                        @click.stop="changeSelect(item, item)"
                    >{{item}}</li>
                </template>
                <li
                    v-if="dataKey.hasManual"
                    class="select-li"
                    @click.stop="hanlderManual()"
                >{{dataKey.manualText}}</li>
            </ul>
        </transition>
        <div class="error-bottom text-error" v-if="dataKey.error">{{dataKey.error}}</div>
    </div>
</template>

<script>

import { isObject } from "./libs";

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
    created() {
        if(!Array.isArray(this.dataKey.sortArray)) {
            this.$set(this.dataKey, "sortArray", []);
        }

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
        defaults.val = defaults.val || defaults.defaultVal;

        this.dataKey = this.setOptions(this.dataKey, defaults);
    },
    data() {
        return {
            error: "",
            dropdownShow: false,
            firstChange: false,
            selectLabel: "",
            dataOption: {}
        };
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

            if(this.dataKey.beforeChange(value) === false) {
                return;
            }
            this.dataKey.error = '';
            this.dataKey.val = value;
            this.selectLabel = label;
            this.dataKey.changeCallBack(value);
        },
        showOption() {
            if(!this.dataKey.disabled) {
                this.dropdownShow = !this.dropdownShow;
            }
        },
        setInputValue() {
            var newVal,
                _this = this;
            this.dataKey.sortArray.forEach(function(item) {
                //当值存在于下拉列表时
                if (_this.dataKey.val == item.value) {
                    newVal = item.title;
                }
            });
            if (!newVal) {
                newVal = this.dataKey.val;
            }
            this.selectLabel = newVal;
        },

        /**
         * 失去焦点时，修改KEY值
         */
        setKeyValue() {
            var newVal,
                _this = this;

            this.dataKey.sortArray.forEach(function(item) {
                //当显示的文字存在于下拉列表时
                if(_this.selectLabel == item.value) {
                    _this.selectLabel = item.title;
                    newVal = item.value;
                } else if (_this.selectLabel == item.title) {
                    newVal = item.value;
                }
            });

            if (!newVal) {
                newVal = this.selectLabel;
            }

            this.dataKey.val = newVal;
        },

        changeValue() {
            //this.checkData(this.dataKey, this.selectLabel);
            this.dropdownShow = false;
            let isCheckTrue = this.check(this.dataKey);
        },
        hanlderManual() {
            this.$refs.input.focus();
            this.hide();
            this.dataKey.changeCallBack &&
                this.dataKey.changeCallBack(MANUAL_VALUE);
        },
        hide() {
            this.dropdownShow = false;
        },
        check(dataObj) {

            if(typeof this.$checkData == "function") {
                return this.$checkData(dataObj, this.selectLabel);
            }

            return true;
            
        }
    },
    destroyed() {
        //this.globalRemoveEvent("click", this.hide);
        this.dataKey.error = "";
    },
    watch: {
        "dataKey.val": {
            handler(newValue, oldValue) {
                if(newValue === undefined || newValue === "") {
                    return;
                }
                try {
                    this.setInputValue();
                } catch(e) {}
                if((this.dataKey.immediate !== false || this.firstChange == true) && !this.dataKey.hasManual) {
                    this.dataKey.changeCallBack && this.dataKey.changeCallBack(newValue);
                }
            },
            //立即执行
            immediate: true
        }
    }
};
</script>