<template>
    <div>
        <div class="overlay" v-if="hasOverlay"></div>
        <div class="dialog">
            <div class="progress-content" :class="css">
                <div class="progress-title" v-if="title">{{title}}</div>
                <div class="progress-group">
                    <div class="progress-bar"
                        :style="{'text-align': textAlign}">
                        <div class="progress-percent"
                            :style="{'width': percenter + '%'}">
                            {{percenter + '%'}}
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
            percenter: this.percent|| 0
        };
    },
    mounted() {

        clearTimeout(this.progressTimer);
        if(this.intervalTime > 0) {
            this.update();
        }
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
    destroyed() {
        clearTimeout(this.progressTimer);
    }
};
</script>