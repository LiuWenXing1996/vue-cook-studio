import IComponentConfig from "./IComponentConfig";

export default interface EditorConfig {
    makerName: string,
    makerPackage: string,
    get: (config: IComponentConfig) => any,
    set: (config: IComponentConfig, value: any) => void
}