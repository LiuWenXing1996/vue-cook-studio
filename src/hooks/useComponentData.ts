import { ComponentConfig } from './../types/ComponentConfig.d';
import { ref } from "vue";

const componentData = ref<ComponentConfig[]>([]);

export default function useComponentData() {
    return componentData
}