import { Component } from "vue";
import EditorConfig from "./IEditorConfig";
import IComponentConfig from './IComponentConfig';

export default interface IEditor {
    name: string,
    ui: (componentConfig: IComponentConfig) => Component
}