<template>
    <div class="attr-list" v-if="componentSelected">
        <el-row v-for="propEditable in propEditableList">
            <el-col :span="4">{{ propEditable.name }}</el-col>
            <el-col :span="20">
                <el-input v-model="propEditable.value"></el-input>
            </el-col>
        </el-row>
    </div>
</template>
<script lang="ts" setup>
import { reactive, watch, watchEffect } from "vue";
import type { Ref } from "vue";
import useComponentMaker from "../../hooks/useComponentMaker";
import useComponentSelected from "../../hooks/useComponentSelected";
import type { ComponentConfig, ComponentMaker } from "../../types/core";

const componentSelected = useComponentSelected() as Ref<ComponentConfig>
const maker = useComponentMaker(componentSelected.value) as ComponentMaker
// 使用maker的propOptions似乎更合适一些
const propEditableList = reactive(maker.propOptions.map(propOption => {
    return {
        name: propOption.name,
        value: componentSelected.value.props.find(prop => prop.name === propOption.name)?.value
    }
}))

watch(() => propEditableList, (newValue, oldValue) => {
    let config = componentSelected.value;
    newValue.forEach(e => {
        const componentProp = config.props.find(p => p.name === e.name)
        if (componentProp) {
            componentProp.value = e.value as string
        }
    })
    // componentSelected.value = config;
}, { deep: true })
const { propOptions } = maker
const componentProps = componentSelected.value.props;
const getProp = (name: string) => {
    return componentProps.find(e => e.value === name) || {}
}

</script>
<style lang="less" scoped>
.attr-list {
    overflow: auto;
    padding: 20px;
    padding-top: 0;
    height: 100%;
}
</style>