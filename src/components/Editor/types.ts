import { Component } from 'vue';
import { JsonType, JsonTypeObject } from '../../utils/jsonType';

export interface EditorConfig {
    editorName: string,
    key: string,
    label: string,
    tips: string,
    default: JsonType,
}

export interface Editor {
    name: string,
    showUi: (config: EditorConfig) => Component,
    resolveRealValue: (referValue: JsonType) => any
}