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
        {{ isSlot }}
        <component :is="config.maker.component" v-bind="componentProps">
            <template v-for="(item,index) in componentProps?.slots" v-slot:[item.name]>
                <ComponentRender :config="item.config" :is-edit="isEdit" :is-slot="true"></ComponentRender>
            </template>
        </component>
    </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, ref, toRefs, useContext } from "vue";
import type { PropType } from "vue"
import useComponentHovered from "../hooks/useComponentHovered";
import useComponentPropEditedList from "../hooks/useComponentPropEditedList";
import useComponentSelected from "../hooks/useComponentSelected";
import type { ComponentConfig } from "../types/core"
import useComponentDragged from "../hooks/useComponentDragged";
import useComponentData from "../hooks/useComponentData";
import useComponentMakerList from "../hooks/useComponentMakerList";
import useComponentMakerDefault from "../hooks/useComponentMakerDefault";


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
// 控制组件包裹器的拖拽事件，达到插槽也可以拖拽放入组件的目的
// editor 有可能会变成一个巨大的包含无数个slot的组件？
// 编辑模式显示虚线边框？

const { isEdit, config, isSlot } = toRefs(props);

const selected = computed(() => componentSelected.value === config.value)
const hovered = computed(() => componentHovered.value === config.value)
const componentSelected = useComponentSelected()
const componentHovered = useComponentHovered()
const componentDragged = useComponentDragged()

const componentProps = computed(() => useComponentPropEditedList(config.value))

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
    if (componentDragged.value) {
        const uid = e.dataTransfer?.getData('index')
        if (!uid) { return }
        let targetConfig;
        // 递归查找
        const componentData = useComponentData().value;
        function find(config: ComponentConfig) {
            if (config.uid === uid) {
                targetConfig = config
                return
            } else {
                const componentProps = computed(() => useComponentPropEditedList(config))
                if (componentProps.value?.slots) {
                    let slots = componentProps.value?.slots as any[]
                    slots.forEach(e => {
                        find(e.config)
                    })
                }
            }
        }
        componentData.forEach(e => find(e))
        if(targetConfig){
            // TODO:需要更改它的父节点
        }
    } else {
        const index = e.dataTransfer?.getData('index')
        if (!index) { return }
        const componentMaker = useComponentMakerList().value[parseInt(index)]
        let componentConfig = useComponentMakerDefault(componentMaker)
        // TODO:属性设置默认值
        // TODO:先不考虑这种结构“fsfs.fsfs.fsfs”
        useComponentData().value.push(componentConfig);
    }
}
</script>
<style lang="less" scoped>
.component-wrapper {
    height: fit-content;
    width: fit-content;
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