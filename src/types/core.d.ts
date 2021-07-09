import { Component } from "vue";

export enum EditorType {
    input = 'input',
    select = 'select'
}

export interface EditorConfig {
    type: EditorType,
    isFreeze: boolean,
    label: string,
    default: string,
    selectOptions?: {
        label: string,
        value: string,
        realValue: any
    }[]
}

export interface ComponentProp {
    name: string,
    value: string,
}

export interface ComponentPropOption {
    name: string,
    editorConfig: EditorConfig
}

export interface ComponentSlot {
    name: string,
    value: ComponentConfig[],
}

export interface ComponentSlotOption {
    name: string,
    editorConfig: EditorConfig
}

export interface ComponentConfig {
    uid: string,
    wrapperAttrs: ComponentWrapperAttrs,
    props: ComponentProp[],
    slots: ComponentSlot[],
    makerName: string,
    makerVersion: string
}

export enum ComponentWrapperPositionType {
    absolute = "absolute",
    relative = "relative"
}

export interface ComponentWrapperAttrs {
    width: string | number,
    height: string | number,
    position: ComponentWrapperPositionType
}

export interface ComponentWrapperAttrOptions {
    width: {
        value: string | number,
        editorConfig: EditorConfig
    },
    height: {
        value: string | number,
        editorConfig: EditorConfig
    },
    position: {
        value: string | number,
        editorConfig: EditorConfig
    },
}

export interface ComponentMaker {
    name: string,
    version: string,
    label: string,
    component: Component,
    wrapperOptions: ComponentWrapperAttrOptions
    propOptions: ComponentPropOption[],
    slotOptions: ComponentSlotOption[]
}

export interface ComponentBoxPropOptions {
    width: ComponentProp,
    height: ComponentProp,
}