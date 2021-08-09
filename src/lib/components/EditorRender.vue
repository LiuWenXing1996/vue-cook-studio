<template>
    <Component
        v-if="editor"
        :is="editor.showUi(config)"
        :config="config"
        :componentConfig="componentConfig"
        @change="handleChange"
    ></Component>
    <div v-else>{{ config.editorName }}没有找到</div>
</template>
<script lang="ts" setup>
import { toRefs,defineProps } from "vue";
import IComponentConfig from "../types/IComponentConfig";
import IEditorConfig from "../types/IEditorConfig";

const { config, componentConfig } = toRefs(defineProps({
    config: {
        type: Object as () => IEditorConfig,
        required: true
    },
    componentConfig: {
        type: Object as () => IComponentConfig,
        required: true
    },
}));
//TODO:参照component render 编写次render
</script>