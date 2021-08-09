import { JsonType } from "../../utils/jsonType";
import { EditorConfig } from "../Editor/types";

export interface HookMaker {
    name: string,
    params: Record<string, EditorConfig>,
    returns: Record<string, JsonType>,
    body: Function
}

export interface HookConfig {
    hookName: string,
    params: Record<string, JsonType>
}