<template>
    <div class="form-swicth form-el-content" v-show="dataKey.show">
        <span
            class="switch-item"
            :name="dataKey.name"
            @click="setCheckbox()"
            :class="checked ? 'checked' : ''"
        ></span>
        <span>{{dataKey.title}}</span>
    </div>
</template>

<script>

import {isDefined} from "./libs";

let defaults = {
    css: "", //样式
    show: true, //是否显示
    disabled: false, //是否禁用
    val: "", //组件id
    immediate: true,
    name: "",
    values: [true, false],
    title: "", //描述
    changeCallBack: function() {},
    beforeChange: function() {}
};

export default {
    name: "v-switch",
    props: ["dataKey"],
    created() {
        this.dataKey = this.setOptions(this.dataKey, defaults);
    },
    data() {
        return {
            firstChange: false
        };
    },
    computed: {
        checked() {
            return this.dataKey.val === this.dataKey.values[0];
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