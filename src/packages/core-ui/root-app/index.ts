import { shallowRef, markRaw } from 'vue';
import { EditorType } from '../../../types/core.d';
import { defineComponentMaker, defineComponentProp, defineComponentSlot } from "../../../utils/define"
import Component from "./Component.vue";
export default defineComponentMaker({
    name: "core-ui-root-app",
    version: "0.0.1",
    label: '核心UI-主应用',
    component: markRaw(Component),
    propOptions: [],
    slotOptions: [
        {
            name: "default",
            editorConfig: {
                type: EditorType.input,
                label: "默认",
                default: ""
            }
        }
    ]
})