import { Upgradable } from "../upgradable"

export interface Government {
    componentLock: boolean,
    ministerio: Upgradable,
    worker: number,
    powerPoints: number
}
