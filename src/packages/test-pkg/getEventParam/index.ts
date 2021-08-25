import defineCompositionMaker from "../../../lib/utils/defineCompositionMaker";

export default defineCompositionMaker({
    name: "get-event-param",
    label: "获取事件参数",
    args: () => {
        return {}
    },
    result: () => {
        return {
            type: "number",
            label: "返回事件参数",
            tips: "提示"
        }
    },
    body: (config) => {
        return () => {
            debugger;
            return config.data?.payload
        }
    }
})