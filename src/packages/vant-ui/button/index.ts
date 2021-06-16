import { shallowRef } from 'vue';
import { ComponentPropOptionType } from '../../../types/core.d';
import defineComponentConfigMaker from '../../../utils/defineComponentConfigMaker';
import Component from "./Component.vue";
import Preview from "./Preview.vue";
export default defineComponentConfigMaker({
    key: "vant-ui-button",
    label: '按钮',
    component: shallowRef(Component),
    preview: shallowRef(Preview),
    propOptions: {
        text: {
            type: ComponentPropOptionType.input,
            label: "按钮文字",
            defaultValue: '默认fff'
        }
    }
})