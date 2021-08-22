import useCompositionConfig from "../hooks/useComponsitionConfig";
import useCompositionMaker from "../hooks/useCompositionMaker";
import ICompositionConfig from "../types/ICompositionConfig";

export default function composer(config?: ICompositionConfig) {
    let returns;
    let args: any[] = []
    if (config?.data?.args) {
        args = config.data.args.map(e => {
            let _config = useCompositionConfig(e.uid).value;
            return composer(_config)
        })
    }
    const maker = useCompositionMaker(config?.maker).value
    if (maker) {
        returns = maker.body.call({}, ...args)
    }
    return returns
}