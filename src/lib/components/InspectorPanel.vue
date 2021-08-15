<template>
    <n-collapse>
        <n-collapse-item
            :title="inspector.label"
            :name="inspector.name"
            v-for="inspector in inpectorList"
        >
            <component :is="inspector.component"></component>
        </n-collapse-item>
    </n-collapse>
</template>
<script setup lang="ts">
import { NCollapse, NCollapseItem } from "naive-ui"
import useInspectList from "../hooks/useInspectList";

const inpectorList = useInspectList();
</script>
<style lang="less">
</style>