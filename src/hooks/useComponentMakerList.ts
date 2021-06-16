import { ComponentConfigMaker } from '../types/core';
import { ref } from "vue";

const componentMakerList = ref<ComponentConfigMaker[]>([]);

export default function useComponentMakerList() {
    return componentMakerList
}