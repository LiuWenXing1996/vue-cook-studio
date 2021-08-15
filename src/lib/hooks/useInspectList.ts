import { ref } from 'vue';
import IInspector from '../types/IInspector';
const list = ref<IInspector[]>([]);

export default function useInspectorList() {
    return list
}