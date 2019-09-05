<template>
    <transition name="fade">
        
        <v-dialog :dialog="alert">
            <slot></slot>
        </v-dialog>

    </transition>
</template>

<script>
let defaults = {
    required: false,
    css: "", //样式
    title: _("Tips"),
    hasCancel: false,
    show: false, //是否显示
    ignore: true, //是否忽略
    okCallBack: function() {}
};

export default {
    name: "v-alert",
    props: ["alert"],
    data() {
        return {};
    },
    created() {
        this.alert = this.setOptions(this.alert, defaults, true);
    }
};
</script>