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
    <div>组件-内联样式</div>
    <div>组件-属性</div>
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
const renderClassList = ref(componentConfig.value?.attrs?.render?.class)
watch(renderClassList, () => {
    const componentConfigValue = componentConfig.value
    componentConfigValue.attrs = componentConfigValue.attrs || {}
    componentConfigValue.attrs.render = componentConfigValue.attrs.render || {}
    componentConfigValue.attrs.render.class = renderClassList.value
})
watch(renderStyle, () => {
    const componentConfigValue = componentConfig.value
    componentConfigValue.attrs = componentConfigValue.attrs || {}
    componentConfigValue.attrs.render = componentConfigValue.attrs.render || {}
    let renderStyleObj: Record<string, string | number> = {};
    renderStyle.value.forEach(e => {
        renderStyleObj[e.key] = e.value
    })
    componentConfigValue.attrs.render.style = renderStyleObj
})
let ss = 1;

const addRenderClass = () => {
    const componentConfigValue = componentConfig.value
    componentConfigValue.attrs = componentConfigValue.attrs || {}
    componentConfigValue.attrs.render = componentConfigValue.attrs.render || {}
    componentConfigValue.attrs.render.class = componentConfigValue.attrs.render.class || []
    componentConfigValue.attrs.render.class.push("ssss" + (++ss))
}


const renderClassTableData = computed(() => {
    let classList = componentConfig.value.attrs?.render?.class || []
    return classList.map((e, i) => {
        return {
            key: i,
            name: e
        }
    })
})

const renderClassTableColumns = ref(
    [
        {
            title: '名字',
            key: 'name'
        },
        {
            title: '操作',
            key: 'actions',
            render(rowData: any) {
                return h(
                    NButton,
                    {
                        size: 'small',
                        onClick: () => {
                            if (componentConfig.value.attrs?.render?.class) {
                                let classList = componentConfig.value.attrs.render.class
                                componentConfig.value.attrs.render.class = classList.filter(e => e !== rowData.name)
                            }
                        }
                    },
                    { default: () => '删除' }
                )
            }
        }
    ]
)
</script>
<style lang="less">
</style>