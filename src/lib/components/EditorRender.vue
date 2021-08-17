<template>
    <Component v-if="editor" :is="editor.ui(componentConfig)" :componentConfig="componentConfig"></Component>
</template>
<script lang="ts" setup>
import { toRefs, defineProps } from "vue";
import type IComponentConfig from "../types/IComponentConfig";
import type IEditor from "../types/IEditor";
defineProps({
    editor: {
        type: Object as () => IEditor,
        required: true
    },
    componentConfig: {
        type: Object as () => IComponentConfig,
        required: true
    },
})
</script>