<template>
    <div
        class="component-wrapper"
        :class="{ selected: selected, hovered: hovered, isEdit: isEdit, isSlot: isSlot }"
        @click="handleClick"
        @mouseover="handleMouseover"
        @mouseleave="handleMouseleave"
        draggable="true"
    >
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
import useComponentHovered from "../../hooks/useComponentHovered";
import useComponentPropEditedList from "../../hooks/useComponentPropEditedList";
import useComponentSelected from "../../hooks/useComponentSelected";
import type { ComponentConfig } from "../../types/core"
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

const { isEdit, config, isSlot } = toRefs(props);

const selected = computed(() => componentSelected.value === config.value)
const hovered = computed(() => componentHovered.value === config.value)
const componentSelected = useComponentSelected()
const componentHovered = useComponentHovered()

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