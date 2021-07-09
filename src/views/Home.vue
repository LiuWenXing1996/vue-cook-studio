<template>
    <div class="home">
        <Toolbar></Toolbar>
        <main>
            <section class="left">
                <ComponentList></ComponentList>
            </section>
            <section class="center">
                <ComponentWrapper :config="rootAppConfig" :is-edit="true" />
            </section>
            <section class="right">
                <AttrList v-if="componentSelected" />
                <p class="placeholder" v-else>请选择组件</p>
            </section>
        </main>
    </div>
</template>
<script lang="ts" setup>
import Toolbar from "../components/Toolbar.vue"
import ComponentList from "../components/ComponentList.vue";
import useComponentData from "../hooks/useComponentData";
import AttrList from "../components/AttrList/AttrList.vue";
import ComponentWrapper from "../components/ComponentWrapper.vue";
import { ref } from "vue";
import useComponentMakerList from "../hooks/useComponentMakerList";
import type { ComponentMaker } from "../types/core";
import useComponentSelected from "../hooks/useComponentSelected";
import useComponentConfigDefault from "../hooks/useComponentConfigDefault";

const componentData = useComponentData();
const componentMakerList = useComponentMakerList();
const activeName = ref('attr')
const componentSelected = useComponentSelected()

const rootAppMaker = useComponentMakerList().get("core-ui-root-app", "0.0.1") as ComponentMaker
const rootAppConfig = useComponentConfigDefault(rootAppMaker)

</script>
<style lang="less" scoped>
.home {
    height: 100vh;
    background: #fff;
    main {
        height: calc(100% - 64px);
        position: relative;
        .left {
            position: absolute;
            height: 100%;
            width: 200px;
            left: 0;
            top: 0;
            padding-top: 10px;
        }
        .right {
            position: absolute;
            height: 100%;
            width: 262px;
            right: 0;
            top: 0;
            .placeholder {
                text-align: center;
                color: #333;
            }
        }
        .center {
            margin-left: 200px;
            margin-right: 262px;
            background: #f5f5f5;
            height: 100%;
            overflow: auto;
            padding: 20px;
        }
    }
}
</style>