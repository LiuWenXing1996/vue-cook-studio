import { Component } from "vue";

export interface ComponentConfig {
    animations?: string[],
    events?: {},
    isLock?: boolean,
    component?: string | Component,
    preview?: string | Component,
    label?: string,
    propValue?: string,
    icon?: string,
    style?: {
        rotate: number,
        opacity: number,
        [propName:string]:any
    },
}