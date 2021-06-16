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
    defaultValue?: any
}

export interface ComponentConfig {
    uid: string,
    animations?: string[],
    events?: {},
    component: string | Component,
    props?: any,
    maker: ComponentConfigMaker
}

export interface ComponentConfigMaker {
    key: string,
    label?: string,
    component: string | Component,
    preview: string | Component,
    propOptions?: Record<string, ComponentPropOption>,
    animationOptions?: string[],
    eventOptions?: {}
}