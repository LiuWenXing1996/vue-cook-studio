import { ref } from 'vue';
import IComponentMaker from '../types/IComponentMaker';
const makerList = ref<IComponentMaker[]>([]);

export default function useComponentMakerList() {
    return makerList
}