import { Editor } from './types';
import { ref } from "vue";

const editorList = ref<Editor[]>([]);

export function useEditorList() {
    return {
        data: editorList,
        get: (name: string) => {
            return editorList.value.find(editor => {
                return editor.name === name
            })
        },
        set: (...list: Editor[]) => {
            editorList.value.push(...list)
        }
    }
}