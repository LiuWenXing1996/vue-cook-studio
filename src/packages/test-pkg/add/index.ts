import defineCompositionMaker from "../../../lib/utils/defineCompositionMaker";

export default defineCompositionMaker({
    name: "add",
    label: "两数相加",
    args: () => {
        return {
            a: {
                type: "number",
                label: "整型值",
                tips: "提示"
            },
            b: {
                type: "number",
                label: "整型值",
                tips: "提示"
            }
        }
    },
    result: () => {
        return {
            type: "number",
            label: "返回一个两数和",
            tips: "提示"
        }
    },
    body: () => {
        return (a: number, b: number) => {
            debugger;
            return a + b
        }
    }
})