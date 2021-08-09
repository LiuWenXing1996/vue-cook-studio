import IComponentAttrType from "../types/IComponentAttrType";
import IComponentConfig from "../types/IComponentConfig";
import IJsonObject from "../types/IJsonObject";

export default function getComponentAttr(config: IComponentConfig, attrType: IComponentAttrType) {
    const findValueMap: Record<IComponentAttrType, (config: IComponentConfig) => IJsonObject> = {
        Event: (config) => {
            return config.emits
        },
        Prop: (config) => {
            return config.props
        },
        Slot: (config) => {
            return config.slots
        }
    }
    return findValueMap[attrType](config);
}