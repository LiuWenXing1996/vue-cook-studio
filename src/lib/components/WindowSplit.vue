// TODO:window 渲染器
<template>
    <div
        ref="parent"
        class="window-split"
        :style="{ width: toPercent(winConfig.width), height: toPercent(winConfig.height) }"
    >
        <template v-if="!hasChildren">
            <div class="header">
                <div class="title">{{ winConfig.title }}</div>
                <div class="actions">
                    <n-icon size="20">
                        <SplitHorizontal32Regular />
                    </n-icon>
                    <n-icon size="20">
                        <SplitVertical32Regular />
                    </n-icon>
                </div>
            </div>
            <div class="content">
                ssssss
                <!-- <component :is="window.component"></component> -->
            </div>
        </template>
        <template v-else>
            <template v-for="(_config,_index) in winConfig.childern">
                <window-split :win-config="_config"></window-split>
                <SplitDivider
                    :is-v="isV"
                    :first="getChild(_index)"
                    :second="getChild(_index + 1)"
                    :parent="parent"
                    v-if="_index < childrenLength"
                ></SplitDivider>
            </template>
        </template>
    </div>
</template>
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, toRefs } from "vue";
import { NIcon } from "naive-ui"
import SplitDivider from "./SplitDivider.vue"
import { SplitHorizontal32Regular, SplitVertical32Regular } from "@vicons/fluent"
import type IWindowConfig from "../types/IWindowConfig";

const props = defineProps(
    {
        winConfig: {
            type: Object as () => IWindowConfig,
            required: true
        }
    }
)
// TODO:在divider中传入所有的children和children ref div
// 参考vue官方例子：https://v3.cn.vuejs.org/guide/composition-api-template-refs.html#v-for-%E4%B8%AD%E7%9A%84%E7%94%A8%E6%B3%95
onMounted(()=>{
    console.log(parent.value) 
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
        padding: 0 10px;
        line-height: 50px;
        border-bottom: 1px solid #f0f0f0;
        font-size: 14px;
        color: #333;
        display: flex;
        align-items: center;
        border-radius: 2px 2px 0 0;
        .title {
            flex-grow: 1;
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