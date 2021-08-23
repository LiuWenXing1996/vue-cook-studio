import { ComponentPropsOptions, Prop } from "vue";

interface ICompositionParam {
    tips?: string,
    label?: string,
    type?: string
}

export default interface ICompositionMaker {
    name: string,
    label: string,
    args: Record<string, ICompositionParam>,
    result: ICompositionParam,
    body: Function
}