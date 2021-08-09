import useComponentMaker from "../hooks/useComponentMaker";
import IComponentConfig from "../types/IComponentConfig";
import IComponentRenderAttrs from "../types/IComponentRenderAttrs";

export default function defaultTransformRenderAttrs(config:IComponentConfig):IComponentRenderAttrs {
    const {renderAttrs,makePackage,makerName} =config;
    const maker=useComponentMaker(makerName,makePackage);
    let renderAttrsReal:IComponentRenderAttrs={}
    if(maker.value){
        //TODO:继续实现默认的渲染器属性转换器
        let editors =maker.value.resolveRenderAttrEditors(config)
    }

    return renderAttrsReal;
}


