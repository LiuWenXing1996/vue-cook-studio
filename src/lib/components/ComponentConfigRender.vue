<template>
    <component
        v-if="maker"
        :is="maker.makeComponent(config)"
        v-bind="config?.attrs?.props"
        :class="[config?.attrs?.class]"
        :style="config?.attrs?.style"
    >
        <template v-for="(slot,name) in config?.attrs?.slots" v-slot:[name]>
            <component-config-render :config="_config" v-for="_config in slot"></component-config-render>
        </template>
    </component>
    <span v-else>{{ config.makerPackage }} - {{ config.makerName }}没有找到</span>
</template>
<script setup lang="ts">
import { computed, toRefs } from "vue";
import useComponentMaker from "../hooks/useComponentMaker";
import type IComponentConfig from "../types/IComponentConfig";

const props = defineProps(
    {
        config: {
            type: Object as () => IComponentConfig,
            required: true
        }
    }
)

const { config } = toRefs(props)
const maker = useComponentMaker(config.value.makerName, config.value.makerPackage)

</script>