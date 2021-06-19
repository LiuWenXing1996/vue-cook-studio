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
    key: string,
    type: ComponentPropOptionType,
    label: string,
    tips?: string,
    default: string
}

export interface ComponentPropOptionEdited {
    key: string,
    value: string
}

export interface ComponentPropOptionInput extends ComponentPropOption {
    type: ComponentPropOptionType.input,
    default: string
}

export interface ComponentPropOptionSelect extends ComponentPropOption {
    type: ComponentPropOptionType.select,
    selectOptions: {
        label: string,
        value: string,
        realValue: any
    }[]
}

export interface ComponentConfig {
    uid: string,
    propOptionEditedList: ComponentPropOptionEdited[],
    maker: ComponentMaker
}

export interface ComponentMaker {
    key: string,
    label?: string,
    component: string | Component,
    preview: string | Component,
    propOptions: ComponentPropOption[]
}