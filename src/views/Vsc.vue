<template>
    <OperatePanel :component-config="rootAppConfig"></OperatePanel>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { OperatePanel, getComponentConfigDefault, useComponentMakerList } from "../lib"
import { RootAppMaker } from "../packages/test-pkg"

const makerList = useComponentMakerList()
makerList.value.push(RootAppMaker)
const rootAppConfig = ref(getComponentConfigDefault(RootAppMaker))
</script>
<style lang="less">
</style>