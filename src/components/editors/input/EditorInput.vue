<template>
    <el-row class="editor-input">
        <el-col :span="4">{{ config.default }}</el-col>
        <el-col :span="20">
            <el-input v-model="config.value"></el-input>
        </el-col>
    </el-row>
</template>
<script lang="ts" setup>
import { defineProps } from "@vue/runtime-core";
import type { EditorConfigInput } from "./editorConfigInput"

defineProps({
    config: {
        type: Object as () => EditorConfigInput,
        required: true
    }
})
</script>
<style lang="less" scoped>
</style>