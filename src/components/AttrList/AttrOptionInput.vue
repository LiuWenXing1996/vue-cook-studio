<template>
    <el-input v-model="propOptionEdited.value"></el-input>
</template>
<script lang="ts" setup>
import { defineProps, toRefs } from "@vue/runtime-core";
import type { ComponentConfig, ComponentPropOptionEdited, ComponentPropOptionInput } from "../../types/core";

const props = defineProps<{ componentSelected: ComponentConfig, propKey: string }>()
const { componentSelected, propKey } = toRefs(props)

const propOptionEdited = componentSelected.value.propOptionEditedList.find(e => e.key === propKey.value) as ComponentPropOptionEdited

</script>
<style lang="less" scoped>
</style>