import { EditorConfig, EditorType } from "../editors/editorConfig"

export enum ComponentWrapperPositionType {
    absolute = "absolute",
    relative = "relative"
}

export interface ComponentWrapperAttrs {
    width: string | number,
    height: string | number,
    position: ComponentWrapperPositionType
}

export interface ComponentWrapperAttrOptions {
    width: {
        value: string | number,
        editorConfig: EditorConfig
    },
    height: {
        value: string | number,
        editorConfig: EditorConfig
    },
    position: {
        value: string | number,
        editorConfig: EditorConfig
    },
}

export function getDefaultComponentWrapperAttrOptions(): ComponentWrapperAttrOptions {
    return {
        width: {
            value: "100%",
            editorConfig: {
                type: EditorType.input,
                isFreeze: false,
                label: '宽度',
                tips: "组件包围器的宽度",
                default: "100%",
                value: "100%"
            }
        },
        height: {
            value: "100%",
            editorConfig: {
                type: EditorType.input,
                isFreeze: false,
                label: '宽度',
                tips: "组件包围器的宽度",
                default: "100%",
                value: "100%"
            }
        },
        position: {
            value: "100%",
            editorConfig: {
                type: EditorType.input,
                isFreeze: false,
                label: '宽度',
                tips: "组件包围器的宽度",
                default: "100%",
                value: "100%"
            }
        }
    }
}

export function defineComponentWrapperAttrOptions(options: ComponentWrapperAttrOptions) {

}