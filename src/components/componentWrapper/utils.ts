import useEditorConfigRealValue from "../../hooks/useEditorConfigRealValue"
import { findMaker } from "../ComponentMaker/utils"
import { EditorConfig, EditorType } from "../editors/editorConfig"
import { ComponentConfig, ComponentProp, ComponentSlot } from "./types"

export function getComponentPropsObject(config: ComponentConfig) {
    const { props } = config
    const maker = findMaker(config)
    let propObject: Record<string, any> = {}

    if (!maker) {
        return propObject
    }
    const propRealValueList = props.map(prop => {
        let propOption = maker.propOptions(config).find(e => e.name === prop.name)
        let realValue;
        if (propOption) {
            realValue = useEditorConfigRealValue(propOption.editorConfig, prop.value)
        }
        return {
            name: prop.name,
            realValue: realValue
        }
    })
    propRealValueList.forEach(prop => propObject[prop.name] = prop.realValue)
    return propObject
}

export function defineComponentProp(prop: ComponentProp) {
    return prop
}


export function defineComponentSlot(slot: ComponentSlot) {
    return slot
}