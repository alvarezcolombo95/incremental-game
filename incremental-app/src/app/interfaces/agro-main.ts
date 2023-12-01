import { Upgradable } from "./upgradable"

export interface AgroMain {
    componentLock: boolean
    soyQueue: number
    harvestProgress: number //harvest progress from 0% to 100%
    harvestSpeed: Upgradable
    retenciones: Upgradable //earnings in dollars/minutes
}
