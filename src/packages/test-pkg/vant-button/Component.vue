<template>
    <VantButton :text="text" @click="emits('click', text)"></VantButton>
</template>
<script lang="ts" setup>
import { defineProps, toRefs } from 'vue';
import VantButton from 'vant/es/button';
import 'vant/es/button/style';

const props = defineProps({
    text: String,
    count: Number
})
const emits = defineEmits(["click"])

const { text, count } = toRefs(props)


const dddd = () => {
    console.log(count?.value)
}

</script>
<style lang="less" scoped>
</style>