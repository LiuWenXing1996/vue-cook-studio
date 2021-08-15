<template>
    <n-dropdown
        :options="options"
        placement="bottom-start"
        trigger="hover"
        @select="handleSelect"
        v-for="(options,name) in optionsGroup"
    >
        <span style="padding-left: 10px;">{{ name }}</span>
    </n-dropdown>
</template>
  
  <script lang="ts" setup>
import { computed, h, ref } from 'vue'
import { NIcon, NDropdown, NButton } from 'naive-ui'
import type { DropdownOption } from 'naive-ui'
import { CashOutline as CashIcon } from '@vicons/ionicons5'
import useMenu from '../hooks/useMenu'
import type IMenuItem from '../types/IMenuItem'
import { uniqueId } from 'lodash-es'

const menu = useMenu()
const menuClickMap: Record<string, VoidFunction | undefined> = {};

const transMenuItem = (item: IMenuItem) => {
    const { label, click, children } = item;
    const key = uniqueId('menu_')
    const newItem: DropdownOption = {
        label,
        key: key
    }
    menuClickMap[key] = click;
    if (children && children.length > 0) {
        newItem.children = children.map(e => transMenuItem(e))
    }
    return newItem
}

const optionsGroup = computed(() => {
    const group: Record<string, DropdownOption[]> = {}
    const menuValue = menu.value
    for (const key in menuValue) {
        if (Object.prototype.hasOwnProperty.call(menuValue, key)) {
            const menuItemList = menuValue[key];
            group[key] = menuItemList.map(e => transMenuItem(e))
        }
    }
    return group
})
const handleSelect = (key: any) => { menuClickMap[key]?.() }
</script>