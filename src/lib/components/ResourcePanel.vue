<template>
    <n-collapse>
        <n-collapse-item :title="name.toString()" :name="name" v-for="(list,name) in makerGroup">
            <component-maker v-for="maker in list" :maker="maker"></component-maker>
        </n-collapse-item>
    </n-collapse>
</template>
<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import { groupBy } from "lodash-es";
import { NCollapse, NCollapseItem } from "naive-ui"
import useComponentMakerList from "../hooks/useComponentMakerList";
import ComponentMaker from "./ComponentMaker.vue";
const makerList = useComponentMakerList();
const makerGroup = computed(() => {
    return groupBy(makerList.value, "package")
})
</script>
<style lang="less">
</style>