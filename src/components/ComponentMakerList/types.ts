import { Component } from "vue";
import { EditorConfig } from "../editors/editorConfig";

export interface ComponentSlotOption {
    name: string,
    editorConfig: EditorConfig
}

export interface ComponentPropOption {
    name: string,
    editorConfig: EditorConfig
}

export interface ComponentWrapperAttrOption {
    name: string,
    editorConfig: EditorConfig
}

export interface ComponentMaker {
    name: string,
    version: string,
    label: string,
    component: Component,
    wrapperAttrOptions: ComponentWrapperAttrOption[],
    propOptions: ComponentPropOption[],
    slotOptions: ComponentSlotOption[]
}