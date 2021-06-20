import { ComponentConfig } from '../types/core';
import { ref } from "vue";

const componentDragged = ref<ComponentConfig>();

export default function useComponentDragged() {
    return componentDragged
}