import { ComponentConfig } from "../types/core";
import useComponentMaker from "./useComponentMaker";
import useEditorConfigRealValue from "./useEditorConfigRealValue";

export default function useComponentPropObject(config: ComponentConfig) {
    const { props } = config
    const maker = useComponentMaker(config)
    if (!maker) {
        return
    }
    const propRealValueList = props.map(prop => {
        let propOption = maker.propOptions.find(e => e.name === prop.name)
        let realValue;
        if (propOption) {
            realValue = useEditorConfigRealValue(propOption.editorConfig, prop.value)
        }
        return {
            name: prop.name,
            realValue: realValue
        }
    })
    let propObject: Record<string, any> = {}
    propRealValueList.forEach(prop => propObject[prop.name] = prop.realValue)
    return propObject
}