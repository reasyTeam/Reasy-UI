<template>
    <div
        class="form-el-content form-input"
        :class="{'error-group': dataKey.error, [dataKey.css]: true}"
        v-show="dataKey.show"
    >
        <div class="col-content" :class="dataKey.disabled ? 'disabled' : ''" :name="dataKey.name">
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
                    @keydown="handlerKeyDown"
                    @keyup.stop="handlerKeyUp"
                    ref="input"
                >
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
        return {};
    },

    methods: {
        handlerKeyDown(event) {
            let val = event.target.value,
                index = Number(event.target.getAttribute("data-index")),
                keyVal = event.key;
            this.eventPrevent = false;
            //回退
            if (event.keyCode === 8 && val === "") {
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
                keyVal = event.key,
                regStr = this.dataKey.allow,
                reg = new RegExp("[" + regStr + "]", "gi"),
                illegalReg = new RegExp("[^" + regStr + "]", "gi");
            if (event.keyCode === 8) {
                this.setValue();
                return;
            }

            //只取前几个数据
            val = event.target.value = event.target.value.replace(illegalReg, "").split(0, this.dataKey.maxlength)[0];
            
            //当输入值是分隔符或者是允许输入的数据时
            if (reg.test(keyVal) || keyVal === this.dataKey.splitter) {
                //非最后一个输入框
                if (index !== this.inputList.length - 1) {
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
            let arr = [];
            this.$refs.input.forEach(elem => {
                arr.push(elem.value);
            });

            this.dataKey.val = arr.join(this.dataKey.splitter);
            this.check(this.dataKey);
        },

        check(dataObj) {
            if (typeof this.$checkData == "function") {
                return this.$checkData(dataObj);
            }

            return true;
        }
    },
    destroyed() {
        this.dataKey.error = "";
    }
};
</script>