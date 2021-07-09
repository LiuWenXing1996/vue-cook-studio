import { ComponentConfig } from './../types/core';
import { ref } from "vue";

const componentSelected = ref<ComponentConfig>();

export default function useComponentSelected() {
    //TODO:此地方的响应式有问题，当他改变的时候，对应的组件并没有改变
    return componentSelected
}