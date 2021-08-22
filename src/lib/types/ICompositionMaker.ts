import { ComponentPropsOptions, Prop } from "vue";

export default interface ICompositionMaker {
    name: string,
    args: ComponentPropsOptions,
    returns: ComponentPropsOptions | Prop<any>,
    body: Function
}