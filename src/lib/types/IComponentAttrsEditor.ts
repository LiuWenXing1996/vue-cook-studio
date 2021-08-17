import { CSSProperties } from "vue";
import IComponentConfig from "./IComponentConfig";
import IJson from "./IJson";

export default interface IComponentAttrs {
    render?:{
        style?: CSSProperties,
        class?: string[]
    },
    style?: CSSProperties,
    class?: string[],
    props?: Record<string, IJson>,
    slots?: Record<string, IComponentConfig[]>,
    emits?: Record<string, string>,
}