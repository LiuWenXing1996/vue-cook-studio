import { ref } from 'vue';
import IMenuItem from '../types/IMenuItem';
const menu = ref<Record<string,IMenuItem[]>>({});

export default function useMenu() {
    return menu
}