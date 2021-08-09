import { defineEditor } from "../../../components/Editor/utils";
import EditorUi from "./EditorUi.vue";

export default defineEditor({
    name: "js-editor",
    showUi: () => EditorUi,
    resolveRealValue: (referValue) => referValue
})