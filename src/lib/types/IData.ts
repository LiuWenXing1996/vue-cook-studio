import { CSSProperties } from "vue";

interface IData {
    components: IComponentConfig[],
    composition: ICompositionConfig[]
}

interface IComponentConfig {
    uid: string,
    maker: string,
    data?: {
        render?: {
            style?: CSSProperties,
            class?: string[]
        },
        style?: CSSProperties,
        class?: string[],
        props?: Record<string, any>,
        slots?: Record<string, string[]>,
        emits?: Record<string, string[]>,
    }
}

interface ICompositionConfig {
    uid: string,
    maker: string,
    data?: {
        args: any[],
        returns: any
    }
}