import { ComponentConfig, ComponentPropOption, ComponentPropOptionInput, ComponentPropOptionType, ComponentPropOptionEdited, ComponentPropOptionSelect } from './../types/core.d';

const realValueFinderMap: { [key in ComponentPropOptionType]: (propOption: ComponentPropOption, propOptionEdited: ComponentPropOptionEdited) => any } = {
    [ComponentPropOptionType.switch]: (propOption: ComponentPropOption, propOptionEdited: ComponentPropOptionEdited) => {
        return propOptionEdited.value
    },
    [ComponentPropOptionType.input]: (propOption: ComponentPropOption, propOptionEdited: ComponentPropOptionEdited) => {
        return propOptionEdited.value
    },
    [ComponentPropOptionType.select]: (propOption: ComponentPropOption, propOptionEdited: ComponentPropOptionEdited) => {
        return propOptionEdited.value
    },
    [ComponentPropOptionType.inputNumber]: (propOption: ComponentPropOption, propOptionEdited: ComponentPropOptionEdited) => {
        return propOptionEdited.value
    },
    [ComponentPropOptionType.color]: (propOption: ComponentPropOption, propOptionEdited: ComponentPropOptionEdited) => {
        return propOptionEdited.value
    },
    [ComponentPropOptionType.table]: (propOption: ComponentPropOption, propOptionEdited: ComponentPropOptionEdited) => {
        return propOptionEdited.value
    }
}


export default function useComponentPropEditedList(componentConfig: ComponentConfig): Record<string, any> {
    const maker = componentConfig.maker
    const propArray = componentConfig.propOptionEditedList.map(propOptionEdited => {
        const propOption = maker.propOptions.find(propOption => propOption.key === propOptionEdited.key) as ComponentPropOption
        return {
            key: propOptionEdited.key,
            value: realValueFinderMap[propOption.type](propOption, propOptionEdited)
        }
    })
    let propObject: Record<string, any> = {}
    propArray.forEach(prop => propObject[prop.key] = prop.value)
    return propObject
}