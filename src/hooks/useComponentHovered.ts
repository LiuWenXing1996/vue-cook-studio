import { ComponentConfig } from '../types/core';
import { ref } from "vue";

const componentHovered = ref<ComponentConfig>();

export default function useComponentHovered() {
    return componentHovered
}