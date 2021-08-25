import defineCompositionMaker from "../../../lib/utils/defineCompositionMaker";

export default defineCompositionMaker({
    name: "const-a",
    label: "整型常量",
    args: () => {
        return {}
    },
    result: () => {
        return {
            type: "number",
            label: "返回一个整型值",
            tips: "提示"
        }
    },
    body: () => {
        return () => 10
    }
})