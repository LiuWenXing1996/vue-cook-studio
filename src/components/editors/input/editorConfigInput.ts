import { EditorType, EditorConfigBase } from "../editorConfig"

export interface EditorConfigInput extends EditorConfigBase<string> {
    type: EditorType.input
}

export function getDefault(config: EditorConfigInput) {
    return config?.default
}