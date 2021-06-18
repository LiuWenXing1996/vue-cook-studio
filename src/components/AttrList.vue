<template>
    <div class="attr-list" v-if="componentSelected">
        <el-form label-width="80px">
            <el-form-item
                v-for="(item,index) in componentSelected.maker.propOptions"
                :key="index"
                :label="item.label"
            >
                <el-input v-model="componentSelected.props[index]"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang="ts" setup>
import useComponentSelected from "../hooks/useComponentSelected";

const componentSelected = useComponentSelected()
</script>
<style lang="less" scoped>
.attr-list {
    overflow: auto;
    padding: 20px;
    padding-top: 0;
    height: 100%;
}
</style>