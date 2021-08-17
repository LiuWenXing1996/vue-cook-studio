import { computed, Ref } from "vue";
import IEditor from "../types/IEditor";
import useEditorList from './useEditorList';

export default function useEditor(name: string): Ref<IEditor | undefined> {
    return computed(() => {
        const list = useEditorList();
        const editor = list.value.find(e => e.name === name)
        return editor;
    })
}


