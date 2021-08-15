import { Component } from "vue";
import IComponentAttrs from "./IComponentAttrs";
import IComponentConfig from "./IComponentConfig";

export default interface IComponentMaker {
    package: string,
    name: string,
    label: string,
    makeComponent: (config: IComponentConfig) => Component,
    makeEditors?: (config: IComponentConfig) => IComponentAttrs,
    makeDefaultAttrs?: (config: IComponentConfig) => IComponentAttrs
}