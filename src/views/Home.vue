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
            <section class="right"></section>
        </main>
    </div>
</template>
<script lang="ts" setup>
import Toolbar from "../components/Toolbar.vue"
import ComponentList from "../components/ComponentList.vue";
import componentList from "../custom-components/list";
import useComponentData from "../hooks/useComponentData";
import Editor from "../components/Editor/Editor.vue";

console.log(Editor)
const componentData = useComponentData();

const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const index = e.dataTransfer?.getData('index')
    if (!index) { return }
    const component = componentList[parseInt(index)]
    componentData.value.push(component);
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