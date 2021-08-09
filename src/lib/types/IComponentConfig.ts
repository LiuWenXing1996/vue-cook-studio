import { CSSProperties } from "vue";

export default interface IComponentConfig {
    uid: string,
    makerName: string,
    makerPackage: string,
    attrs: {
        render?: {
            style?: CSSProperties,
            class?: string[]
        },
        style?: CSSProperties,
        class?: string[],
        props?: Record<string, any>,
        slots?: Record<string, IComponentConfig[]>,
        emits?: Record<string, Function>,
    }
}

