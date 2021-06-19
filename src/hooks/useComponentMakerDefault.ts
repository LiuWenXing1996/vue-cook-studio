import { ComponentConfig, ComponentMaker, ComponentPropOption, ComponentPropOptionEdited, ComponentPropOptionType } from '../types/core.d';
import { v4 as uuidv4 } from 'uuid';

const defaultValueFinderMap: { [key in ComponentPropOptionType]: (propOption: ComponentPropOption) => ComponentPropOptionEdited } = {

    [ComponentPropOptionType.input]: (propOption) => {
        return {
            key: propOption.key,
            value: propOption.default
        }
    },
    [ComponentPropOptionType.select]: (propOption) => {
        return {
            key: propOption.key,
            value: propOption.default
        }
    },
    [ComponentPropOptionType.slot]: (propOption) => {
        return {
            key: propOption.key,
            value: propOption.default
        }
    }
}

export default function useComponentMakerDefault(maker: ComponentMaker): ComponentConfig {
    const uid = uuidv4();
    return {
        uid,
        propOptionEditedList: maker.propOptions.map(propOption => defaultValueFinderMap[propOption.type](propOption)),
        maker: maker
    }
}