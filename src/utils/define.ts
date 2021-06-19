import { ComponentMaker, ComponentPropOptionSelect, ComponentPropOptionInput, componentPropOptionSlot } from './../types/core.d';

export function defineComponentConfigMaker(maker: ComponentMaker) {
    return maker;
}

export function defineComponentPropOptionSelect(propOption: ComponentPropOptionSelect) {
    return propOption;
}

export const defineComponentPropOptionInput = (propOption: ComponentPropOptionInput) => propOption

export const defineComponentPropOptionSlot = (propOption: componentPropOptionSlot) => propOption