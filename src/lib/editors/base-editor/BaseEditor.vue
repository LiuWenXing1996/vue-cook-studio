<template>
    <div>{{ componentConfig.uid }}</div>
    <div>渲染器</div>
    <div>渲染器-样式类</div>
    <n-dynamic-input v-model:value="renderClassList" placeholder="请输入样式类名" :min="0" />
    <div>渲染器-内联样式</div>
    <n-dynamic-input
        preset="pair"
        v-model:value="renderStyle"
        key-placeholder="css变量名"
        value-placeholder="css变量值"
    />
    <div>组件</div>
    <div>组件-样式类</div>
    <n-dynamic-input v-model:value="cmptClassList" placeholder="请输入样式类名" :min="0" />
    <div>组件-内联样式</div>
    <n-dynamic-input
        preset="pair"
        v-model:value="cmptStyle"
        key-placeholder="css变量名"
        value-placeholder="css变量值"
    />
    <div>组件-属性</div>
    <n-dynamic-input
        preset="pair"
        v-model:value="cmptProps"
        key-placeholder="props变量名"
        value-placeholder="props变量值"
    />
    <div>组件-插槽</div>
    <div>组件-事件</div>
</template>
<script setup lang="ts">
import type IComponentConfig from "../../types/IComponentConfig";
import { computed, h, ref, toRefs, watch } from "vue"
import { NButton, NDataTable, NDynamicInput, NSelect } from "naive-ui"

const props = defineProps({
    componentConfig: {
        type: Object as () => IComponentConfig,
        required: true
    }
})

const { componentConfig } = toRefs(props);
const renderStyle = ref(Object.entries(componentConfig.value?.attrs?.render?.style || {}).map(e => ({ key: e[0], value: e[1] })))
watch(renderStyle, () => {
    const componentConfigValue = componentConfig.value
    componentConfigValue.attrs = componentConfigValue.attrs || {}
    componentConfigValue.attrs.render = componentConfigValue.attrs.render || {}
    let styleObj: Record<string, string | number> = {};
    renderStyle.value.forEach(e => {
        styleObj[e.key] = e.value
    })
    componentConfigValue.attrs.render.style = styleObj
})
const renderClassList = ref(componentConfig.value?.attrs?.render?.class)
watch(renderClassList, () => {
    const componentConfigValue = componentConfig.value
    componentConfigValue.attrs = componentConfigValue.attrs || {}
    componentConfigValue.attrs.render = componentConfigValue.attrs.render || {}
    componentConfigValue.attrs.render.class = renderClassList.value
})
const cmptClassList = ref(componentConfig.value?.attrs?.class)
watch(cmptClassList, () => {
    const componentConfigValue = componentConfig.value
    componentConfigValue.attrs = componentConfigValue.attrs || {}
    componentConfigValue.attrs.class = cmptClassList.value
})
const cmptStyle = ref(Object.entries(componentConfig.value?.attrs?.render?.style || {}).map(e => ({ key: e[0], value: e[1] })))
watch(cmptStyle, () => {
    const componentConfigValue = componentConfig.value
    componentConfigValue.attrs = componentConfigValue.attrs || {}
    let styleObj: Record<string, string | number> = {};
    cmptStyle.value.forEach(e => {
        styleObj[e.key] = e.value
    })
    componentConfigValue.attrs.style = styleObj
})
const cmptProps = ref(Object.entries(componentConfig.value?.attrs?.props || {}).map(e => ({ key: e[0], value: e[1] })))
watch(cmptProps, () => {
    const componentConfigValue = componentConfig.value
    componentConfigValue.attrs = componentConfigValue.attrs || {}
    let propsObj: Record<string, string | number> = {};
    cmptProps.value.forEach(e => {
        propsObj[e.key] = e.value
    })
    componentConfigValue.attrs.props = propsObj
})

</script>
<style lang="less">
</style>