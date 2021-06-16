<template>
    <div class="home">
        <Toolbar></Toolbar>
        <main>
            <section class="left">
                <ComponentList></ComponentList>
            </section>
            <section class="center">
                <div class="content" @drop="handleDrop" @dragover="handleDragOver">
                    <Editor />
                </div>
            </section>
            <section class="right">
                <el-tabs v-model="activeName">
                    <el-tab-pane label="属性" name="attr">
                        <!-- <AttrList v-if="curComponent" /> -->
                        <p class="placeholder">请选择组件</p>
                    </el-tab-pane>
                    <el-tab-pane label="动画" name="animation">
                        <!-- <AnimationList v-if="curComponent" /> -->
                        <p class="placeholder">请选择组件</p>
                    </el-tab-pane>
                    <el-tab-pane label="事件" name="events">
                        <!-- <EventList v-if="curComponent" /> -->
                        <p class="placeholder">请选择组件</p>
                    </el-tab-pane>
                </el-tabs>
            </section>
        </main>
    </div>
</template>
<script lang="ts" setup>
import Toolbar from "../components/Toolbar.vue"
import ComponentList from "../components/ComponentList.vue";
import useComponentData from "../hooks/useComponentData";
import Editor from "../components/Editor/Editor.vue";
import { ref } from "vue";
import useComponentMakerList from "../hooks/useComponentMakerList";
import type { ComponentConfig } from "../types/core";

const componentData = useComponentData();
const componentMakerList = useComponentMakerList();
const activeName = ref('attr')

const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const index = e.dataTransfer?.getData('index')
    if (!index) { return }
    const componentMaker = componentMakerList.value[parseInt(index)]
    let componentConfig = {
        props: Object.keys(componentMaker.propOptions || {}).reduce((prev, curr) => {
            if (componentMaker.propOptions![curr]?.defaultValue) {
                prev[curr] = componentMaker.propOptions![curr]?.defaultValue
            }
            return prev
        }, {} as Record<string, any>),
        component: componentMaker.component,
        maker: componentMaker
    } as ComponentConfig;
    // TODO:属性设置默认值
    // TODO:先不考虑这种结构“fsfs.fsfs.fsfs”
    componentData.value.push(componentConfig);
}

const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    if (e?.dataTransfer?.dropEffect) {
        e.dataTransfer.dropEffect = 'copy'
    }
}

</script>
<style lang="less" scoped>
.home {
    height: 100vh;
    background: #fff;
    main {
        height: calc(100% - 64px);
        position: relative;
        .left {
            position: absolute;
            height: 100%;
            width: 200px;
            left: 0;
            top: 0;
            padding-top: 10px;
        }
        .right {
            position: absolute;
            height: 100%;
            width: 262px;
            right: 0;
            top: 0;
            .placeholder {
                text-align: center;
                color: #333;
            }
        }
        .center {
            margin-left: 200px;
            margin-right: 262px;
            background: #f5f5f5;
            height: 100%;
            overflow: auto;
            padding: 20px;

            .content {
                width: 100%;
                height: 100%;
                overflow: auto;
            }
        }
    }
}
</style>