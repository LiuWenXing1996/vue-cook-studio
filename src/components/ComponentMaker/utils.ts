import { ComponentMaker, ComponentMakerOptional } from './types';
import { v4 as uuidv4 } from 'uuid';
import { ComponentConfig } from '../ComponentWrapper/types';
import { useComponentMakerList } from './hooks';
import { EditorType } from '../editors/editorConfig';
import { JsonType } from '../../utils/jsonType';

export function getComponentConfigDefault(maker: ComponentMaker): ComponentConfig {
    const uid = uuidv4();
    let config = {};
    let props: Record<string, JsonType> = {};
    let propOptions = maker.propOptions(config);
    for (const key in propOptions) {
        if (Object.prototype.hasOwnProperty.call(propOptions, key)) {
            const propOption = propOptions[key];
            props[key] = propOption.default;
        }
    }
    let emits: Record<string, JsonType> = {};
    let emitOptions = maker.emitOptions(config);
    for (const key in emitOptions) {
        if (Object.prototype.hasOwnProperty.call(emitOptions, key)) {
            const propOption = emitOptions[key];
            emits[key] = propOption.default;
        }
    }

    return {
        uid,
        wrapperAttrs: maker.wrapperAttrOptionsTransformer(maker.wrapperAttrOptions(config), config),
        props: props,
        slots: maker.slotOptions(config).map(slotOption => {
            return {
                name: slotOption.name,
                value: []
            }
        }),
        emits:emits,
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

[
    {
        name: 'height',
        editorConfig: {
            type: EditorType.input,
            isFreeze: false,
            label: "高度",
            tips: "高度dd",
            default: 'fit-content',
            value: 'fit-content'
        }
    }
]

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
        wrapperAttrOptions: () => {
            return {
                height: {
                    editorName: "input-editor",
                    label: "高度",
                    tips: "高度dd",
                    default: 'fit-content',
                    value: 'fit-content'
                }
            }
        },
        propOptions: () => ({}),
        emitOptions: () => ({}),
        slotOptions: () => [],
        ...makerOptional,
    };
}