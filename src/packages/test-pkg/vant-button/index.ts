import { markRaw } from 'vue';
import { defineComponentMaker } from '../../../lib';
import Component from "./Component.vue";
export default defineComponentMaker({
    name: "vant-ui-button",
    package: "test-pkg",
    label: '按钮',
    makeComponent: () => markRaw(Component),
    makeDefaultAttrs:()=>{
        return {
            props:{
                text:"aaaaaaa"
            }
        }
    }
})