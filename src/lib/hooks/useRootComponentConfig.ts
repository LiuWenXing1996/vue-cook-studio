import { ref } from "vue"
import IComponentConfig from "../types/IComponentConfig"
const rootComponentConfig = ref<IComponentConfig>(null)

export default function useRootComponentConfig() {
    return rootComponentConfig
}