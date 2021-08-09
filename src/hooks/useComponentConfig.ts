import { Ref } from 'vue';
import { ComponentConfig } from './../components/ComponentWrapper/types';
function useComponentConfig(parent: ComponentConfig, id: string) {
    if (parent.uid === id) {
        return parent
    } else {
        const slots = parent.slots;
        for (let i = 0; i < slots.length; i++) {
            const slot = slots[i];
            const slotChildren = slot.value;
            for (let j = 0; j < slotChildren.length; j++) {
                const slotChild = slotChildren[j];
                const configFound = useComponentConfig(slotChild, id) as ComponentConfig;
                if (configFound) {
                    return configFound
                }
            }
        }
    }
}