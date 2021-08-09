import { defineEditor } from "../../../components/Editor/utils";
import EditorUi from "./EditorUi.vue";

export default defineEditor({
    name: "number-editor",
    showUi: () => EditorUi,
    resolveRealValue: (referValue) => referValue
})