import { EditorConfig, EditorType } from './../types/core.d';

const realValueFinderMap: { [key in EditorType]: (config: EditorConfig, visualValue: string) => any } = {
    [EditorType.input]: (config, visualValue) => {
        return visualValue
    },
    [EditorType.select]: (config, visualValue) => {
        const { selectOptions = [] } = config
        const targetOption = selectOptions.find(option => option.value === visualValue)
        return targetOption?.realValue
    }
}

export default function useEditorConfigRealValue(config: EditorConfig, visualValue: string) {
    return realValueFinderMap[config.type](config, visualValue)
}