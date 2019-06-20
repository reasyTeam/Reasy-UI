<template>
    <div class="form-swicth form-el-content" v-show="dataKey.show">
        <div class="form-slider" :class="dataKey.css">
            <div class="slider-content" :style="{'width': maxWidth + 'px'}">
                <div class="slider-percent" :style="{'width': left + 'px'}"></div>
            </div>
            <div
                class="slider-box"
                @mouseover.stop="bindEvent"
                @mousedown.stop="mouseStart"
                :style="{'left': left + 'px'}"
            ></div>
            <div class="slider-number">{{vText}}</div>
        </div>
    </div>
</template>

<script>

let defaults = {
    css: "",
    show: true, //是否显示
    val: "",
    min: 0,
    max: 100,
    immediate: true,
    disabled: false, //是否禁用
    changeCallBack: function() {}
};

export default {
    name: "v-slider",
    props: ["dataKey"],
    data() {
        return {
            perNum: 0, //每次最少移动
            maxWidth: 200,
            startX: 0,
            endX: 0,
            percent: 0,
            vText: 0,
            left: 0,
            lastLeft: 0,
            moveStart: false
        };
    },
    created() {
        this.dataKey = this.setOptions(this.dataKey, defaults);
        this.perNum = this.maxWidth / (this.dataKey.max - this.dataKey.min);
        this.vText = this.dataKey.val;
        this.left = this.perNum * (this.dataKey.val - this.dataKey.min);
    },
    methods: {
        bindEvent() {
            window.addEventListener("mousemove", this.mouseMove, false);
            window.addEventListener("mouseup", this.mouseUp, false);
        },
        mouseStart(e) {
            if(this.dataKey.disabled) {
                return;
            }
            this.startX = e.pageX;
            this.lastLeft = this.left;
            this.moveStart = true;
            //document.body.addClass("no-select");
        },
        mouseMove(e) {
            if (this.moveStart) {
                
                this.endX = e.pageX;
                this.left = this.lastLeft + this.endX - this.startX;
                if (this.left < 0) {
                    this.left = 0;
                }

                if(this.left > this.maxWidth) {
                    this.left = this.maxWidth;
                }

                this.vText = Math.round(Number(this.dataKey.min) + this.left / this.perNum);
            }
        },
        mouseUp(e) {
            this.moveStart = false;
            window.removeEventListener("mousemove", this.mouseMove);
            window.removeEventListener("mouseup", this.mouseUp);
            //document.body.removeClass("no-select");
            this.dataKey.val = this.vText;
        }
    },
    watch: {
        "dataKey.val": {
            handler(newValue, oldValue) {
                this.perNum = this.maxWidth / (this.dataKey.max - this.dataKey.min);
                if(newValue < this.dataKey.min) {
                    this.vText = this.dataKey.min;
                }
                this.vText = this.dataKey.val;
                this.left = this.perNum * (this.vText - this.dataKey.min);
                if(this.dataKey.immediate) {
                   this.dataKey.changeCallBack && this.dataKey.changeCallBack(newValue);
                }
            }
        },
        immediate: true
    },
    destroyed() {
        window.removeEventListener("mousemove", this.mouseMove);
        window.removeEventListener("mouseup", this.mouseUp);
    }
};
</script>