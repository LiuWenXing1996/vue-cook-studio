import { Component } from "vue";

export enum ComponentPropOptionType {
    input = 'input',
    inputNumber = 'InputNumber',
    color = 'color',
    select = 'select',
    table = 'table',
    switch = 'switch'
}

export interface ComponentPropOption {
    type: ComponentPropOptionType,
    label: string,
    tips?: any,
    default: any
}

export interface ComponentPropOptionInput extends ComponentPropOption {
    type:ComponentPropOptionType.input,
    default:string
}

export interface ComponentPropOptionSelect extends ComponentPropOption {
    type: ComponentPropOptionType.select,
    options: {
        label: string,
        value: string,
        realValue: any
    }[]
}



export interface ComponentConfig {
    uid: string,
    animations?: string[],
    events?: {},
    component: string | Component,
    props: Record<string, any>,
    maker: ComponentConfigMaker
}

export interface ComponentConfigMaker {
    key: string,
    label?: string,
    component: string | Component,
    preview: string | Component,
    propOptions: Record<string, ComponentPropOption>,
    animationOptions?: string[],
    eventOptions?: {}
}