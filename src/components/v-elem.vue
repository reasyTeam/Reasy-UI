<template>
    <div ref="elem" v-if="show!==false">
    	<template >
        	<slot></slot>
        </template>
    </div>
</template>

<script>
/**
 * 翻译组件
 * 包裹翻译的区域
 * 如遇v-if 则需要给此节点单独v-if
 */
export default {
	"name": "v-elem",
	crated() {

	},
	props: ["show"],
	data() {
		return {

		};
	},
    mounted() {
    	this.translate();
    },
    methods: {
    	translate() {
			B.translate(this.$refs.elem);
			this.$refs.elem.setAttribute("data-translated", true);
    	}
    }
};
</script>