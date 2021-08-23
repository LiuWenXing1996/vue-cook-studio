export default interface ICompositionConfig {
    uid: string,
    maker: string,
    data?: {
        args?: string[],
        returns?: any
    }
}