import { markRaw } from 'vue';
import { defineComponentMaker } from '../../../components/ComponentMaker/utils';
import { EditorType } from '../../../components/editors/editorConfig';
import Component from "./Component.vue";
export default defineComponentMaker({
    name: "vant-ui-button",
    version: "0.0.1",
    label: '按钮',
    component: () => markRaw(Component),
    propOptions: () => {
        return [
            {
                name: "text",
                editorConfig: {
                    type: EditorType.input,
                    label: "文字",
                    default: "默认fff",
                    isFreeze: false,
                    value: "",
                    tips: ""
                }
            }
        ]
    }
})