import { EditorConfig, EditorType } from '../components/editors/editorConfig';
import { JsonType } from '../utils/jsonType';

const realValueFinderMap: { [key in EditorType]: (config: EditorConfig, visualValue: JsonType) => any } = {
    [EditorType.input]: (config, visualValue) => {
        return visualValue
    }
}

export default function useEditorConfigRealValue(config: EditorConfig, visualValue: JsonType) {
    return realValueFinderMap[config.type](config, visualValue)
}