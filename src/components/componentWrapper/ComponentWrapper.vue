<template>
    <div
        class="component-wrapper"
        :class="{ selected: selected, hovered: hovered, isEdit: isEdit, isSlot: isSlot }"
        @click="handleClick"
        @mouseover="handleMouseover"
        @mouseleave="handleMouseleave"
        @drop="handleDrop"
        @dragover="handleDragOver"
        @dragstart="handleDragStart"
        draggable="true"
        :data-uid="config.uid"
    >
        <component v-if="maker" :is="maker.component" v-bind="componentProps">
            <template v-for="slot in config.slots" v-slot:[slot.name]>
                <ComponentWrapper
                    :config="config"
                    :is-edit="isEdit"
                    :is-slot="true"
                    v-for="config in slot.value"
                ></ComponentWrapper>
            </template>
        </component>
        <div v-else>该组件的maker：{{ config.makerName, config.makerVersion }}没有找到</div>
    </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, ref, toRefs, watch } from "vue";
import type { Ref } from "vue"
import { useComponentHovered, useComponentSelected, useComponentDragged } from "./hooks";
import type { ComponentConfig } from "./types";
import { findMaker } from "../ComponentMakerList/utils";
import { getComponentPropsObject } from "./utils";

const props = defineProps(
    {
        config: {
            type: Object as () => ComponentConfig,
            required: true
        },
        isEdit: {
            type: Boolean,
            default: false
        },
        isSlot: {
            type: Boolean,
            default: false
        }
    }
)

const { isEdit, config, isSlot } = toRefs(props)
// @ts-ignore
const maker = computed(() => findMaker(config.value))
const selected = computed(() => componentSelected.value === config.value)
const hovered = computed(() => componentHovered.value === config.value)
const componentSelected = useComponentSelected()
const componentHovered = useComponentHovered()
const componentDragged = useComponentDragged()
const componentProps = computed(() => getComponentPropsObject(config.value))

const handleClick = (event: MouseEvent) => {
    if (!isEdit) {
        return
    }
    event.stopPropagation()
    if (selected.value) {
        componentSelected.value = undefined
    } else {
        componentSelected.value = config.value
    }
}

const handleMouseover = (event: MouseEvent) => {
    if (!isEdit) {
        return
    }
    event.stopPropagation()
    componentHovered.value = config.value
}

const handleMouseleave = (event: MouseEvent) => {
    if (!isEdit) {
        return
    }
    event.stopPropagation()
    if (componentHovered.value = config.value) {
        componentHovered.value = undefined
    }
}

const handleDragStart = (e: DragEvent) => {
    if (!(e.target instanceof HTMLElement)) {
        return;
    }
    if (!e?.target?.dataset?.uid) {
        return;
    }
    componentDragged.value = config.value
    e?.dataTransfer?.setData('uid', e?.target?.dataset?.uid)
}

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
    // if (componentDragged.value) {

    // } else {
    //     const index = e.dataTransfer?.getData('index')
    //     if (!index) { return }
    //     const componentMaker = useComponentMakerList().data.value[parseInt(index)]
    //     let componentConfig = useComponentConfigDefault(componentMaker)
    //     // TODO:属性设置默认值
    //     // TODO:先不考虑这种结构“fsfs.fsfs.fsfs”
    //     config.value.slots[0].value.push(componentConfig);
    // }
}
</script>
<style lang="less" scoped>
.component-wrapper {
    height: 100%;
    width: 100%;
    display: inline-block;
    position: relative;

    &.isEdit {
        &::before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 9999999999999999;
            box-sizing: border-box;
        }

        &.selected,
        &.hovered {
            &::before {
                cursor: move;
                border: solid 3px #409eff;
            }
        }
    }
}
</style>