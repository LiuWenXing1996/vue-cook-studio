<template>
    <n-collapse>
        <n-collapse-item title="青铜" name="1">
            <component-maker v-for="maker in makerList" :maker="maker"></component-maker>
        </n-collapse-item>
        <n-collapse-item title="白银" name="2">
            <div>很好</div>
        </n-collapse-item>
        <n-collapse-item title="黄金" name="3">
            <div>真棒</div>
        </n-collapse-item>
    </n-collapse>
</template>
<script setup lang="ts">
import { NCollapse, NCollapseItem } from "naive-ui"
import useComponentMakerList from "../hooks/useComponentMakerList";
import ComponentMaker from "./ComponentMaker.vue";
const makerList = useComponentMakerList();
</script>
<style lang="less">
</style>