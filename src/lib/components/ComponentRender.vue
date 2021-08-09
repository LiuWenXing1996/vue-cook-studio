<template>
    <div
        class="component-render"
        :class="[{ selected: selected, hovered: hovered, editing: editing }, renderClass]"
        :style="renderStyle"
        @click="handleClick"
        @mouseover="handleMouseover"
        @mouseleave="handleMouseleave"
        @drop="handleDrop"
        @dragover="handleDragOver"
        @dragstart="handleDragStart"
        draggable="true"
        :data-uid="config.uid"
    >
        <component
            v-if="maker"
            :is="maker.makeComponent(config)"
            v-bind="attrs?.props"
            v-on="attrs?.emits"
        >
            <template v-for="(slot,name) in attrs?.slots" v-slot:[name]>
                <ComponentRender :config="config" :editing="editing" v-for="config in slot"></ComponentRender>
            </template>
        </component>
        <div v-else>{{ [config.makerPackage, config.makerName] }}没有找到</div>
    </div>
</template>
<script lang="ts" setup>
import { toRefs, defineProps, computed } from "vue";
import useComponentDragged from "../hooks/useComponentDragged";
import useComponentHovered from "../hooks/useComponentHovered";
import useComponentMaker from "../hooks/useComponentMaker";
import useComponentSelected from "../hooks/useComponentSelected";
import IComponentConfig from "../types/IComponentConfig";
import getComponentConfigDefault from "../utils/getComponentConfigDefault";

const { config, editing } = toRefs(defineProps(
    {
        config: {
            type: Object as () => IComponentConfig,
            required: true
        },
        editing: {
            type: Boolean,
            default: false
        }
    }
))
const componentSelected = useComponentSelected()
const componentDragged = useComponentDragged()
const componentHovered = useComponentHovered()
const selected = computed(() => componentSelected.value?.uid === config.value.uid)
const hovered = computed(() => componentHovered.value?.uid === config.value.uid)
const maker = useComponentMaker(config.value.makerName, config.value.makerPackage)
const attrs = computed(() => maker.value?.makeAttrs?.(config.value))
const renderStyle = computed(() => attrs.value?.render?.style)
const renderClass = computed(() => attrs.value?.render?.class)
const handleClick = (event: MouseEvent) => {
    if (!editing.value) {
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
    if (!editing.value) {
        return
    }
    event.stopPropagation()
    componentHovered.value = config.value
}

const handleMouseleave = (event: MouseEvent) => {
    if (!editing.value) {
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

    } else {
        const makerName = e.dataTransfer?.getData('name')
        const makerPackage = e.dataTransfer?.getData('package')
        if (!makerName || !makerPackage) { return }
        const maker = useComponentMaker(makerName, makerPackage);
        if (!maker.value) { return }
        let componentConfig = getComponentConfigDefault(maker.value)
        if (config.value.attrs.slots) {
            config.value.attrs.slots["default"].push(componentConfig)
        }
    }
}

</script>
<style lang="less" scoped>
.component-render {
    &.editing {
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