import { ComponentConfig } from './../ComponentWrapper/types';
import { Component } from "vue"
import { EditorConfig, EditableValue } from '../editors/editorConfig';
import { JsonType } from '../../utils/jsonType';

export interface ComponentWrapperAttr {
    name: string,
    value: JsonType,
}

export interface ComponentMaker {
    name: string,
    version: string,
    label: string,
    component: (config: ComponentConfig) => Component,
    wrapperAttrOptions: (config: ComponentConfig) => EditableValue[],
    wrapperAttrOptionsTransformer: (wrapperAttrOptions: EditableValue[], config: ComponentConfig) => {}
}