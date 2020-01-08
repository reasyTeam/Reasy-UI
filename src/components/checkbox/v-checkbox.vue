<template>
    <div
        class="form-el-content form-el-checkbox"
        v-show="dataKey.show"
        :class="{'error-group': dataKey.error}"
    >
        <template v-if="dataKey.hasSelectAll">
            <input type="checkbox" ref="v-checkbox-all" v-show="false" :checked="selectedAll">
            <label
                class="form-checkbox"
                :class="{'disabled': dataKey.disabled}"
                @click.stop="changeSelectedAll()"
                :name="dataKey.name"
                v-manualevent="evtHandlerList"
                :evt-name="evtName"
            >
                <span
                    class="checkbox-item"
                    :class="selectedAll ? 'v-icon-checkbox-checked' : 'v-icon-checkbox-unchecked'"
                ></span>
                <span class="checkbox-text">{{ _("Select All") }}</span>
            </label>
        </template>
        <template v-for="(item, index) in dataKey.sortArray">
            <input
                type="checkbox"
                ref="v-checkbox"
                :value="item.value"
                v-show="false"
                :checked="getChecked(item.value, index)"
                :key="item.key"
            >
            <label
                class="form-checkbox"
                :class="{'disabled': item.disabled || dataKey.disabled}"
                @click.stop="changeCheckbox(index, item)"
                v-manualevent="evtHandlerList"
                :evt-name="evtName"
                :data-index="index"
                :key="item.key"
                :name="dataKey.name"
            >
                <span
                    class="checkbox-item"
                    :class="getChecked(item.value, index) ? 'v-icon-checkbox-checked' : 'v-icon-checkbox-unchecked'"
                ></span>
                <span class="checkbox-text">{{item.title}}</span>
            </label>
        </template>
        <div class="error-bottom text-error" v-if="dataKey.error">{{dataKey.error}}</div>
    </div>
</template>

<script>
import { isDefined } from "../libs";
import addEvent from "../add-event";

let defaults = {
    required: false,
    css: "", //样式
    show: true, //是否显示
    ignore: false, //是否忽略
    disabled: false, //是否禁用
    val: "", //组件id
    values: [true, false], //选中和不选中 默认用options的数据
    error: "",
    hasSelectAll: false, //是否有全选  组存在
    immediate: true,
    sortArray: [
        /*{
        title: "",
        value: "",
        disabled: ""
    }*/
    ],
    changeCallBack: function() {}
};

export default {
    name: "v-checkbox",
    props: ["dataKey"],
    mixins: [addEvent],
    computed: {
        disabledList() {
            return this.dataKey.sortArray.filter(item => item.disabled);
        }
    },
    created() {
        if (this.dataKey.sortArray.length <= 1) {
            this.groups = false;
        } else {
            this.groups = true;
            defaults.val = [];
        }
        this.dataKey = this.setOptions(this.dataKey, defaults);
        this.checkedVal = isDefined(this.dataKey.sortArray[0].value)
                ? this.dataKey.sortArray[0].value
                : this.dataKey.values[0];
        this.addEvent();
    },
    data() {
        return {
            firstChange: false,
            selectedAll: false,
            groups: false,
            checkedVal: ""
        };
    },
    methods: {
        changeCheckbox(index, item) {
            var valArr = [],
                checkedVal,
                _this = this;

            
            if (this.dataKey.disabled === true || item.disabled) {
                return;
            }
            this.firstChange = true;
            if (!this.groups) {
                if(this.dataKey.val === this.checkedVal) {
                    this.dataKey.val = this.dataKey.values[1]
                } else {
                    this.dataKey.val = this.checkedVal;
                }
            } else {
                //组
                if (this.$refs["v-checkbox"][index].checked) {
                    //选中的时候过滤此值
                    this.dataKey.val = this.dataKey.val.filter(
                        item2 => item2 !== item.value
                    );
                } else {
                    this.dataKey.val.push(item.value);
                }
                this.$refs["v-checkbox"][index].checked = !this.$refs[
                    "v-checkbox"
                ][index].checked;
            }
        },
        changeSelectedAll() {
            if (this.dataKey.disabled === true) {
                return;
            }
            this.firstChange = true;
            this.selectedAll = !this.selectedAll;
            var valArr = [];
            if (this.selectedAll) {
                this.dataKey.sortArray.forEach(item => {
                    if(!item.disabled) {
                        valArr.push(item.value);
                    }
                });
                this.dataKey.val = valArr;
            } else {
                this.dataKey.val = [];
            }
        },
        getChecked(value, index) {
            if (!this.groups) {
                if (this.dataKey.val === this.checkedVal) {
                    return true;
                }
                return false;
            }

            if (!Array.isArray(this.dataKey.val)) {
                return false;
            }

            return this.dataKey.val.indexOf(value) !== -1;
        }
    },
    watch: {
        "dataKey.val": {
            handler(newValue, oldValue) {
                let disableLen = this.disabledList.length;
                //全选
                if (
                    newValue &&
                    newValue.length === this.dataKey.sortArray.length - disableLen
                ) {
                    this.selectedAll = true;
                } else {
                    this.selectedAll = false;
                }
                if (this.dataKey.immediate || this.firstChange) {
                    this.dataKey.changeCallBack(newValue);
                }
            },
            //立即执行
            immediate: true
        }
    }
};
</script>