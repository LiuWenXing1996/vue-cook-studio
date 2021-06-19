<template>
    <div
        class="component-wrapper"
        :class="{ selected: selected, hovered: hovered, isEdit: isEdit }"
        @click="handleClick"
        @mouseover="handleHover"
        draggable="true"
    >
        <component :is="config.maker.component" v-bind="componentProps">
            <template v-for="(item,index) in componentProps?.slots" v-slot:[item.name]>
                <ComponentRender :config="item.config" :is-edit="isEdit"></ComponentRender>
            </template>
        </component>
    </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, ref, toRefs, useContext } from "vue";
import useComponentHovered from "../../hooks/useComponentHovered";
import useComponentMakerDefault from "../../hooks/useComponentMakerDefault";
import useComponentMakerList from "../../hooks/useComponentMakerList";
import useComponentPropEditedList from "../../hooks/useComponentPropEditedList";
import useComponentSelected from "../../hooks/useComponentSelected";
import type { ComponentConfig } from "../../types/core"
const props = defineProps<{ config: ComponentConfig, isEdit: boolean }>()

const { isEdit, config } = toRefs(props);

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

const handleHover = (event: MouseEvent) => {
    if (!isEdit) {
        return
    }
    event.stopPropagation()
    componentHovered.value = config.value
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