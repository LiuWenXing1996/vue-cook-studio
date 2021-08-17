import { ref } from 'vue';
import IEditor from '../types/IEditor';
const list = ref<IEditor[]>([

]);

export default function useEditorList() {
    return list
}