import { ComponentConfig, ComponentWrapperAttrs } from '../ComponentWrapper/types';
import { Component } from "vue"
import { EditableValue } from '../editors/editorConfig';
import { EditorConfig } from '../Editor/types';

export interface ComponentMaker {
    name: string,
    version: string,
    label: string,
    component: (config: Partial<ComponentConfig>) => Component,
    wrapperAttrOptions: (config: Partial<ComponentConfig>) => Record<string, EditorConfig>,
    wrapperAttrOptionsTransformer: (wrapperAttrOptions: EditableValue[], config: Partial<ComponentConfig>) => ComponentWrapperAttrs,
    propOptions: (config: Partial<ComponentConfig>) => Record<string, EditorConfig>,
    slotOptions: (config: Partial<ComponentConfig>) => EditableValue[],
    emitOptions: (config: Partial<ComponentConfig>) => Record<string, EditorConfig>,
}

export interface ComponentMakerOptional extends Partial<ComponentMaker> {
    name: string,
    version: string,
    label: string,
    component: (config: Partial<ComponentConfig>) => Component
}



