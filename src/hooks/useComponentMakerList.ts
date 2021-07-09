import { ComponentMaker } from '../types/core';
import { ref } from "vue";

const componentMakerList = ref<ComponentMaker[]>([]);

export default function useComponentMakerList() {
    return {
        data: componentMakerList,
        get: (name: string, version: string) => {
            return componentMakerList.value.find(maker => {
                return maker.name === name && maker.version === version
            })
        },
        set: (...makerList: ComponentMaker[]) => {
            componentMakerList.value.push(...makerList)
        }
    }
}