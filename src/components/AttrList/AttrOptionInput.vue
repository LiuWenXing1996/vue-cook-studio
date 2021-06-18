<template>
    <el-input v-model="componentSelected.props[propKey]"></el-input>
</template>
<script lang="ts" setup>
import { defineProps } from "@vue/runtime-core";
import type { ComponentConfig } from "../../types/core";

defineProps<{ componentSelected: ComponentConfig, propKey: string }>()

</script>
<style lang="less" scoped>
</style>