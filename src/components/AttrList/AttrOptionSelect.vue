<template>
    <el-select v-model="propOptionEdited.value" placeholder="请选择">
        <el-option
            v-for="item in propOption.selectOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        ></el-option>
    </el-select>
</template>
<script lang="ts" setup>
import { defineProps } from "@vue/runtime-core";
import { toRefs } from "vue";
import type { ComponentConfig, ComponentPropOptionEdited, ComponentPropOptionSelect } from "../../types/core";

const props = defineProps<{ componentSelected: ComponentConfig, propKey: string }>()
const { componentSelected, propKey } = toRefs(props)

const propOptionEdited = componentSelected.value.propOptionEditedList.find(e => e.key === propKey.value) as ComponentPropOptionEdited
const propOption = componentSelected.value.maker.propOptions.find(e => e.key === propKey.value) as ComponentPropOptionSelect


</script>
<style lang="less" scoped>
</style>