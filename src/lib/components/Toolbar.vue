<template>
    <div class="toolbar">
        <button>撤发消</button>
        <div class="canvas-config">
            <span>画布大小</span>
            <input v-model="canvasStyleData.width" />
            <span>*</span>
            <input v-model="canvasStyleData.height" />
        </div>
        <!-- <div class="canvas-config">
            <span>画布比例</span>
            <input v-model="scale" @input="handleScaleChange" /> %
        </div>-->
    </div>
</template>
<script lang="ts" setup>
import useCanvasStyleData from "../hooks/useCanvasStyleData";

const canvasStyleData = useCanvasStyleData();
</script>
<style lang="less" scoped>
.toolbar {
    height: 64px;
    line-height: 64px;
    background: #fff;
    border-bottom: 1px solid #ddd;
    .canvas-config {
        display: inline-block;
        margin-left: 10px;
        font-size: 14px;
        color: #606266;

        input {
            width: 50px;
            margin-left: 10px;
            outline: none;
            padding: 0 5px;
            border: 1px solid #ddd;
            color: #606266;
            line-height: normal;
        }

        span {
            margin-left: 10px;
        }
    }
}
</style>