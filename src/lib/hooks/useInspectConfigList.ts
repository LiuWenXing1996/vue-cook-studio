import { ref } from 'vue';
import IInspectConfig from '../types/IInspectConfig';
const list = ref<IInspectConfig[]>([]);

export default function useInspectorConfigList() {
    return list
}