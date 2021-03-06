import { EditorConfig, EditorType } from "../editors/editorConfig"
import { JsonType } from "../../utils/jsonType";

export interface ComponentProp {
    name: string,
    value: JsonType,
}

export interface ComponentWrapperAttr {
    name: string,
    value: JsonType,
}

export interface ComponentWrapperAttrs {
    height: string,
    width: string,
    position: string,
    display: string
}

export interface ComponentSlot {
    name: string,
    value: ComponentConfig[],
}

export interface ComponentConfig {
    uid: string,
    wrapperAttrs: ComponentWrapperAttrs,
    props: Record<string, JsonType>,
    slots: ComponentSlot[],
    emits: Record<string, JsonType>,
    makerName: string,
    makerVersion: string
}