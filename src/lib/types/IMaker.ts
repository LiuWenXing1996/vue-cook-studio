import { Component } from "vue";
import IComponentConfig from "./IComponentConfig";
import IComponentWrapperAttrs from "./IComponentWrapperAttrs";
import IEditorConfig from "./IEditorConfig";

export default interface IMaker {
    name: string,
    label?: string,
    component: (config: Partial<IComponentConfig>) => Component,
    wrapperAttrOptions: (config: Partial<IComponentConfig>) => Record<string, IEditorConfig>,
    wrapperAttrOptionsTransformer: (wrapperAttrOptions: IEditorConfig[], config: Partial<IComponentConfig>) => IComponentWrapperAttrs,
    propOptions: (config: Partial<IComponentConfig>) => Record<string, IEditorConfig>,
    slotOptions: (config: Partial<IComponentConfig>) => Record<string, IEditorConfig>,
    emitOptions: (config: Partial<IComponentConfig>) => Record<string, IEditorConfig>,
}