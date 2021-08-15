export default interface IMenuItem{
    label:string,
    click?:VoidFunction,
    children?:IMenuItem[]
}