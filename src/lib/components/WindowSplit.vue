// TODO:window 渲染器
<template>
    <div
        ref="el"
        class="window-split"
        :style="{ width: toPercent(winConfig.width), height: toPercent(winConfig.height) }"
    >
        <template v-if="!hasChildren">
            <div class="header">
                <div class="title">
                    <div
                        v-for="innerWin in winConfig.innerWins"
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
                    <n-icon size="20" title="关闭所有" class="icon" @click="closeAll">
                        <CloseOutline></CloseOutline>
                    </n-icon>
                </div>
            </div>
            <div class="content">
                {{ showingInnerWin?.content }}
                <!-- <component :is="window.component"></component> -->
            </div>
        </template>
        <template v-else>
            <template v-for="(_config,_index) in winConfig.childern">
                <window-split :win-config="_config" :ref="el => { if (el) divs[_index] = el }"></window-split>
                <SplitDivider
                    :is-v="isV"
                    :first-index="_index"
                    :second-index="_index + 1"
                    :divs="divs"
                    :win-config="winConfig"
                    v-if="_index < childrenLength - 1"
                ></SplitDivider>
            </template>
        </template>
    </div>
</template>
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, toRefs, onBeforeUpdate, watchPostEffect, defineExpose } from "vue";
import type { Ref, VNode } from "vue";
import { NIcon } from "naive-ui"
import SplitDivider from "./SplitDivider.vue"
import { SplitHorizontal32Regular, SplitVertical32Regular } from "@vicons/fluent"
import { CloseOutline } from "@vicons/ionicons5"
import type IWindowConfig from "../types/IWindowConfig";

const props = defineProps(
    {
        winConfig: {
            type: Object as () => IWindowConfig,
            required: true
        }
    }
)
const el = ref(null)
const divs = ref<any>([])

defineExpose({
    el: el
})

const splitH = () => {
    winConfig.value.childern = [
        {
            width: 100 / 2,
            height: 100,
            title: "dddd0",
        },
        {
            width: 100 / 2,
            height: 100,
            title: "dddd0",
        },
    ]
}
const splitV = () => {
    winConfig.value.childern = [
        {
            width: 100,
            height: 100 / 2,
            title: "dddd0",
        },
        {
            width: 100,
            height: 100 / 2,
            title: "dddd0",
        }
    ]
}
const closeAll = () => {

}

const closeInnerWin = (innerWin: IWindowConfig) => {
    winConfig.value.innerWins = winConfig.value.innerWins.filter(e => e === innerWin)
}

const showingInnerWin = ref<IWindowConfig>()
const showInnerWin = (innerWin: IWindowConfig) => {
    showingInnerWin.value = innerWin
}

// 确保在每次更新之前重置ref
// onBeforeUpdate(() => {
//     divs.value = []
// })
// TODO:在divider中传入所有的children和children ref div
// 参考vue官方例子：https://v3.cn.vuejs.org/guide/composition-api-template-refs.html#v-for-%E4%B8%AD%E7%9A%84%E7%94%A8%E6%B3%95
onMounted(() => {
    // console.log(divs.value)
})
const parent = ref(null)
const getChild = (index: number) => {
    return winConfig.value?.childern?.[index] as IWindowConfig
}

const toPercent = (n: number) => `${n}%`
const { winConfig } = toRefs(props)
const isV = computed(() => {
    if (hasChildren.value) {
        if (winConfig.value?.childern?.[0].height === 100) {
            return false
        }
    }
    return true
})
const flexDirection = computed(() => {
    return isV.value ? "column" : "row"
})
const childrenLength = computed(() => {
    return winConfig.value?.childern?.length || 0
})
const hasChildren = computed(() => {
    if (!winConfig.value.childern) {
        return false
    }
    if (winConfig.value.childern.length <= 0) {
        return false
    }
    return true
})


</script>
<style lang="less" scoped>
.window-split {
    display: flex;
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