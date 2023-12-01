import { Upgradable } from './upgradable'

export interface CentralBank {
    pesos: number;
    dolares: number;
    printer: Upgradable;
    printerEff: Upgradable;
    billeteLevel: Upgradable;
    billeteArray: Array<number>;
}
