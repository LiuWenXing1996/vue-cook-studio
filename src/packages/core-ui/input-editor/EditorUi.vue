<template>
    <el-row class="editor-input">
        <el-col :span="4">{{ config.label }}</el-col>
        <el-col :span="20">
            <el-input v-model="valueChangeable"></el-input>
        </el-col>
    </el-row>
</template>
<script lang="ts" setup>
import { defineProps, ref, toRefs, watch } from "vue";
import type { ComponentConfig } from "../../../components/ComponentWrapper/types";
import type { EditorConfig } from "../../../components/Editor/types";

const props = defineProps({
    config: {
        type: Object as () => EditorConfig,
        required: true
    },
    componentConfig: {
        type: Object as () => ComponentConfig,
        required: true
    },
    value: {
        type: String,
        required: true
    }
})

const emits = defineEmits(["change"])


const { config, componentConfig, value } = toRefs(props)
const valueChangeable = ref(value.value);
watch(valueChangeable, (newValue) => {
    emits("change", newValue)
})

// const value = ref(componentConfig.value.props[config.value.key])
// const handleChange = (value) => {

// }

</script>
<style lang="less" scoped>
</style>