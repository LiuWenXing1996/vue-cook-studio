<template>
    <div style="position: fixed;left: 10px;bottom: 10px;">
        <button @click="run" style="position: absolute;left: 10px;bottom: 10px;z-index: 1;">运行</button>
        <div style="width: 100px;">
            <CompositionMaker v-for="maker in compositionMakerList" :maker="maker">
                {{
                    maker.name
                }}
            </CompositionMaker>
        </div>
        <div id="container" @drop="handleDrop" @dragover="handleDragOver"></div>
    </div>
</template>
<script setup lang="ts">
import { Graph, Model, Node } from '@antv/x6';
import { computed, onMounted, ref, toRefs, watch } from 'vue';
import useCompositionMaker from '../hooks/useCompositionMaker';
import useCompositionMakerList from '../hooks/useCompositionMakerList';
import useData from '../hooks/useData';
import composer from '../utils/composer';
import CompositionMaker from './CompositionMaker.vue';
import getCompositionConfigDefault from '../utils/getCompositionConfigDefault';
import type ICompositionConfig from '../types/ICompositionConfig';

const props = defineProps(
    {
        config: {
            type: Object as () => ICompositionConfig
        }
    }
)
const { config } = toRefs(props)
const configChageable = ref(config?.value)
let graph: Graph;
const compositionMakerList = useCompositionMakerList()

const run = () => {
    const ss = composer(configChageable.value)
    alert(ss)
}

const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    if (e?.dataTransfer?.dropEffect) {
        e.dataTransfer.dropEffect = 'copy'
    }
}

const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const makerName = e.dataTransfer?.getData('name')
    if (!makerName) {
        return;
    }
    const maker = useCompositionMaker(makerName)
    if (!maker.value) {
        return;
    }
    const config = getCompositionConfigDefault(maker.value);
    if (!configChageable.value) {
        configChageable.value = config
    }
    const node = configToNode(config)
    if (node) {
        graph.addNode(node)
    }
}

const configToNode = (config: ICompositionConfig): Node | undefined => {
    const maker = useCompositionMaker(config.maker)
    if (!maker.value) {
        return
    }
    const makerValue = maker.value
    let groups = {
        in: {
            position: {
                name: 'top',
            },
            attrs: {
                portBody: {
                    magnet: 'passive',
                    r: 6,
                    stroke: '#ffa940',
                    fill: '#fff',
                    strokeWidth: 2,
                },
            },
        },
        out: {
            position: {
                name: 'bottom',
            },
            attrs: {
                portBody: {
                    magnet: true,
                    r: 6,
                    fill: '#fff',
                    stroke: '#3199FF',
                    strokeWidth: 2,
                },
            },
        },
    }
    let inKeys = Object.keys(makerValue.args)

    let inPort = inKeys.map((key) => {
        let portId = `in-port-${key}`;
        // edges.push({
        //     source: { cell: a, port: 'out-port' }, // 目标节点 ID 和链接桩 ID
        //     target: { cell: e.uid, port: portId },  // 源节点和链接桩 ID
        // })
        return {
            id: portId,
            group: 'in',
        }
    }) || [];
    let outPort = {
        id: `out-port`,
        group: 'out',
    };
    return {
        id: config.uid,// String，可选，节点的唯一标识
        x: 40,       // Number，必选，节点位置的 x 值
        y: 40,       // Number，必选，节点位置的 y 值
        width: 80,   // Number，可选，节点大小的 width 值
        height: 40,  // Number，可选，节点大小的 height 值
        label: config.maker, // String，节点标签
        ports: {
            groups,
            items: [
                ...inPort,
                outPort
            ]
        },
        portMarkup: [
            {
                tagName: 'circle',
                selector: 'portBody',
            },
        ],
    }
}

onMounted(() => {
    graph = new Graph({
        container: document.getElementById('container') as HTMLDivElement,
        connecting: {
            allowBlank: false,
            allowMulti: false,
            allowLoop: false,
            allowNode: false,
            allowEdge: false
        },
        width: 800,
        height: 600,
        background: {
            color: '#fffbe6', // 设置画布背景颜色
        },
        grid: {
            size: 10,      // 网格大小 10px
            visible: true, // 渲染网格背景
        },
    });
    // TODO:监听节点和边的新增。。
})


</script>
<style lang="less">
</style>

