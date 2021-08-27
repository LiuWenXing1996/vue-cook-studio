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
import type IWindowConfig from "../types/IWindowConfig";

const props = defineProps(
    {
        isV: {
            type: Boolean,
            required: true
        },
        firstIndex: {
            type: Number,
            required: true
        },
        secondIndex: {
            type: Number,
            required: true
        },
        divs: {
            type: Object as () => (any | null)[],
            required: true
        },
        winConfig: {
            type: Object as () => IWindowConfig,
            required: true
        }
    }
)
const { firstIndex, secondIndex, isV, divs, winConfig } = toRefs(props)

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
            const firstHeight = divs.value?.[firstIndex.value]?.el?.clientHeight
            const secondHeight = divs.value?.[secondIndex.value]?.el?.clientHeight
            const totalHeight = Number(firstHeight) + Number(secondHeight)
            if (totalHeight) {
                const first = winConfig.value?.childern?.[firstIndex.value]
                const second = winConfig.value?.childern?.[secondIndex.value]
                if (first && second) {
                    const targetFirstH = first.height + (e.movementY / totalHeight * 100)
                    const targetSecondH = second.height - (e.movementY / totalHeight * 100)
                    if (targetFirstH >= 10 && targetSecondH >= 10) {
                        first.height = targetFirstH
                        second.height = targetSecondH
                    }
                }
            }
        } else {
            const firstWidth = divs.value?.[firstIndex.value]?.el?.clientWidth
            const secondWidth = divs.value?.[secondIndex.value]?.el?.clientWidth
            const totalWidth = Number(firstWidth) + Number(secondWidth)
            if (totalWidth) {
                const first = winConfig.value?.childern?.[firstIndex.value]
                const second = winConfig.value?.childern?.[secondIndex.value]
                if (first && second) {
                    const targetFirstW = first.width + (e.movementX / totalWidth * 100)
                    const targetSecondW = second.width - (e.movementX / totalWidth * 100)
                    if (targetFirstW >= 10 && targetSecondW >= 10) {
                        first.width = targetFirstW
                        second.width = targetSecondW
                    }
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