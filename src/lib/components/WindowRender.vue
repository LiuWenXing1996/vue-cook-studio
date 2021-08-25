// TODO:window 渲染器
<template>
    <div class="window-render">
        <div class="header" @mousedown="moveHandle.mouseDown">
            <div class="title">fshdkfhsdkgfhjsd</div>
            <div class="actions">
                <n-icon size="20">
                    <CloseOutline />
                </n-icon>
                <n-icon size="20">
                    <PushpinOutlined />
                </n-icon>
            </div>
        </div>
        <div class="content">
            ssssss
            <!-- <component :is="window.component"></component> -->
        </div>
        <span class="resize" @mousedown="resizeHandle.mouseDown"></span>
    </div>
</template>
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, toRefs } from "vue";
import type IInspector from "../types/IInspector";
import { NIcon } from "naive-ui"
import { CloseOutline } from '@vicons/ionicons5'
import { PushpinOutlined } from "@vicons/antd"

// const props = defineProps(
//     {
//         window: {
//             type: Object as () => IInspector,
//             required: true
//         }
//     }
// )

// const { window } = toRefs(props)

const left = ref(12);
const leftPx = computed(() => `${left.value}px`)
const top = ref(20);
const topPx = computed(() => `${top.value}px`)
const width = ref(100);
const widthPx = computed(() => `${width.value}px`)
const height = ref(100);
const heightPx = computed(() => `${height.value}px`)
const isSelected = ref(false);
const isResizing = ref(false);

const resizeHandle = {
    mouseDown: (e: MouseEvent) => {
        isResizing.value = true
    },
    mouseMove: (e: MouseEvent) => {
        if (isResizing.value) {
            const targetWidthValue = width.value + e.movementX;
            width.value = targetWidthValue < 100 ? width.value : targetWidthValue
            const targetHeightValue = height.value + e.movementY;
            height.value = targetHeightValue < 100 ? height.value : targetHeightValue
        }
    },
    mouseUp: (e: MouseEvent) => {
        isResizing.value = false
    }
}

const moveHandle = {
    mouseDown: (e: MouseEvent) => {
        isSelected.value = true
    },
    mouseMove: (e: MouseEvent) => {
        if (isSelected.value) {
            left.value = left.value + e.movementX
            top.value = top.value + e.movementY
        }
    },
    mouseUp: (e: MouseEvent) => {
        isSelected.value = false
    }
}

onMounted(() => {
    window.addEventListener("mousemove", moveHandle.mouseMove)
    window.addEventListener("mouseup", moveHandle.mouseUp)
    window.addEventListener("mousemove", resizeHandle.mouseMove)
    window.addEventListener("mouseup", resizeHandle.mouseUp)
})
onUnmounted(() => {
    window.removeEventListener("mousemove", moveHandle.mouseMove)
    window.removeEventListener("mouseup", moveHandle.mouseUp)
    window.removeEventListener("mousemove", resizeHandle.mouseMove)
    window.removeEventListener("mouseup", resizeHandle.mouseUp)
})
</script>
<style lang="less" scoped>
.window-render {
    position: fixed;
    top: v-bind(topPx);
    left: v-bind(leftPx);
    width: v-bind(widthPx);
    height: v-bind(heightPx);
    display: flex;
    z-index: 1;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 1px 1px 5px rgb(0 0 0 / 20%);
    .header {
        width: 100%;
        height: 30px;
        padding: 0 10px;
        line-height: 50px;
        border-bottom: 1px solid #f0f0f0;
        font-size: 14px;
        color: #333;
        display: flex;
        align-items: center;
        border-radius: 2px 2px 0 0;
        &:hover {
            cursor: move;
        }
        .title {
            flex-grow: 1;
        }
    }

    .content {
        width: 100%;
    }

    .resize {
        position: absolute;
        width: 15px;
        height: 15px;
        right: 0;
        bottom: 0;
        cursor: se-resize;
    }
}
</style>