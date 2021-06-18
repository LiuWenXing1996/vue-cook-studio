import { ComponentConfig } from './../types/core';
import { ref } from "vue";

const componentSelected = ref<ComponentConfig>();

export default function useComponentSelected() {
    return componentSelected
}