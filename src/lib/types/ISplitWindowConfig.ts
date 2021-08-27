import IWindowConfig from './IWindowConfig';
export default interface ISplitWindowConfig {
    width: number,
    height: number,
    innerWindows: IWindowConfig[],
    splitConfig?: {
        first: ISplitWindowConfig,
        second: ISplitWindowConfig
    }
}