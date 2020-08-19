<template>
    <div class="select-box">
        <div class="form-el-content form-el-checkbox">
            <label class="form-checkbox" :class="{'disabled': !hasCheckbox}">
                <span
                    class="checkbox-item"
                    @click.stop="changeBack"
                    :class="rowData.selected == '1' ? 'v-icon-checkbox-checked': 'v-icon-checkbox-unchecked'"
                ></span>
                <!-- <span class="checkbox-text"></span> -->
            </label>
        </div>
    </div>
</template>
<script>
export default {
    name: "table-checkbox",
    props: ["rowData", "field", "index", "tableData", "originData"],
    data() {
        return {
            selected: this.rowData.selected == "1"
        };
    },
    computed: {
        hasCheckbox() {
            return this.rowData.hasCheckbox !== false;
        }
    },
    methods: {
        changeBack() {
            if (!this.hasCheckbox) {
                this.rowData.selected = 0;
                return;
            }
            let selected = this.rowData.selected == "1" ? "0" : "1";
            this.$set(this.rowData, this.field, selected);
            let params = {
                type: "checkbox",
                index: this.index,
                rowData: this.rowData,
                originData: this.originData
            };
            this.$emit("on-custom-comp", params);
        }
    }
};
</script>


