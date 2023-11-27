import { Printer } from './printer'

export interface CentralBank {
    pesos: number;
    dolares: number;
    printer: Printer;
}
