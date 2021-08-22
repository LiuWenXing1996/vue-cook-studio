import defineCompositionMaker from "../../../lib/utils/defineCompositionMaker";

export default defineCompositionMaker({
    name: "add",
    args: ["a", "b"],
    returns: Number,
    body: (a: number, b: number) => a + b
})