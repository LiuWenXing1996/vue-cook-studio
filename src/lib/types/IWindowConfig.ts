export default interface IWindowConfig {
    width: number,
    height: number,
    title: string,
    childern?: IWindowConfig[]
}