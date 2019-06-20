<template>
    <div class="form-group" :class="css" v-show="show!==false">
        <label class="form-title" v-if="hasTitle">{{title}}</label>
        <div class="form-content">
	        <slot></slot>
        </div>
    </div>
</template>
<script>
import {isDefined} from "./libs.js";
export default {
    name: "v-group",
    props: ["css", "show", "title"],
    data() {
    	return  {
            hasTitle: true
        };
    },
    mounted() {
        if(isDefined(this.title)) {
            this.hasTitle = true;
        } else {
            this.hasTitle = false;
        }
    }
};
</script>
