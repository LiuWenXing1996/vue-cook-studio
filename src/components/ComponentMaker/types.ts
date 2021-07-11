import { ComponentConfig, ComponentWrapperAttrs } from './../ComponentWrapper/types';
import { Component } from "vue"
import { EditableValue } from '../editors/editorConfig';

export interface ComponentMaker {
    name: string,
    version: string,
    label: string,
    component: (config: Partial<ComponentConfig>) => Component,
    wrapperAttrOptions: (config: Partial<ComponentConfig>) => EditableValue[],
    wrapperAttrOptionsTransformer: (wrapperAttrOptions: EditableValue[], config: Partial<ComponentConfig>) => ComponentWrapperAttrs,
    propOptions: (config: Partial<ComponentConfig>) => EditableValue[],
    slotOptions: (config: Partial<ComponentConfig>) => EditableValue[]
}

export interface ComponentMakerOptional extends Partial<ComponentMaker> {
    name: string,
    version: string,
    label: string,
    component: (config: Partial<ComponentConfig>) => Component
}