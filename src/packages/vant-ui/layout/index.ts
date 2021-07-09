import { defineComponentPropOptionSlot } from './../../../utils/define';
import { shallowRef, markRaw } from 'vue';
import { ComponentPropOptionType } from '../../../types/core.d';
import { defineComponentPropOptionSelect, defineComponentConfigMaker, defineComponentPropOptionInput } from '../../../utils/define';
import Component from "./Component.vue";
import Preview from "./Preview.vue";
import useComponentMakerDefault from '../../../hooks/useComponentMakerDefault';
import useComponentMakerList from '../../../hooks/useComponentMakerList';
import ButtonComponentMaker from "../button/index"
export default defineComponentConfigMaker({
    key: "vant-ui-layout",
    label: '布局',
    component: markRaw(Component),
    propOptions: [
        defineComponentPropOptionSlot({
            type: ComponentPropOptionType.slot,
            key: 'slots',
            label: "插槽",
            slotOptions: [{
                name: "header"
            }, {
                name: "footer"
            }],
            default: [
                {
                    name: "header",
                    config: useComponentMakerDefault(ButtonComponentMaker)
                },
                {
                    name: "footer",
                    config: useComponentMakerDefault(ButtonComponentMaker)
                }
            ]
        })
    ]
})