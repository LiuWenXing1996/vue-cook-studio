import { markRaw } from 'vue';
import { EditorType } from '../../../types/core.d';
import { defineComponentMaker, defineComponentProp } from '../../../utils/define';
import Component from "./Component.vue";
export default defineComponentMaker({
    name: "vant-ui-button",
    version: "0.0.1",
    label: '按钮',
    component: markRaw(Component),
    propOptions: [
        defineComponentProp({
            name: "text",
            value: "",
            editorConfig: {
                type: EditorType.input,
                label: "文字",
                default: "默认fff"
            }
        }),
        defineComponentProp({
            name: "type",
            value: "",
            editorConfig: {
                type: EditorType.input,
                label: "类型",
                default: "default",
                selectOptions: [
                    {
                        label: "默认按钮",
                        value: 'default',
                        realValue: "default"
                    },
                    {
                        label: "主要按钮",
                        value: 'primary',
                        realValue: "primary"
                    },
                    {
                        label: "信息按钮",
                        value: 'info',
                        realValue: "info"
                    },
                    {
                        label: "警告按钮",
                        value: 'warning',
                        realValue: "warning"
                    },
                    {
                        label: "危险按钮",
                        value: 'danger',
                        realValue: "danger"
                    }
                ]
            }
        })
    ],
    slotOptions: []
})