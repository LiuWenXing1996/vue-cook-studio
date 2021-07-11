import { EditorConfigInput } from './input/editorConfigInput'
import { JsonType } from "../../utils/jsonType"

export enum EditorType {
    input = 'input',
}

export interface EditorConfigBase<T extends JsonType> {
    type: EditorType,
    isFreeze: boolean,
    label: string,
    tips: string,
    default: T,
    value: T
}

export interface EditableValue {
    name: "string",
    editorConfig: EditorConfig
}

export type EditorConfig = EditorConfigInput