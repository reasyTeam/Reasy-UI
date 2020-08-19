<template>
    <div class="dialog-wrapper" v-if="isShow">
        <div class="overlay" v-if="hasOverlay"></div>
        <div class="dialog">
            <div class="progress-content" :class="css">
                <div class="progress-title" v-if="title">{{title}}</div>
                <div class="progress-group">
                    <div class="progress-bar"
                        :style="{'text-align': textAlign}">
                        <div class="progress-percent"
                            :style="{'width': percenter + '%'}">
                            {{showPercentNumber ? percenter + '%' : ''}}
                        </div>
                    </div>
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "v-progress",
    props: {
        percent: {
            type: Number,
            default: 0
        },
        show: {
            type: Boolean,
            default: true
        },
        showPercentNumber: {
            type: Boolean,
            default: true
        },
        title: {
            type: String
        },
        css: {
            type: String
        },
        textAlign: {
            type: String,
            default: "center"
        }, 
        intervalTime: {
            type: Number,
        }, 
        callback: {
            type: Function,
            default: ()=> {}
        },
        hasOverlay: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            progressTimer: null,
            max: 100,
            isShow: false,
            percenter: this.percent|| 0
        };
    },
    methods: {
        update() {
            let _this = this;
            clearTimeout(this.progressTimer);
            this.progressTimer = setTimeout(function() {
                _this.update();
               
            }, this.intervalTime);
            _this.setPercent();
        },
        setPercent() {
            if(this.percenter >= this.max) {
                clearTimeout(this.progressTimer);
                this.percenter = this.max;
                this.callback();
                return;
            }
            this.percenter = this.percenter+1;
        }
    },
    watch: {
        show: {
            handler(newVal) {
                if(newVal) {
                    this.isShow = true;
                    this.$nextTick(function() {
                        this.percenter = this.percent || 0;
                        this.update();
                    });
                } else {
                    
                    this.percenter = this.max;
                    this.isShow = false;
                    clearTimeout(this.progressTimer);
                }
            }
        }
    },
    destroyed() {
        clearTimeout(this.progressTimer);
    }
};
</script>