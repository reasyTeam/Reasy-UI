<template>
    <div >
        <div class="overlay" v-if="dialog.show"></div>
        <transition name="pop-fade">
            <v-elem class="dialog" v-if="dialog.show">
                <div class="dialog-container" :class="dialog.css">
                    <div class="dialog-content" v-clickoutside="handlerOutSide">
                        <div class="dialog-title">
                            <span>{{dialog.title}}</span>
                            <span class="dialog-close v-icon-close" @click="handlerCancel()"></span>
                        </div>
                        <div class="content">
                            <slot></slot>
                        </div>
                        <div
                            class="btn-group"
                            v-if="dialog.hasCancel !== false || dialog.hasOK !== false"
                        >
                            <v-button
                                v-if="dialog.hasCancel !== false"
                                :callback="handlerCancel"
                                :title="dialog.cancelText"
                            ></v-button>
                            <v-button
                                v-if="dialog.hasOK !== false"
                                :callback="handlerOK"
                                css="btn-primary"
                                :title="dialog.okText"
                            ></v-button>
                        </div>
                    </div>
                </div>
            </v-elem>
        </transition>
    </div>
</template>

<script>
let defaults = {
    css: "", //样式
    title: "",
    hasOK: true,
    hasCancel: true,
    outside: true, //点击外面是否隐藏
    autoHide: true, //保存是否自动隐藏
    okText: _("Confirm"),
    cancelText: _("Cancel"),
    show: true, //是否显示
    okCallBack: function() {},
    cancelCallBack: function() {}
};

export default {
    name: "v-dialog",
    props: ["dialog"],
    data() {
        return {};
    },
    created() {
        //TODO: 数据转换
        this.dialog = this.setOptions(this.dialog, defaults);
    },
    mounted() {},
    methods: {
        handlerOutSide() {
            if(this.dialog.outside === false) {
                return;
            }
            this.handlerCancel();
        },
        handlerCancel() {
            this.dialog.show = false;
        },
        handlerOK() {
            if (this.dialog.okCallBack() === false || this.dialog.autoHide === false) {
                return;
            }
            this.handlerCancel();
        }
    }
};
</script>