import { ComponentMaker, ComponentMakerOptional } from './types';
import { v4 as uuidv4 } from 'uuid';
import { ComponentConfig } from '../ComponentWrapper/types';
import { useComponentMakerList } from './hooks';

export function getComponentConfigDefault(maker: ComponentMaker): ComponentConfig {
    const uid = uuidv4();
    let config = {}

    return {
        uid,
        wrapperAttrs: maker.wrapperAttrOptionsTransformer(maker.wrapperAttrOptions(config), config),
        props: maker.propOptions(config).map(propOption => {
            return {
                name: propOption.name,
                value: propOption.editorConfig.default
            }
        }),
        slots: maker.slotOptions(config).map(slotOption => {
            return {
                name: slotOption.name,
                value: []
            }
        }),
        makerName: maker.name,
        makerVersion: maker.version
    }
}

export function findMaker(config: ComponentConfig) {
    const { makerName, makerVersion } = config
    return findMakerByNameAndVersion(makerName, makerVersion)
}

export function findMakerByNameAndVersion(makerName: string, makerVersion: string) {
    const maker = useComponentMakerList().get(makerName, makerVersion)
    return maker
}

export function defineComponentMaker(makerOptional: ComponentMakerOptional): ComponentMaker {
    return {
        wrapperAttrOptionsTransformer: () => {
            return {
                height: "fit-content",
                width: "fit-content",
                position: "relative",
                display: "inline-block"
            }
        },
        wrapperAttrOptions: () => [],
        propOptions: () => [],
        slotOptions: () => [],
        ...makerOptional,
    };
}