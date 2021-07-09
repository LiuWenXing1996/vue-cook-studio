import { ComponentMaker, ComponentProp, ComponentSlot, ComponentWrapperAttrOptions } from './../types/core.d';

import {defineComponent} from "vue"

export function defineComponentMaker(maker: ComponentMaker) {
    return maker;
}

export function defineComponentProp(prop: ComponentProp) {
    return prop
}


export function defineComponentSlot(slot: ComponentSlot) {
    return slot
}

export function defineComponentWrapperAttrOptions(wrapperAttrOptions: ComponentWrapperAttrOptions) {
    
}
