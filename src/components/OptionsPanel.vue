<template>
    <div class="options-panel" v-if="componentSelected">
        <el-collapse v-model="activeNames">
            <el-collapse-item title="包裹器" name="wrapper">
                <div
                    v-for="wrapperAttrOption in wrapperAttrOptions"
                >{{ wrapperAttrOption.name }}:{{ wrapperAttrOption.editorConfig.value }}</div>
            </el-collapse-item>
            <el-collapse-item title="属性" name="prop"></el-collapse-item>
            <el-collapse-item title="插槽" name="slot"></el-collapse-item>
            <el-collapse-item title="动画" name="animation"></el-collapse-item>
        </el-collapse>
    </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue"
import type { Ref } from "vue"
import { findMaker } from "./ComponentMaker/utils"
import { useComponentSelected } from "./ComponentWrapper/hooks"
import type { ComponentConfig } from "./ComponentWrapper/types"
import type { ComponentMaker } from "./ComponentMaker/types"

const activeNames = ref<string[]>([])
const componentSelected = useComponentSelected() as Ref<ComponentConfig>
const maker = computed(() => findMaker(componentSelected.value)) as Ref<ComponentMaker>
const wrapperAttrOptions = computed(() => maker.value.wrapperAttrOptions(componentSelected.value))

// TODO:属性编辑实现

</script>
<style lang="less" scoped>
.options-panel {
    overflow: auto;
    padding: 20px;
    padding-top: 0;
    height: 100%;
}
</style>