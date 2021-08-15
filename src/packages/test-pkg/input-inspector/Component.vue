<template>
    <n-input v-model:value="valueChangeable" type="text" placeholder="基本的 Input" />
</template>
<script lang="ts" setup>
import { NInput } from "naive-ui"
import { ref, watch } from "vue";
import { useComponentSelected } from "../../../lib";
const selected = useComponentSelected()

watch(selected, () => {
    valueChangeable.value = selected.value?.attrs?.props?.text || ''
})
const valueChangeable = ref("")

watch(valueChangeable, (newValue) => {
    if (selected.value?.attrs?.props) {
        if (selected.value.attrs.props.text !== newValue) {
            selected.value.attrs.props.text = newValue
        }

    }
})

</script>
<style lang="less" scoped>
</style>