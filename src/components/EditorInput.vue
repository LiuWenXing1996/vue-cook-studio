<template>
    <el-row class="editor-input">
        <el-col :span="4">{{ config.label }}</el-col>
        <el-col :span="20">
            <el-input v-model="prop.value"></el-input>
        </el-col>
    </el-row>
</template>
<script lang="ts" setup>
import { defineProps } from "@vue/runtime-core";
import type { EditorConfig, ComponentProp } from "../types/core"



defineProps({
    config: {
        type: Object as () => EditorConfig,
        required: true
    },
    prop: {
        type: Object as () => ComponentProp,
        required: true
    }
})
</script>
<style lang="less" scoped>
</style>