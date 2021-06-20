<template>
    <el-table :data="propOption.slotOptions" style="width: 100%">
        <el-table-column label="插槽名称">
            <template #default="scope">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </template>
        </el-table-column>
        <el-table-column label="组件uid">
            <template #default="scope">
                <div
                    size="medium"
                >{{ getUid(scope.row.name) }}</div>
            </template>
        </el-table-column>
    </el-table>
</template>
<script lang="ts" setup>
import { defineProps } from "@vue/runtime-core";
import { toRefs } from "vue";
import type { ComponentConfig, ComponentPropOptionEdited, ComponentPropOptionSelect, componentPropOptionSlot, ComponentPropOptionSlotEdited } from "../../types/core";

const props = defineProps<{ componentSelected: ComponentConfig, propKey: string }>()
const { componentSelected, propKey } = toRefs(props)

const propOptionEdited = componentSelected.value.propOptionEditedList.find(e => e.key === propKey.value) as ComponentPropOptionSlotEdited
const propOption = componentSelected.value.maker.propOptions.find(e => e.key === propKey.value) as componentPropOptionSlot

const getUid = (slotName: string) => {
    return propOptionEdited.value.find(e => e.name === slotName)?.config?.uid

}

</script>
<style lang="less" scoped>
</style>