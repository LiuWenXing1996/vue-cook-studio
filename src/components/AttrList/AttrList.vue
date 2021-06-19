<template>
    <div class="attr-list" v-if="componentSelected">
        <el-form label-width="80px">
            <el-form-item
                v-for="(item,index) in componentSelected.maker.propOptions"
                :key="index"
                :label="item.label"
            >
                <component
                    :is="propOptionComponentsMap[item.type]"
                    :componentSelected="componentSelected"
                    :propKey="item.key"
                ></component>
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang="ts" setup>
import useComponentSelected from "../../hooks/useComponentSelected";
import AttrOptionInput from "./AttrOptionInput.vue";
import AttrOptionSelect from "./AttrOptionSelect.vue";
import { ComponentPropOptionType } from "../../types/core.d"

const propOptionComponentsMap = {
    [ComponentPropOptionType.input]: AttrOptionInput,
    [ComponentPropOptionType.select]: AttrOptionSelect,
    [ComponentPropOptionType.slot]:AttrOptionSelect
}
// TODO:实现其他的属性选项输入框。。
// TODO:在组建修改后，再次选中的时候，属性要保持修改后的，layout

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