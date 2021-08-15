// TODO:inspector 渲染器
<template>
    <div class="inspector-render">
        <div class="header" @mousemove="handleMove" @mousedown="handleDown" @mouseup="handleUp">
            <button>关闭</button>
            <button>固定</button>
        </div>
        <div class="content">
            <component :is="inspector.component"></component>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, ref, toRefs } from "vue";
import type IInspector from "../types/IInspector";

const props = defineProps(
    {
        inspector: {
            type: Object as () => IInspector,
            required: true
        }
    }
)

const { inspector } = toRefs(props)

const left = ref(12);
const leftPx = computed(() => `${left.value}px`)
const top = ref(20);
const topPx = computed(() => `${top.value}px`)
const isSelected = ref(false);
const handleDown = (e: MouseEvent) => {
    isSelected.value = true
}
const handleUp = (e: MouseEvent) => {
    isSelected.value = false
}
const handleMove = (e: MouseEvent) => {
    if (isSelected.value) {
        left.value = left.value + e.movementX
        top.value = top.value + e.movementY
    }
}
</script>
<style lang="less">
.inspector-render {
    position: fixed;
    top: v-bind(topPx);
    left: v-bind(leftPx);
    display: flex;
    z-index: 1;
    flex-direction: column;
    border: red 1px solid;
    .header {
        height: 100px;
        width: 100px;
        &:hover {
            cursor: pointer;
        }
    }
}
</style>