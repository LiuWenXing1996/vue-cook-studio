<template>
    <div class="layout-wrapper">
        <n-layout position="absolute">
            <n-layout-header style="height: 64px; padding: 24px;" bordered>菜单栏</n-layout-header>
            <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px;">
                <n-layout-sider bordered content-style="padding: 24px;">
                    <resource-panel></resource-panel>
                </n-layout-sider>
                <n-layout content-style="padding: 24px;">
                    <div class="grid-wrapper">
                        <operate-grid></operate-grid>
                    </div>
                    <ComponentConfigRender :config="componentConfig"></ComponentConfigRender>
                </n-layout>
            </n-layout>
            <n-layout-footer bordered position="absolute" style="height: 64px; padding: 24px;">城府路</n-layout-footer>
        </n-layout>
    </div>
</template>
<script setup lang="ts">
import { NLayout, NLayoutSider, NLayoutHeader, NLayoutFooter } from "naive-ui"
import OperateGrid from "./OperateGrid.vue"
import ResourcePanel from "./ResourcePanel.vue";
import ComponentConfigRender from "./ComponentConfigRender.vue";
import type IComponentConfig from "../types/IComponentConfig";
import { toRefs } from "vue";

const props = defineProps(
    {
        componentConfig: {
            type: Object as () => IComponentConfig,
            required: true
        }
    }
)

const { componentConfig } = toRefs(props)
</script>
<style lang="less">
.layout-wrapper {
    height: 100%;
    position: relative;
    .grid-wrapper {
        position: absolute;
        width: calc(100% - 40px);
        height: calc(100% - 40px);
        top: 20px;
        left: 20px;
    }
}
</style>