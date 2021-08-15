<template>
    <div class="layout-wrapper">
        <n-layout position="absolute">
            <n-layout-header class="header" bordered>
                <operate-menu></operate-menu>
            </n-layout-header>
            <n-layout has-sider position="absolute" style="top: 64px; bottom: 0px;">
                <n-layout-sider bordered content-style="padding: 24px;">
                    <resource-panel></resource-panel>
                </n-layout-sider>
                <n-layout
                    content-style="padding: 24px;"
                >
                    <div class="grid-wrapper">
                        <operate-grid></operate-grid>
                    </div>
                    <ComponentConfigRender :config="componentConfig"></ComponentConfigRender>
                    <inspector-render></inspector-render>
                </n-layout>
            </n-layout>
        </n-layout>
    </div>
</template>
<script setup lang="ts">
import { NLayout, NLayoutSider, NLayoutHeader, NLayoutFooter } from "naive-ui"
import OperateMenu from "./OperateMenu.vue"
import OperateGrid from "./OperateGrid.vue"
import ResourcePanel from "./ResourcePanel.vue";
import InspectorRender from "./InspectorRender.vue";
import ComponentConfigRender from "./ComponentConfigRender.vue";
import type IComponentConfig from "../types/IComponentConfig";
import { toRefs } from "vue";
import useComponentDragged from "../hooks/useComponentDragged";
import useComponentMaker from "../hooks/useComponentMaker";
import getComponentConfigDefault from "../utils/getComponentConfigDefault";
import { getComponentInstanceFromElement } from "../utils/getComponentInstanceFromElement";
import { highlightComponent, unHighlight } from "../utils/highlightComponent";
const props = defineProps(
    {
        componentConfig: {
            type: Object as () => IComponentConfig,
            required: true
        }
    }
)

const { componentConfig } = toRefs(props)
const componentDragged = useComponentDragged()
const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    if (e?.dataTransfer?.dropEffect) {
        if (componentDragged.value) {
            e.dataTransfer.dropEffect = 'move'
        } else {
            e.dataTransfer.dropEffect = 'copy'
        }
    }
}

const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (componentDragged.value) {

    } else {
        const makerName = e.dataTransfer?.getData('name')
        const makerPackage = e.dataTransfer?.getData('package')
        if (!makerName || !makerPackage) {
            return;
        }
        const maker = useComponentMaker(makerName, makerPackage)
        if (!maker.value) {
            return;
        }
        const childComponentConfig = getComponentConfigDefault(maker.value);
        componentConfig.value.attrs = componentConfig.value.attrs || {};
        componentConfig.value.attrs.slots = componentConfig.value.attrs.slots || {};
        componentConfig.value.attrs.slots["default"] = componentConfig.value.attrs.slots["default"] || [];
        componentConfig.value.attrs.slots["default"].push(childComponentConfig)

        // if (!makerName) { return }
        // if (!makerVersion) { return }
        // const componentMaker = findMakerByNameAndVersion(makerName, makerVersion)
        // if (!componentMaker) { return }
        // let componentConfig = getComponentConfigDefault(componentMaker)
        // config.value.slots[0].value.push(componentConfig);
    }
}
const handleMouseover = (e: MouseEvent) => {
    e.stopPropagation()
    const s = getComponentInstanceFromElement(e.target)
    highlightComponent(s);
    console.log(s);
}

const handleMouseleave = (e: MouseEvent) => {
    e.stopPropagation()
    unHighlight()
}

</script>
<style lang="less" scoped>
.layout-wrapper {
    height: 100%;
    position: relative;
    .header {
        height: 64px;
        padding: 2px;
        padding-left: 10px;
        display: flex;
        align-items: center;
    }
    .grid-wrapper {
        position: absolute;
        width: calc(100% - 40px);
        height: calc(100% - 40px);
        top: 20px;
        left: 20px;
    }
}
</style>