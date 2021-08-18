<template>
    <div style="overflow: auto;width:100%;height:100%">
        <div v-if="selected">
            <n-collapse>
                <n-collapse-item
                    :title="editor.label"
                    :name="editor.name"
                    v-for="editor in editors"
                >
                    <editor-render :editor="editor" :componentConfig="selected"></editor-render>
                </n-collapse-item>
            </n-collapse>
        </div>
        <div v-else>请选中组件</div>
    </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { NCollapse, NCollapseItem } from "naive-ui"
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