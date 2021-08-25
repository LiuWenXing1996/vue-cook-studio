// TODO：多窗口布局实现
<template>
    <div style="width: 100%;height: 100%;">
        <window-split :win-config="winConfig"></window-split>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
import type IWindowConfig from "../types/IWindowConfig";
import WindowSplit from "./WindowSplit.vue";
const winConfig = ref<IWindowConfig>({
    width: 100,
    height: 100,
    title: "dddd0",
    childern: [
        {
            width: 100 / 3,
            height: 100,
            title: "dddd0",
        },
        {
            width: 100 / 3,
            height: 100,
            title: "dddd0",
        },
        {
            width: 100 / 3,
            height: 100,
            title: "dddd0",
        },
    ]
})

</script>
<style lang="less">
</style>