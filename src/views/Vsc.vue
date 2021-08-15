<template>
    <OperatePanel :component-config="rootAppConfig"></OperatePanel>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { OperatePanel, getComponentConfigDefault, useComponentMakerList,addMenuItem } from "../lib"
import { RootAppMaker,VantButtonMaker} from "../packages/test-pkg"

const makerList = useComponentMakerList()
makerList.value.push(RootAppMaker,VantButtonMaker)
const rootAppConfig = ref(getComponentConfigDefault(RootAppMaker))
addMenuItem("编辑",{
    label:"sssss",
    children:[
        {
            label:"sssssssss"
        }
    ]
})
addMenuItem("编辑",{
    label:"sssstttttts",
    children:[
        {
            label:"sssssssss"
        }
    ]
})

addMenuItem("编辑",{
    label:"ssssddddddtttttts",
    children:[
        {
            label:"sssssssss",
            click:()=>{
                alert('ssssdddddds')
            }
        }
    ]
})

addMenuItem("查看",{
    label:"ssssddddddtttttts",
    children:[
        {
            label:"sssssssss",
            click:()=>{
                alert('ssss')
            }
        }
    ]
})
</script>
<style lang="less">
</style>