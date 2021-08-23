<template>
    <div style="position: fixed;left: 10px;bottom: 10px;">
        <button @click="test">ssss</button>
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
import { computed, onMounted, ref, watch } from 'vue';
import useCompositionMaker from '../hooks/useCompositionMaker';
import useCompositionMakerList from '../hooks/useCompositionMakerList';
import useData from '../hooks/useData';
import composer from '../utils/composer';
import CompositionMaker from './CompositionMaker.vue';
import getCompositionConfigDefault from '../utils/getCompositionConfigDefault';
import type ICompositionConfig from '../types/ICompositionConfig';

const datag = useData()

datag.value.compositions = []

let graph: Graph;
const compositionMakerList = useCompositionMakerList()
const addMaker = useCompositionMaker("add");
const constAMaker = useCompositionMaker("const-a");
const constBMaker = useCompositionMaker("const-b");

const test = () => {
    if (addMaker.value && constAMaker.value && constBMaker.value) {
        const addConfig = getCompositionConfigDefault(addMaker.value)
        datag.value.compositions.push(addConfig)
        const add2Config = getCompositionConfigDefault(addMaker.value)
        const aConfig = getCompositionConfigDefault(constAMaker.value)
        datag.value.compositions.push(aConfig)
        const bConfig = getCompositionConfigDefault(constBMaker.value)
        datag.value.compositions.push(bConfig)
        addConfig.data = addConfig.data || {}
        addConfig.data.args = addConfig.data.args || []
        addConfig.data.args.push(aConfig.uid)
        addConfig.data.args.push(bConfig.uid)
        add2Config.data = add2Config.data || {}
        add2Config.data.args = add2Config.data.args || []
        add2Config.data.args.push(addConfig.uid)
        add2Config.data.args.push(bConfig.uid)
        const ss = composer(add2Config)
        alert(ss)
    }
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

watch(datag, () => {

})

const data = computed<Model.FromJSONData>(() => {
    let compositionConfig = datag.value;
    let compositions = compositionConfig.compositions || [];
    let edges: any[] = []

    let nodes = compositions.map(e => {
        const maker = useCompositionMaker(e.maker)
        if (!maker.value) {
            return {}
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
            id: e.uid,// String，可选，节点的唯一标识
            x: 40,       // Number，必选，节点位置的 x 值
            y: 40,       // Number，必选，节点位置的 y 值
            width: 80,   // Number，可选，节点大小的 width 值
            height: 40,  // Number，可选，节点大小的 height 值
            label: e.maker, // String，节点标签
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
    })
    return {
        nodes,
        edges
    }
})

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
    // graph.fromJSON(data.value)
    // watch(data, () => {
    //     graph.fromJSON(data.value)
    // })
    // data.value = {
    //     // 节点
    //     nodes: [
    //         {
    //             id: 'node1', // String，可选，节点的唯一标识
    //             x: 40,       // Number，必选，节点位置的 x 值
    //             y: 40,       // Number，必选，节点位置的 y 值
    //             width: 80,   // Number，可选，节点大小的 width 值
    //             height: 40,  // Number，可选，节点大小的 height 值
    //             label: '获取组件配置', // String，节点标签
    //             ports: [
    //                 {
    //                     id: 'port1',
    //                     attrs: {
    //                         circle: {
    //                             r: 6,
    //                             magnet: true,
    //                             stroke: '#31d0c6',
    //                             strokeWidth: 2,
    //                             fill: '#fff',
    //                         },
    //                     },
    //                 },
    //                 { id: 'port2' },
    //                 { id: 'port3' },
    //             ],
    //         },
    //         {
    //             id: 'root-node', // String，可选，节点的唯一标识
    //             x: 40,       // Number，必选，节点位置的 x 值
    //             y: 40,       // Number，必选，节点位置的 y 值
    //             width: 80,   // Number，可选，节点大小的 width 值
    //             height: 40,  // Number，可选，节点大小的 height 值
    //             label: '根组件组件配置', // String，节点标签
    //         },
    //         {
    //             id: 'node2', // String，节点的唯一标识
    //             x: 160,      // Number，必选，节点位置的 x 值
    //             y: 180,      // Number，必选，节点位置的 y 值
    //             width: 80,   // Number，可选，节点大小的 width 值
    //             height: 40,  // Number，可选，节点大小的 height 值
    //             label: 'world', // String，节点标签
    //         },
    //     ],
    //     // 边
    //     edges: [
    //         {
    //             source: 'node1', // String，必须，起始节点 id
    //             target: 'node2', // String，必须，目标节点 id
    //             connector: 'smooth',
    //         },
    //     ],
    // }
})


</script>
<style lang="less">
</style>

