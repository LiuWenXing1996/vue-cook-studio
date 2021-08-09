import { ref } from 'vue';
import IMaker from '../types/IMaker';
const _makerList = ref<IMaker[]>([]);

export default function usemakerList() {
    return {
        get: (name: string) => {
            return _makerList.value.find(maker => {
                return maker.name === name
            })
        },
        set: (...makerList: IMaker[]) => {
            _makerList.value.push(...makerList)
        }
    }
}