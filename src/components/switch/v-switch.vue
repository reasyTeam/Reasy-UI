<template>
    <div class="form-switch form-el-content clearfix" v-show="dataKey.show">
        <div
            class="switch-item"
            :name="dataKey.name"
            @click="setCheckbox()"
            :class="checked ? 'checked' : ''"
            v-manualevent="evtHandlerList"
            :evt-name="evtName"
        ></div>
        <span class="switch-tips" v-show="dataKey.hasTips">{{tips}}</span>
    </div>
</template>

<script>
import { isDefined } from "../libs";
import addEvent from "../add-event";
let defaults = {
    css: "", //样式
    show: true, //是否显示
    disabled: false, //是否禁用
    val: "", //组件id
    immediate: true,
    name: "",
    values: [true, false],
    error: "",
    hasTips: false,
    title: "", //描述
    changeCallBack: function() {},
    beforeChange: function() {}
};

export default {
    name: "v-switch",
    props: ["dataKey"],
    mixins: [addEvent],
    created() {
        this.dataKey = this.setOptions(this.dataKey, defaults);
        this.addEvent();
    },
    data() {
        return {
            firstChange: false
        };
    },
    computed: {
        checked() {
            return this.dataKey.val === this.dataKey.values[0];
        },
        tips() {
            return this.checked ? _("Enable") : _("Disable");
        }
    },
    mounted() {},
    methods: {
        setCheckbox() {
            if (this.dataKey.disabled) {
                return;
            }

            this.firstChange = true;
            if (this.dataKey.beforeChange() === false) {
                return;
            }

            this.dataKey.val = !this.checked
                ? this.dataKey.values[0]
                : this.dataKey.values[1];
        }
    },
    watch: {
        "dataKey.val": {
            handler(newValue, oldValue) {
                
                if (!isDefined(newValue) || newValue === "") {
                    this.dataKey.val = Array.isArray(this.dataKey.values)
                        ? this.dataKey.values[1]
                        : defaults.values[1];
                    return;
                }

                if (this.dataKey.immediate || this.firstChange) {
                    this.dataKey.changeCallBack(this.dataKey.val);
                }
            },
            immediate: true
        }
    }
};
</script>