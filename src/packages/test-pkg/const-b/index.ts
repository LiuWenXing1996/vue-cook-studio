import defineCompositionMaker from "../../../lib/utils/defineCompositionMaker";

export default defineCompositionMaker({
    name: "const-b",
    label: "整型常量",
    args: {},
    result: {
        type: "number",
        label: "返回一个整型值",
        tips: "提示"
    },
    body: () => 20
})