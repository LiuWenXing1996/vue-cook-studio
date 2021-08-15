<template>
    <inspector-render v-for="l in list" :inspector="l"></inspector-render>
</template>
<script setup lang="ts">

import useInspectorList from "../hooks/useInspectList";
import InspectorRender from "./InspectorRender.vue"

const list = useInspectorList();
</script>
<style lang="less">
</style>