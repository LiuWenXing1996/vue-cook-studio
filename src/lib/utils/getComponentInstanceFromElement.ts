import { ComponentInternalInstance } from "vue";

export function getComponentInstanceFromElement(element: any): ComponentInternalInstance {
    return element.__vueParentComponent
}