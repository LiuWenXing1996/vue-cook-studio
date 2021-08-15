import defineComponentMaker from "../../utils/defineComponentMaker";
import Component from "./Component.vue"

export default defineComponentMaker({
    name: "empty-slot",
    package: "core",
    label: "核心-空插槽",
    makeComponent: () => Component
})