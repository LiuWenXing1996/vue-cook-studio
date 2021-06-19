<template>
    <VantRow>
        <VantCol span="8"><slot name="header"></slot></VantCol>
        <VantCol span="8">span: 8</VantCol>
        <VantCol span="8"><slot name="footer"></slot></VantCol>
    </VantRow>
</template>
<script lang="ts" setup>
import { defineProps } from '@vue/runtime-core';
import VantRow from 'vant/es/row';
import VantCol from 'vant/es/col';
import 'vant/es/row/style';
import 'vant/es/col/style';


</script>
<style lang="less" scoped>
</style>