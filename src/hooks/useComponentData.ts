import { ComponentConfig } from './../types/core';
import { ref } from "vue";

const componentData = ref<ComponentConfig[]>([]);

export default function useComponentData() {
    return componentData
}