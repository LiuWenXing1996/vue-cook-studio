import { reactive, ref, Ref } from "vue";
import { ComponentConfig, ComponentMaker } from "../types/core";

export interface ComponentEditable {
    uid: string,
    propEditables: propEditable[]
}

interface propEditable {
    name: string,
    value: string
}

export default function useComponentEditable(componentConfig: Ref<ComponentConfig>): Ref<ComponentEditable> {
    const componentEditable = reactive<ComponentEditable>({
        uid:componentConfig.value.uid,
        propEditables:componentConfig.p
    })

    return componentEditable
}