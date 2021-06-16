import { shallowRef } from '@vue/runtime-dom';
import { ComponentConfig, ComponentPropType } from './../types/ComponentConfig.d';
import VText from './VText.vue';
import Te from "../packages/vant-ui/button/Component.vue"
import Preview from "../packages/vant-ui/button/Preview.vue"


// 编辑器左侧组件列表
const list: ComponentConfig[] = [
    {
        component: shallowRef(Te),
        label: '按钮',
        preview: Preview,
        props: {
            text: {
                type: ComponentPropType.input,
                label: "按钮文字",
                defaultValue: '默认fff'
            }
        }
    },

]


export default list