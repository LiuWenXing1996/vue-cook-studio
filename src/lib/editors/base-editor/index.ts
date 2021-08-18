import defineEditor from './../../utils/defineEditor';
import BaseEdtor from "./BaseEditor.vue"
export default defineEditor({
    name: "base-editor",
    label: "基础编辑器",
    ui: () => BaseEdtor
})
