<template>
    <div class="editor-wrapper">
        <Component
            v-if="editor"
            :is="editor.showUi(config)"
            :config="config"
            :componentConfig="componentConfig"
            :value="value"
            @change="handleChange"
        ></Component>
        <div v-else>{{ config.editorName }}没有找到</div>
    </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, toRefs } from "vue";
import type { JsonType } from "../../utils/jsonType";
import type { ComponentConfig } from "../ComponentWrapper/types";
import { useEditorList } from "./hooks";
import type { EditorConfig } from "./types";

const { get: getEditor } = useEditorList();

const props = defineProps({
    config: {
        type: Object as () => EditorConfig,
        required: true
    },
    componentConfig: {
        type: Object as () => ComponentConfig,
        required: true
    },
})

const { config, componentConfig } = toRefs(props);
const editor = computed(() => getEditor(config.value.editorName));
const value = componentConfig.value.props[config.value.key]
const handleChange = (value: any) => {
    componentConfig.value.props[config.value.key] = value as JsonType
}
</script>
<style lang="less" scoped>
.editor {
    position: relative;
    background: #fff;
    margin: auto;
}
</style>