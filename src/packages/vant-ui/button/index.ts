import { shallowRef, markRaw } from 'vue';
import { ComponentPropOptionType } from '../../../types/core.d';
import { defineComponentPropOptionSelect, defineComponentConfigMaker, defineComponentPropOptionInput } from '../../../utils/define';
import Component from "./Component.vue";
import Preview from "./Preview.vue";
export default defineComponentConfigMaker({
    key: "vant-ui-button",
    label: '按钮',
    component: markRaw(Component),
    preview: markRaw(Preview),
    propOptions: [
        defineComponentPropOptionInput({
            key: "text",
            type: ComponentPropOptionType.input,
            label: "文字",
            default: '默认fff'
        }),
        defineComponentPropOptionSelect({
            key: "type",
            type: ComponentPropOptionType.select,
            label: "类型",
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
            ],
            default: 'default'
        })
    ]
})