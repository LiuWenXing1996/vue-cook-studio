import useEditorConfigRealValue from "../../hooks/useEditorConfigRealValue"
import { findMaker } from "../ComponentMaker/utils"
import { useEditorList } from "../Editor/hooks"
import { EditorConfig, EditorType } from "../editors/editorConfig"
import { ComponentConfig, ComponentProp, ComponentSlot } from "./types"

export function getComponentPropsObject(config: ComponentConfig) {
    const { props } = config
    const maker = findMaker(config)
    let propsReal: Record<string, any> = {}


    if (!maker) {
        return propsReal
    }
    let propOptions = maker.propOptions(config);
    for (const key in props) {
        if (Object.prototype.hasOwnProperty.call(props, key)) {
            const propRefer = props[key];
            const editorName = propOptions[key].editorName;
            const editor = useEditorList().get(editorName);
            // TODO:所有的props都变成get和set?
            if (!editor) {
                return
            }
            // hooks :useAdd useSub use*** ?

            propsReal[key] = editor.resolveRealValue(propRefer);
        }
    }

    return propsReal;
}

export function getComponentEmitsObject(config: ComponentConfig) {
    const { emits } = config
    const maker = findMaker(config)
    let emitsReal: Record<string, Function> = {}


    if (!maker) {
        return emitsReal
    }
    let emitOptions = maker.emitOptions(config);
    for (const key in emits) {
        if (Object.prototype.hasOwnProperty.call(emits, key)) {
            const propRefer = emits[key];
            const editorName = emitOptions[key].editorName;
            const editor = useEditorList().get(editorName);
            if (!editor) {
                return
            }
            let str = `console.log('fffffff')`;
            let func = new Function(str);
            // func('Jack') // "Hello Jack!"
            // emitsReal[key] = editor.resolveRealValue(propRefer);
            emitsReal[key] = new Function(editor.resolveRealValue(propRefer));
        }
    }

    return emitsReal;
}

function getComponentWrapper(config: ComponentConfig) {
    const maker = findMaker(config);
    const { wrapperAttrs } = config
}

export function defineComponentProp(prop: ComponentProp) {
    return prop
}


export function defineComponentSlot(slot: ComponentSlot) {
    return slot
}