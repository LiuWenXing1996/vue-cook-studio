import { Component } from "vue";
import { JsonType } from "../utils/jsonType";
import EditorConfig from "./IEditorConfig";

export default interface IEditor {
    name: string,
    showUi: (config: EditorConfig) => Component,
    resolveRealValue: (referValue: JsonType) => any
}