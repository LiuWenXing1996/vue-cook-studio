import { Component } from "vue";
import IEditorConfig from "./IEditorConfig";

export default interface IEditorMaker {
    package: string,
    name: string,
    label: string,
    makeEditor: (config: IEditorConfig) => Component
}