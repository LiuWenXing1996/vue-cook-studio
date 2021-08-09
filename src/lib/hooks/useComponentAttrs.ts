import { computed, Ref } from "vue";
import IComponentConfig from "../types/IComponentConfig";
import useComponentMaker from "./useComponentMaker";

export default function useComponentAttrs(config: Ref<IComponentConfig>) {
    return computed(() => {
        const maker = useComponentMaker(config.value.makerName, config.value.makerPackage);
        const attrs = maker.value?.makeAttrs?.(config.value);
        return attrs
    })
}