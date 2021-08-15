import { ref } from 'vue';
import IComponentMaker from '../types/IComponentMaker';
import emptySlotMaker from "../maker/empty-slot";
const makerList = ref<IComponentMaker[]>([
    emptySlotMaker
]);

export default function useComponentMakerList() {
    return makerList
}