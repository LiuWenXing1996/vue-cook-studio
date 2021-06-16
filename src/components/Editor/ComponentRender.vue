<template>
    <div
        class="component-wrapper"
        :class="{ selected: selected, isEdit: isEdit }"
        @click="handleClick"
        draggable="true"
    >
        <component :is="config.component" v-bind="config.props"></component>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, ref } from "vue";
import type { ComponentConfig } from "../../types/core"
const { isEdit } = defineProps<{ config: ComponentConfig, isEdit: boolean }>()

const selected = ref(false)

const handleClick = (event: MouseEvent) => {
    if (!isEdit) {
        return
    }
    event.stopPropagation();
    selected.value = !selected.value;
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
        &:hover {
            &::before {
                cursor: move;
                border: solid 3px #409eff;
            }
        }
    }
}
</style>