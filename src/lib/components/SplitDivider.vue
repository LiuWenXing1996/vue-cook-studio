<template>
    <div
        :class="[isV ? 'split-v-divider' : 'split-h-divider', isActived ? 'actived' : '', isMove ? 'move' : '']"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave"
        @mousedown="handleMousedown"
    >
        <div class="inner-bar"></div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRefs } from "vue";
import type ISplitWindowConfig from "../types/ISplitWindowConfig";
import type IWindowConfig from "../types/IWindowConfig";
import type { exposeType } from "./SplitWindow.vue"

const props = defineProps(
    {
        isV: {
            type: Boolean,
            required: true
        },
        firstConfig: {
            type: Object as () => ISplitWindowConfig,
            required: true
        },
        firstRef: {
            type: Object as () => exposeType | null,
            required: true
        },
        secondConfig: {
            type: Object as () => ISplitWindowConfig,
            required: true
        },
        secondRef: {
            type: Object as () => exposeType | null,
            required: true
        },
    }
)
const { isV, firstConfig, firstRef, secondConfig, secondRef } = toRefs(props)

const isActived = ref(false)
const isMove = ref(false)

const handleMouseenter = () => {
    isActived.value = true
}

const handleMouseleave = () => {
    isActived.value = false
}

const handleMousedown = () => {
    isMove.value = true
}

const handleMouseMove = (e: MouseEvent) => {
    if (isMove.value) {
        if (isV.value) {
            const firstHeight = firstRef.value?.el.clientHeight
            const secondHeight = secondRef.value?.el.clientHeight
            const totalHeight = Number(firstHeight) + Number(secondHeight)
            if (totalHeight) {
                const targetFirstH = firstConfig.value.height + (e.movementY / totalHeight * 100)
                const targetSecondH = secondConfig.value.height - (e.movementY / totalHeight * 100)
                if (targetFirstH >= 10 && targetSecondH >= 10) {
                    firstConfig.value.height = targetFirstH
                    secondConfig.value.height = targetSecondH
                }
            }
        } else {
            const firstWidth = firstRef.value?.el.clientWidth
            const secondWidth = secondRef.value?.el.clientWidth
            const totalWidth = Number(firstWidth) + Number(secondWidth)
            if (totalWidth) {
                const targetFirstW = firstConfig.value.width + (e.movementX / totalWidth * 100)
                const targetSecondW = secondConfig.value.width - (e.movementX / totalWidth * 100)
                if (targetFirstW >= 10 && targetSecondW >= 10) {
                    firstConfig.value.width = targetFirstW
                    secondConfig.value.width = targetSecondW
                }
            }
        }
    }
}

const handleMouseup = () => {
    isMove.value = false
}

onMounted(() => {
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseup)
})
onUnmounted(() => {
    window.removeEventListener("mousemove", handleMouseMove)
    window.removeEventListener("mouseup", handleMouseup)
})
</script>
<style lang="less" scoped>
.split-v-divider,
.split-h-divider {
    // background-color: rgba(0, 0, 0, 0.1);
    &.actived,
    &.move {
        background-color: rgba(20, 23, 209, 0.568);
    }
}

.split-v-divider {
    height: 5px;
    width: 100%;
    padding: 2px 0;
    .inner-bar {
        height: 1px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.1);
    }
    &.actived,
    &.move {
        cursor: ns-resize;
    }
}
.split-h-divider {
    height: 100%;
    width: 5px;
    padding: 0 2px;
    .inner-bar {
        height: 100%;
        width: 1px;
        background-color: rgba(0, 0, 0, 0.1);
    }
    &.actived,
    &.move {
        cursor: ew-resize;
    }
}
</style>