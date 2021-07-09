import { ComponentConfig } from './types';
import { ref } from "vue";

const componentSelected = ref<ComponentConfig>();
export function useComponentSelected() {
    return componentSelected
}

const componentHovered = ref<ComponentConfig>();
export function useComponentHovered() {
    return componentHovered
}

const componentDragged = ref<ComponentConfig>();
export function useComponentDragged() {
    return componentDragged
}