import { markRaw } from 'vue';
import { defineComponentMaker } from "../../../lib"
import Component from "./Component.vue";
export default defineComponentMaker({
    name: "root-app",
    package: "test",
    label: '测试-主应用',
    makeComponent: () => markRaw(Component),
    makeDefaultAttrs: () => {
        return {
            slots: {
                default: []
            }
        }
    }
})