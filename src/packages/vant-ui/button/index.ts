import { markRaw } from 'vue';
import { defineComponentMaker } from '../../../components/ComponentMakerList/utils';
import Component from "./Component.vue";
export default defineComponentMaker({
    name: "vant-ui-button",
    version: "0.0.1",
    label: '按钮',
    component: markRaw(Component),
    wrapperAttrOptions: [],
    propOptions: [],
    slotOptions: []
})