<template>
    <div
        class="editor"
        :style="{
            width: canvasStyleData.width + 'px',
            height: canvasStyleData.height + 'px',
        }"
        @click="handleClick"
    >
        <GridVue />
        <ComponentRender :config="item" :is-edit="true" v-for="(item,index) in componentData" />
        <!-- <component v-for="(item,index) in componentData" :is="item.component" v-bind="item.props"></component> -->
    </div>
</template>
<script lang="ts" setup="">
import GridVue from "./Grid.vue";
import useCanvasStyleData from "../../hooks/useCanvasStyleData";
import useComponentData from "../../hooks/useComponentData";
import ComponentRender from "./ComponentRender.vue"
import useComponentSelected from "../../hooks/useComponentSelected";

const componentData = useComponentData();
const canvasStyleData = useCanvasStyleData();

const handleClick = () => {
    if (useComponentSelected().value) {
        useComponentSelected().value = undefined
    }
}

// 有一个栅格布局辅助界面布局，
// 如果没有嵌入到栅格布局组件里面，则按照自动的布局样式

</script>
<style lang="less" scoped>
.editor {
    position: relative;
    background: #fff;
    margin: auto;
}
</style>