<template>
    <VantButton :text="text" @click="dddd"></VantButton>
</template>
<script lang="ts" setup>
import { defineProps } from '@vue/runtime-core';
import VantButton from 'vant/es/button';
import 'vant/es/button/style';

const dddd=()=>{
    console.log("dddddd")
}

defineProps({
    text: String
})

</script>
<style lang="less" scoped>
</style>