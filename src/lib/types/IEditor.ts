import { Component } from "vue";
import EditorConfig from "./IEditorConfig";
import IComponentConfig from './IComponentConfig';

export default interface IEditor {
    name: string,
    label: string,
    ui: (componentConfig: IComponentConfig) => Component
}