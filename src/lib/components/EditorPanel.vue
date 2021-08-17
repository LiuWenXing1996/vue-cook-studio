<template>
    <div v-if="selected">
        <editor-render v-for="editor in editors" :editor="editor" :componentConfig="selected"></editor-render>
    </div>
    <div v-else>请选中组件</div>
</template>
<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import useComponentSelected from "../hooks/useComponentSelected";
import useComponentMaker from "../hooks/useComponentMaker";
import BaseEditor from "../editors/base-editor"
import EditorRender from "./EditorRender.vue"

const selected = useComponentSelected()
const maker = useComponentMaker(selected.value?.makerName, selected.value?.makerPackage)
const editors = computed(() => {
    const defaultEditors = [
        BaseEditor
    ];
    if (selected.value) {
        const dynamicEditors = maker.value?.makeEditors?.(selected.value) || [];
        defaultEditors.push(...dynamicEditors)
    }
    return defaultEditors
})
</script>
<style lang="less">
</style>