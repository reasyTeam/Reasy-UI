<template>
    <div
        class="form-el-content form-input"
        :class="{'error-group': dataKey.error, [dataKey.css]: true}"
        v-show="dataKey.show"
    >
        <div
            class="col-content"
            :class="{'disabled': dataKey.disabled, 'focus': isFocus }"
            :name="dataKey.name"
        >
            <span
                class="col-group"
                :style="{'width': 100 / inputList.length + '%'}"
                v-for="(item, index) in inputList"
                :key="item"
            >
                <input
                    type="text"
                    :disabled="dataKey.disabled"
                    class="text"
                    :value="inputVal[index]"
                    :data-index="index"
                    :maxlength="dataKey.maxlength"
                    @focus="isFocus=true"
                    @blur="isFocus=false"
                    @keydown="handlerKeyDown"
                    @keyup.stop="handlerKeyUp"
                    ref="input"
                />
                <div class="col-splitter" v-if="index != (inputList.length -1)">{{dataKey.splitter}}</div>
            </span>
        </div>
        <div class="error-bottom text-error" v-if="dataKey.error">{{dataKey.error}}</div>
    </div>
</template>

<script>
let defaults = {
    required: true,
    css: "", //样式
    show: true, //是否显示
    ignore: false, //是否忽略
    disabled: false, //是否禁用
    name: "",
    val: "", //组件value
    error: "", //错误标志
    column: 4, //输入框个数
    maxlength: 3,
    splitter: ".",
    allow: "0-9",
    valid: [
        /*{
            type: "ssid",
            args: [1, 2]
        }*/
    ],

    changeCallBack: function() {}
};

export default {
    name: "v-column",
    props: ["data-key"],
    created() {
        this.dataKey = this.setOptions(this.dataKey, defaults);
    },
    computed: {
        inputList() {
            let len = this.dataKey.column,
                i = 0,
                itemArr = [];
            for (; i < len; i++) {
                itemArr.push(String(i + 1));
            }

            return itemArr;
        },
        inputVal() {
            return this.dataKey.val.split(this.dataKey.splitter);
        }
    },
    mounted() {},
    data() {
        return {
            isFocus: false,
            clickIndex: 0,
            eventKeyDown: false
        };
    },

    methods: {
        handlerKeyDown(event) {
            let val = event.target.value,
                index = Number(event.target.getAttribute("data-index")),
                keyVal = event.char || event.key,
                keyCode = event.keyCode,
                maxIndex = this.inputList.length - 1,
                position;

            if (keyCode === 8) {
                if (!this.eventKeyDown) {
                    this.eventKeyDown = true;
                    this.clickIndex = index;
                }
                position = getCursorPos(event.target); //光标位置
                if (position === 0) {
                    event.target.value = "";
                }
                this.setValue();
            } else if (keyCode == 39 || keyCode == 40) {
                //右 或者下
                position = getCursorPos(event.target); //光标位置
                if (position === event.target.value.length) {
                    if (index !== maxIndex) {
                        this.$refs.input[index + 1].focus();
                        event.preventDefault();
                        return;
                    }
                }
            } else if (keyCode == 37 || keyCode == 38) {
                position = getCursorPos(event.target); //光标位置
                if (position === 0) {
                    if (index !== 0) {
                        this.$refs.input[index - 1].focus();
                        event.preventDefault();
                        return;
                    }
                }
            }
            //回退
            if (keyCode === 8 && val === "") {
                index != 0 && this.$refs.input[index - 1].focus();
                event.preventDefault();
                return;
            }
            if (keyVal === this.dataKey.splitter) {
                event.preventDefault();
            }
        },

        handlerKeyUp(event) {
            let val,
                index = Number(event.target.getAttribute("data-index")),
                keyVal = event.char || event.key,
                regStr = this.dataKey.allow,
                reg = new RegExp("[" + regStr + "]", "gi"),
                illegalReg = new RegExp("[^" + regStr + "]", "gi"),
                keyupTime = new Date().getTime(),
                keyCode = event.keyCode,
                position,
                maxIndex = this.inputList.length - 1;
            if(keyCode >=37 && keyCode <= 40) { //方向键
                return;
            }
            if (keyCode === 8) {
                this.eventKeyDown = false;
                if (this.clickIndex > index) {
                    for (let i = this.clickIndex; i > index; i--) {
                        this.$refs.input[i].value = "";
                    }
                }
                position = getCursorPos(event.target); //光标位置
                if (position === 0) {
                    event.target.value = "";
                }
                this.setValue();
                return;
            }

            //只取前几个数据
            val = event.target.value = event.target.value
                .replace(illegalReg, "")
                .slice(0, this.dataKey.maxlength);

            //当输入值是分隔符或者是允许输入的数据时
            if (reg.test(keyVal) || keyVal === this.dataKey.splitter) {
                //非最后一个输入框
                if (index !== maxIndex) {
                    //当输入值是分隔符并且当前输入框值不是空  或者 当前值长度等于允许输入的最大长度
                    if (
                        (keyVal === this.dataKey.splitter && val !== "") ||
                        val.length === this.dataKey.maxlength
                    ) {
                        //选中下一个输入框
                        this.$refs.input[index + 1].setSelectionRange(0, -1);
                        this.$refs.input[index + 1].focus();
                    }
                }
            }

            this.setValue();
        },

        setValue() {
            let arr = [],
                isNotNull = false;
            this.$refs.input.forEach(elem => {
                if(elem.value != "") {
                    isNotNull = true;
                }
                arr.push(elem.value);
            });
            this.dataKey.val = isNotNull ? arr.join(this.dataKey.splitter) : "";
            this.check(this.dataKey);
        },

        check(dataObj) {
            if (typeof this.$checkData == "function") {
                return this.$checkData(dataObj);
            }

            return true;
        }
    },
    watch: {
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
    },
    destroyed() {
        this.dataKey.error = "";
    }
};

function getCursorPos(ctrl) {
    var Sel,
        doc = document,
        CaretPos = 0;
    //IE Support
    if (doc.selection) {
        ctrl.focus();
        Sel = doc.selection.createRange();
        Sel.moveStart("character", -ctrl.value.length);
        CaretPos = Sel.text.length;
    } else if (ctrl.selectionStart || parseInt(ctrl.selectionStart, 10) === 0) {
        CaretPos = ctrl.selectionStart;
    }
    return CaretPos;
}
</script>