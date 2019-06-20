<template>
    <v-column :data-key="dataKey"></v-column>
</template>
<script>
let defaults = {
    column: 6, //输入框个数
    maxlength: 2, //输入框最大输入长度
    splitter: ":", //分隔符
    allow: "0-9a-f" //允许字符
};
export default {
    "name": "v-mac",
    props: ["data-key"],
    created() {
        this.dataKey = this.setOptions(this.dataKey, defaults, true);
    }
};
</script>
>