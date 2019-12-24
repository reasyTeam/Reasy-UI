<template>
	<transition>
	    <div ref="tooltip" v-if="parseHtml" v-html="content" class="el-tooltip" v-show="show && content" :style="{'left': left + 'px', 'top': top + 'px'}">
	    	
	    </div>

		<div ref="tooltip" v-else class="el-tooltip" v-show="show && content" :style="{'left': left + 'px', 'top': top + 'px', 'max-width': width + 'px'}">
	    	{{content}}
	    </div>
    </transition>
</template>
<script>

	export default {
		data() {
			return {
				parseHtml: false,
				content: "",
				left: 0,
				top: 0,
				width: 200,
				show: false,
				relativeWidth: 0,
				relativeHeight: 0
			};
		},
		methods: {
			updatePosition() {

				this.$nextTick(function() {
					let clientRect = this.$refs.tooltip.getBoundingClientRect(),
						bodyWidth = document.body.clientWidth,
						bodyHeight = document.body.clientHeight;
						
					this.top = this.top + 10;
					this.left = this.left + 10;
					//当右边超出屏幕宽度时
					if(clientRect.right > bodyWidth) {
						this.left = this.left - this.$refs.tooltip.offsetWidth - 10;
					}
					
					//当下方超出屏幕高度时
					if(clientRect.bottom > bodyHeight) {
						//当前高度 - 自身高度 - 元素高度 - 30
						this.top = this.top - this.relativeHeight - this.$refs.tooltip.offsetWidth - 30;
					}
				});
				
			}
		},
        wathch: {
			"show": {
				handler(newValue, oldValue) {
					if(newValue === true) {
						this.updatePosition();
					}
				}
			}
		},
		destroyed() {

		}
    };
</script>