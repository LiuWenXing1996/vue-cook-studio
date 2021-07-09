import { ComponentConfig } from './../types/core.d';
import { ref } from "vue";

const componentSelected = ref<ComponentConfig>();

export default function useComponentSelected() {
    return {
        set(config: ComponentConfig) {
            componentSelected.value = config
        },
        data: componentSelected
    }
}