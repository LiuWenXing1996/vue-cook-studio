import { ComponentConfig } from "../types/core";
import useComponentMakerList from "./useComponentMakerList";

export default function useComponentMaker(componentConfig: ComponentConfig) {
    const { makerName, makerVersion } = componentConfig
    const maker = useComponentMakerList().get(makerName, makerVersion)
    return maker
}