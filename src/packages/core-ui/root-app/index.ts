import { shallowRef, markRaw } from 'vue';
import { EditorType } from '../../../components/editors/editorConfig';
import { defineComponentMaker } from "../../../components/ComponentMakerList/utils"
import Component from "./Component.vue";
export default defineComponentMaker({
    name: "core-ui-root-app",
    version: "0.0.1",
    label: '核心UI-主应用',
    component: markRaw(Component),
    wrapperAttrOptions: [],
    propOptions: [],
    slotOptions: [
        {
            name: "default",
            editorConfig: {
                type: EditorType.input,
                label: "默认",
                default: "",
                isFreeze: false,
                tips: "",
                value: ""
            }
        }
    ]
})