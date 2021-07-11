<template>
    <div class="home">
        <Toolbar></Toolbar>
        <main>
            <section class="left">
                <ComponentMakerList></ComponentMakerList>
            </section>
            <section class="center">
                <ComponentWrapper :config="rootAppConfig" :is-edit="true" />
            </section>
            <section class="right">
                <OptionsPanel v-if="componentSelected" />
                <p class="placeholder" v-else>请选择组件</p>
            </section>
        </main>
    </div>
</template>
<script lang="ts" setup>
import Toolbar from "../components/Toolbar.vue"
import ComponentMakerList from "../components/ComponentMaker/ComponentMakerList.vue";
import OptionsPanel from "../components/OptionsPanel.vue";
import ComponentWrapper from "../components/ComponentWrapper/ComponentWrapper.vue";
import { useComponentMakerList } from "../components/ComponentMaker/hooks";
import type { ComponentMaker } from "../components/ComponentMaker/types";
import useComponentSelected from "../hooks/useComponentSelected";
import { getComponentConfigDefault } from "../components/ComponentMaker/utils";

// TODO:根应用app组件也提出来
const componentSelected = useComponentSelected()
const rootAppMaker = useComponentMakerList().get("core-ui-root-app", "0.0.1") as ComponentMaker
const rootAppConfig = getComponentConfigDefault(rootAppMaker)

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