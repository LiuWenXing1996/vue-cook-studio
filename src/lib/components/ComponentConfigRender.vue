<template>
    <component
        v-if="maker"
        :is="maker.makeComponent"
        v-bind="attrs?.props"
        v-on="attrs?.emits"
        :class="[attrs?.class]"
        :style="attrs?.style"
    >
        <template v-for="(slot,name) in attrs?.slots" v-slot:[name]>
            <component-config-render :config="config" v-for="config in slot"></component-config-render>
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
const attrs = computed(() => maker.value?.makeAttrs?.(config.value))

</script>