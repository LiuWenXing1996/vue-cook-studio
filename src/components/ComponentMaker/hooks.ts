import { ComponentMaker } from './types';
import { ref } from "vue";

const componentMakerList = ref<ComponentMaker[]>([]);

export function useComponentMakerList() {
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