<template>
    <div class="editor">
        <component v-for="(item,index) in componentData" :is="item.component"></component>
    </div>
</template>
<script lang="ts" setup="">
import { watch } from "vue";
import useComponentData from "../../hooks/useComponentData";

const componentData = useComponentData();
watch(componentData, (value) => {
    debugger;
    console.log(value);
})

</script>
<style lang="less" scoped>
.editor {
    position: relative;
    background: #fff;
    margin: auto;
}
</style>