import { Component } from "vue";
import { ComponentWrapperAttrOptions } from "../components/ComponentWrapper/componentWrapper";

export interface CompMaker {
    name: string,
    version: string,
    label: string,
    component: Component,
    wrapperOptions: ComponentWrapperAttrOptions
    propOptions: ComponentPropOption[],
    slotOptions: ComponentSlotOption[]
}