// TODO：多窗口布局实现
<template>
    <div style="width: 100%;height: 100%;">
        <split-window :config="config"></split-window>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
import type IWindowConfig from "../types/IWindowConfig";
import WindowSplit from "./WindowSplit.vue";
import SplitWindow from "./SplitWindow.vue"
import type ISplitWindowConfig from "../types/ISplitWindowConfig";
const config = ref<ISplitWindowConfig>({
    width: 100,
    height: 100,
    innerWindows: []
})

</script>
<style lang="less">
</style>