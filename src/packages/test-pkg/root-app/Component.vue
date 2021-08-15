<template>
    <div class="root-app">
        <slot></slot>
        <FF></FF>
    </div>
</template>
<script lang="ts" setup>
import FF from "./FF.vue"
</script>
<style lang="less" scoped>
.root-app {
    width: 100%;
    height: 100%;
    position: relative;
}
</style>