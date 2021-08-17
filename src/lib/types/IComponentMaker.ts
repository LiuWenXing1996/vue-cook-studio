import { Component } from "vue";
import IComponentAttrs from "./IComponentAttrs";
import IComponentConfig from "./IComponentConfig";
import IEditor from "./IEditor";

export default interface IComponentMaker {
    package: string,
    name: string,
    label: string,
    makeComponent: (config: IComponentConfig) => Component,
    makeEditors?: (config: IComponentConfig) => IEditor[],
    makeDefaultAttrs?: (config: IComponentConfig) => IComponentAttrs
}