import { shallowRef } from '@vue/runtime-dom';
import { ComponentConfig } from './../types/ComponentConfig.d';
import VText from './VText.vue';
import Te from "../packages/vant-ui/button/Component.vue"
// 公共样式
export const commonStyle = {
    rotate: 0,
    opacity: 1,
}

export const commonAttr = {
    animations: [],
    events: {},
    groupStyle: {}, // 当一个组件成为 Group 的子组件时使用
    isLock: false, // 是否锁定组件
}

// 编辑器左侧组件列表
const list: ComponentConfig[] = [
    {
        ...commonAttr,
        component: shallowRef(Te),
        label: '文字',
        propValue: '双击编辑文字',
        icon: 'wenben',
        preview: "ddd",
        style: {
            width: 200,
            height: 22,
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
            ...commonStyle,
        },
    },

]

// for (let i = 0, len = list.length; i < len; i++) {
//     const item = list[i]
//     item.style = { ...commonStyle, ...item.style }
//     list[i] = { ...commonAttr, ...item }
// }

export default list