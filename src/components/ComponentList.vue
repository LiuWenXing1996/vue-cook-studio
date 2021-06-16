<template>
    <div class="component-list" @dragstart="handleDragStart">
        <div
            v-for="(item, index) in componentMakerList"
            :key="index"
            class="list"
            draggable="true"
            :data-index="index"
            :data-label="item.label"
        >
            <component :is="item.preview"></component>
        </div>
    </div>
</template>
<script lang="ts" setup>
import useComponentMakerList from "../hooks/useComponentMakerList";
const componentMakerList = useComponentMakerList();
const handleDragStart = (e: DragEvent) => {
    if (!(e.target instanceof HTMLDivElement)) {
        return;
    }
    if (!e?.target?.dataset?.index) {
        return;
    }
    e?.dataTransfer?.setData('index', e?.target?.dataset?.index)
}
</script>
<style lang="less" scoped>
.component-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;

    .list {
        position: relative;
        width: calc(100% - 20px);
        margin-left: 10px;
        border: solid 3px #ebeef5;
        margin-top: 20px;
        min-height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 5px;
        box-sizing: border-box;
        &:hover {
            border-color: #409eff;
            cursor: move;
        }
        &:last-of-type {
            margin-bottom: 20px;
        }
        &::before {
            content: attr(data-label);
            position: absolute;
            top: -3px;
            left: -3px;
            background-color: #409eff;
            color: white;
            padding: 4px 8px;
            font-size: 12px;
            z-index: 1;
        }
        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 2;
        }
    }
}
</style>