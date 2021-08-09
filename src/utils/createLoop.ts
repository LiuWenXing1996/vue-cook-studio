import { ComponentConfig } from "../components/ComponentWrapper/types";

export default function createLoop(config: ComponentConfig, render: any) {
    let frameId: number;
    let oldConfigJson: string;

    const f = () => {
        if (JSON.stringify(config) !== oldConfigJson) {
            // render(config);
        }
        frameId = requestAnimationFrame(f);
    }
    const stop = () => {
        cancelAnimationFrame(frameId);
    }
    frameId = requestAnimationFrame(f);
    return stop;
}