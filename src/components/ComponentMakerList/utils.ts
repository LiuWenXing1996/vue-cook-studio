import { ComponentMaker } from './types';
import { v4 as uuidv4 } from 'uuid';
import { ComponentConfig } from '../ComponentWrapper/types';
import { useComponentMakerList } from './hooks';

export function getComponentConfigDefault(maker: ComponentMaker): ComponentConfig {
    const uid = uuidv4();

    return {
        uid,
        wrapperAttrs: maker.wrapperAttrOptions.map(wrapperAttrOption => {
            return {
                name: wrapperAttrOption.name,
                value: wrapperAttrOption.editorConfig.default
            }
        }),
        props: maker.propOptions.map(propOption => {
            return {
                name: propOption.name,
                value: propOption.editorConfig.default
            }
        }),
        slots: maker.slotOptions.map(slotOption => {
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
    const maker = useComponentMakerList().get(makerName, makerVersion)
    return maker
}

export function defineComponentMaker(maker: ComponentMaker) {
    return maker;
}