import { markRaw } from 'vue';
import { defineComponentMaker } from '../../../components/ComponentMaker/utils';
import { EditorType } from '../../../components/editors/editorConfig';
import Component from "./Component.vue";
export default defineComponentMaker({
    name: "vant-ui-button",
    version: "0.0.1",
    label: '按钮',
    component: () => markRaw(Component),
    propOptions: (config) => {
        return {
            text: {
                editorName: "input-editor",
                key: "text",
                label: "文字",
                default: "默认fff",
                isFreeze: false,
                tips: ""
            },
            count: {
                editorName: "number-editor",
                key: "count",
                label: "计数",
                default: 3,
                isFreeze: false,
                tips: ""
            }
        }
    },
    emitOptions:(config)=>{
        return {
            click:{
                editorName: "js-editor",
                key: "click",
                label: "点击事件",
                default: "alert('ssss')",
                isFreeze: false,
                tips: ""
            }
        }
    }
})