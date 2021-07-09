import { ComponentConfig, ComponentMaker, ComponentPropOption } from "../types/core";
import { v4 as uuidv4 } from 'uuid';

export default function useComponentConfigDefault(maker: ComponentMaker): ComponentConfig {
    const uid = uuidv4();
    return {
        uid,
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