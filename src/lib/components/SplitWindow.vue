<template>
    <div class="split-window" ref="el">
        <template v-if="config.splitConfig">
            <split-window :config="config.splitConfig.first" ref="firstRef" :parent-config="config"></split-window>
            <split-divider
                :firstConfig="config.splitConfig.first"
                :firstRef="firstRef"
                :secondConfig="config.splitConfig.second"
                :secondRef="secondRef"
                :is-v="isV"
            ></split-divider>
            <split-window
                :config="config.splitConfig.second"
                ref="secondRef"
                :parent-config="config"
            ></split-window>
        </template>
        <template v-else>
            <div class="header">
                <div class="title">
                    <div
                        v-for="innerWin in config.innerWindows"
                        class="inner-title"
                        @click="showInnerWin(innerWin)"
                    >
                        {{ innerWin.title }}
                        <n-icon size="20" title="关闭" class="icon" @click="closeInnerWin(innerWin)">
                            <CloseOutline></CloseOutline>
                        </n-icon>
                    </div>
                </div>
                <div class="actions">
                    <n-icon size="20" title="垂直分割" class="icon" @click="splitV">
                        <SplitHorizontal32Regular />
                    </n-icon>
                    <n-icon size="20" title="水平分割" class="icon" @click="splitH">
                        <SplitVertical32Regular />
                    </n-icon>
                    <n-icon
                        size="20"
                        title="关闭所有"
                        class="icon"
                        @click="closeAll"
                        v-if="parentConfig"
                    >
                        <CloseOutline></CloseOutline>
                    </n-icon>
                </div>
            </div>
            <div class="content">{{ showingInnerWin?.content }}</div>
        </template>
    </div>
</template>
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, toRefs, onBeforeUpdate, watchPostEffect, defineExpose } from "vue";
import type { Ref, VNode } from "vue";
import SplitDivider from "./SplitDivider.vue"
import { NIcon } from "naive-ui"
import { SplitHorizontal32Regular, SplitVertical32Regular } from "@vicons/fluent"
import { CloseOutline } from "@vicons/ionicons5"
import type ISplitWindowConfig from "../types/ISplitWindowConfig";
import type IWindowConfig from "../types/IWindowConfig";
import { v4 as uuidv4 } from "uuid"

const props = defineProps(
    {
        config: {
            type: Object as () => ISplitWindowConfig,
            required: true
        },
        parentConfig: {
            type: Object as () => ISplitWindowConfig
        }
    }
)
const { config, parentConfig } = toRefs(props)
const firstRef = ref(null)
const secondRef = ref(null)
const el = ref(null)
export interface exposeType {
    el: HTMLDivElement
}
defineExpose({
    el: el
})
const splitH = () => {
    config.value.splitConfig = {
        first: {
            width: 100 / 2,
            height: 100,
            innerWindows: [{
                title: `t-${uuidv4()}`,
                content: `c-${uuidv4()}`
            }]
        },
        second: {
            width: 100 / 2,
            height: 100,
            innerWindows: [{
                title: `t-${uuidv4()}`,
                content: `c-${uuidv4()}`
            }]
        }
    }
}
const splitV = () => {
    config.value.splitConfig = {
        first: {
            width: 100,
            height: 100 / 2,
            innerWindows: [{
                title: `t-${uuidv4()}`,
                content: `c-${uuidv4()}`
            }]
        },
        second: {
            width: 100,
            height: 100 / 2,
            innerWindows: [{
                title: `t-${uuidv4()}`,
                content: `c-${uuidv4()}`
            }]
        }
    }
}
const closeAll = () => {
    if (parentConfig?.value?.splitConfig) {
        if (parentConfig?.value?.splitConfig?.first === config.value) {
            parentConfig.value.innerWindows = parentConfig.value.splitConfig.second.innerWindows
            parentConfig.value.splitConfig = parentConfig.value.splitConfig.second.splitConfig
        } else {
            parentConfig.value.innerWindows = parentConfig.value.splitConfig.first.innerWindows
            parentConfig.value.splitConfig = parentConfig.value.splitConfig.first.splitConfig
        }
    }
}
const closeInnerWin = (innerWin: IWindowConfig) => {
    config.value.innerWindows = config.value.innerWindows.filter(e => e === innerWin)
}

const showingInnerWin = ref<IWindowConfig>()
const showInnerWin = (innerWin: IWindowConfig) => {
    showingInnerWin.value = innerWin
}

const toPercent = (n: number) => `${n}%`

const isV = computed(() => {
    if (config.value?.splitConfig?.first.height === 100) {
        return false
    }
    return true
})
const flexDirection = computed(() => {
    return isV.value ? "column" : "row"
})
const width = computed(() => toPercent(config.value.width))
const height = computed(() => toPercent(config.value.height))


</script>
<style lang="less" scoped>
.split-window {
    display: flex;
    width: v-bind(width);
    height: v-bind(height);
    flex-direction: v-bind(flexDirection);
    .header {
        width: 100%;
        height: 30px;
        border-bottom: 1px solid #f0f0f0;
        font-size: 14px;
        color: #333;
        display: flex;
        align-items: center;
        border-radius: 2px 2px 0 0;
        overflow: hidden;
        .title {
            flex-grow: 1;
            display: flex;
            flex-direction: row;
            .inner-title {
                padding: 0 5px;
                border-left: 1px solid #f0f0f0;
                &::last-child {
                    border-left: none;
                }
                &:hover {
                    background-color: aqua;
                    cursor: pointer;
                }
                .icon {
                    &:hover {
                        cursor: pointer;
                        color: blue;
                    }
                }
            }
        }
        .actions {
            .icon {
                &:hover {
                    cursor: pointer;
                    color: blue;
                }
            }
        }
    }

    .content {
        width: 100%;
    }

    .resize {
        position: absolute;
        width: 15px;
        height: 15px;
        right: 0;
        bottom: 0;
        cursor: se-resize;
    }
}
</style>