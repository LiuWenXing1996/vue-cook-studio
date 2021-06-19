import { ComponentMaker } from '../types/core';
import { ref } from "vue";

const componentMakerList = ref<ComponentMaker[]>([]);

export default function useComponentMakerList() {
    return componentMakerList
}