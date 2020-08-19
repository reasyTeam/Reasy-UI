<template>
    <div class="button-item" :class="title ? 'btn-title' : ''" v-if="show !== false">
        <button
            :name="name"
            class="btn"
            type="button"
            :class="{[css]: css, 'disabled': disabled}"
            @click.stop="clickCallBack()"
            ref="button"
        >
            <span v-if="title">{{title}}</span>
        </button>
    </div>
</template>

<script>
export default {
    name: "v-button",
    props: ["title", "css", "callback", "show", "disabled", "name"],
    created() {},
    data() {
        return {};
    },
    methods: {
        clickCallBack() {
            this.$refs.button.blur();
            if (this.disabled === true) {
                return;
            }
            if (typeof this.callback == "function") {
                this.callback(arguments);
            } else {
                this.$emit("callback");
            }
        }
    }
};
</script>