<template>
    <OperatePanel :component-config="rootAppConfig"></OperatePanel>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { OperatePanel, getComponentConfigDefault, useComponentMakerList, addMenuItem, useInspectList } from "../lib"
import useCompositionMakerList from "../lib/hooks/useCompositionMakerList";
import { RootAppMaker, VantButtonMaker, InputInspector, AddMaker,ConstAMaker,ConstBMaker } from "../packages/test-pkg"

const makerList = useComponentMakerList()
const compositionMakerList = useCompositionMakerList()
compositionMakerList.value.push(AddMaker)
compositionMakerList.value.push(ConstAMaker)
compositionMakerList.value.push(ConstBMaker)
makerList.value.push(RootAppMaker, VantButtonMaker)
const rootAppConfig = ref(getComponentConfigDefault(RootAppMaker))
const inspectorList = useInspectList()
inspectorList.value.push(InputInspector)
addMenuItem("编辑", {
    label: "sssss",
    children: [
        {
            label: "sssssssss"
        }
    ]
})
addMenuItem("编辑", {
    label: "sssstttttts",
    children: [
        {
            label: "sssssssss"
        }
    ]
})

addMenuItem("编辑", {
    label: "ssssddddddtttttts",
    children: [
        {
            label: "sssssssss",
            click: () => {
                alert('ssssdddddds')
            }
        }
    ]
})

addMenuItem("查看", {
    label: "ssssddddddtttttts",
    children: [
        {
            label: "sssssssss",
            click: () => {
                alert('ssss')
            }
        }
    ]
})
</script>
<style lang="less">
</style>