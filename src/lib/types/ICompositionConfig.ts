export default interface ICompositionConfig {
    uid: string,
    maker: string,
    data?: {
        args: ICompositionConfig[],
        returns: any
    }
}