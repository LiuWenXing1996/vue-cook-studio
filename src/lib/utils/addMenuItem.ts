import useMenu from "../hooks/useMenu";
import IMenuItem from "../types/IMenuItem";

export default function addMenuItem(name: string, menuItem: IMenuItem) {
    useMenu().value[name] = useMenu().value[name] || [];
    useMenu().value[name].push(menuItem);
}