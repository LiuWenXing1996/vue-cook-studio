<template>
    <div
        :class="[isV ? 'split-v-divider' : 'split-h-divider', isActived ? 'actived' : '']"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave"
        @mousedown="handleMousedown"
    ></div>
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
        first: {
            type: Object as () => IWindowConfig,
            required: true
        },
        second: {
            type: Object as () => IWindowConfig,
            required: true
        },
        parent: {
            type: Object as () => HTMLDivElement | null,
            required: true
        }
    }
)
const { first, second, isV, parent } = toRefs(props)

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
            const parentHeight = parent?.value?.clientHeight
            if (parentHeight) {
                first.value.height += e.movementY / parentHeight
                second.value.height -= e.movementY / parentHeight
            }

        } else {
            const parentWidth = parent?.value?.clientWidth
            if (parentWidth) {
                first.value.width += e.movementX / parentWidth
                second.value.width -= e.movementX / parentWidth
            }
        }
    }
}

const handleMouseup = () => {
    isMove.value = false
}

onMounted(() => {
    setTimeout(() => {

        console.log(parent.value)
    }, 1000)
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
    background-color: rgba(0, 0, 0, 0.1);
    &.actived {
        background-color: rgba(20, 23, 209, 0.568);
    }
}

.split-v-divider {
    height: 1px;
    width: 100%;
    margin-top: -1px;
    &.actived {
        height: 4px;
        margin: -2px 0;
    }
}
.split-h-divider {
    height: 100%;
    width: 1px;
    margin-left: -1px;
    &.actived {
        width: 4px;
        margin: 0 -2px;
    }
}
</style>