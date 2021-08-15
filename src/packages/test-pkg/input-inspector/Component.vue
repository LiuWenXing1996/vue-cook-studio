<template>
<n-input v-model:value="value" type="text" placeholder="基本的 Input" />
</template>
<script lang="ts" setup>
import {NInput} from "naive-ui"
import { ref } from "vue";
const value=ref("")
</script>
<style lang="less" scoped>

</style>