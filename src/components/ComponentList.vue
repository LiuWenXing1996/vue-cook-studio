<template>
    <div class="component-list" @dragstart="handleDragStart">
        <div
            v-for="(item, index) in componentList"
            :key="index"
            class="list"
            draggable="true"
            :data-index="index"
        >
            <span class="iconfont" :class="'icon-' + item.icon"></span>
            <span>{{ item.label }}</span>
        </div>
    </div>
</template>
<script lang="ts" setup>
import componentList from '../custom-components/list'
const handleDragStart = (e: DragEvent) => {
    if (!(e.target instanceof HTMLDivElement)) {
        return;
    }
    if (!e?.target?.dataset?.index) {
        return;
    }
    e?.dataTransfer?.setData('index', e?.target?.dataset?.index)
}

const s = () => {
    debugger;
}
</script>
<style lang="less" scoped>
.component-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;

    .list {
        width: 45%;
        border: 1px solid #ddd;
        cursor: grab;
        margin-bottom: 10px;
        text-align: center;
        color: #333;
        padding: 2px 5px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:active {
            cursor: grabbing;
        }

        .iconfont {
            margin-right: 4px;
            font-size: 20px;
        }

        .icon-wenben,
        .icon-tupian {
            font-size: 18px;
        }
    }
}
</style>