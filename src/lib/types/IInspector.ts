import { Component } from "vue";

export default interface IInspector {
    name: string,
    package: string,
    label:string,
    component: Component
}