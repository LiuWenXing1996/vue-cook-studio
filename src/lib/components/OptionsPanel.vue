<template>
    <div class="options-panel" v-if="componentSelected">
        <el-collapse v-model="activeNames">
            <el-collapse-item title="包裹器" name="wrapper">
                <!-- <EditorUi :config="editorConfig" v-for="editorConfig in wrapperAttrOptions"></EditorUi> -->
            </el-collapse-item>
            <el-collapse-item title="属性" name="prop">
                <EditorUi
                    :config="editorConfig"
                    :componentConfig="componentSelected"
                    v-for="editorConfig in propOptions"
                    :componentAttrType="'Prop'"
                ></EditorUi>
            </el-collapse-item>
            <el-collapse-item title="事件" name="event">
                <EditorUi
                    :config="editorConfig"
                    :componentConfig="componentSelected"
                    v-for="editorConfig in emitOptions"
                    :componentAttrType="'Event'"
                ></EditorUi>
            </el-collapse-item>
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
import EditorUi from "./Editor/EditorUi.vue"

const activeNames = ref<string[]>([])
const componentSelected = useComponentSelected() as Ref<ComponentConfig>
const maker = computed(() => findMaker(componentSelected.value)) as Ref<ComponentMaker>
const wrapperAttrOptions = computed(() => maker.value.wrapperAttrOptions(componentSelected.value))
const propOptions = computed(() => maker.value.propOptions(componentSelected.value))
const emitOptions = computed(() => maker.value.emitOptions(componentSelected.value))
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