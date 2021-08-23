<template>
    <div class="operate-panel">
        <div class="header">
            <operate-menu></operate-menu>
        </div>
        <div class="content">
            <div class="left">
                <resource-panel></resource-panel>
            </div>
            <div class="center">
                <div class="grid-wrapper">
                    <operate-grid></operate-grid>
                </div>
                <ComponentConfigRender :config="componentConfig" :is-edit="true"></ComponentConfigRender>
            </div>
            <div class="right">
                <editor-panel></editor-panel>
            </div>
        </div>
    </div>
    <LogicComposer></LogicComposer>
</template>
<script setup lang="ts">
import OperateMenu from "./OperateMenu.vue"
import OperateGrid from "./OperateGrid.vue"
import ResourcePanel from "./ResourcePanel.vue";
import LogicComposer from "./LogicComposer.vue"
import EditorPanel from "./EditorPanel.vue"
import ComponentConfigRender from "./ComponentConfigRender.vue";
import type IComponentConfig from "../types/IComponentConfig";
import { toRefs } from "vue";
import useComponentDragged from "../hooks/useComponentDragged";
import useComponentMaker from "../hooks/useComponentMaker";
import getComponentConfigDefault from "../utils/getComponentConfigDefault";
import { getComponentInstanceFromElement } from "../utils/getComponentInstanceFromElement";
import { highlightComponent, unHighlight } from "../utils/highlightComponent";
import useCompositionMaker from "../hooks/useCompositionMaker";
import getCompositionConfigDefault from "../utils/getCompositionConfigDefault";
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

const handleClick = () => {

}

</script>
<style lang="less" scoped>
.operate-panel {
    height: 100%;
    .header {
        height: 40px;
        padding: 2px;
        padding-left: 10px;
        display: flex;
        align-items: center;
        border-bottom: rgb(239, 239, 245) 1px solid;
    }
    .content {
        height: calc(100% - 40px);
        display: flex;
        .left {
            width: 200px;
            padding: 10px;
            border-right: rgb(239, 239, 245) 1px solid;
        }
        .center {
            width: calc(100% - 600px);
            position: relative;
            padding: 10px;
            .grid-wrapper {
                position: absolute;
                width: calc(100% - 20px);
                height: calc(100% - 20px);
                top: 10px;
                left: 10px;
            }
        }
        .right {
            width: 400px;
            padding: 10px;
            border-left: rgb(239, 239, 245) 1px solid;
        }
    }
}
</style>