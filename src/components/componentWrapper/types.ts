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

export interface ComponentSlot {
    name: string,
    value: ComponentConfig[],
}

export interface ComponentConfig {
    uid: string,
    wrapperAttrs: ComponentWrapperAttr[],
    props: ComponentProp[],
    slots: ComponentSlot[],
    makerName: string,
    makerVersion: string
}