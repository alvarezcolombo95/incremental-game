import { AfipMain } from './afip-main';
import { AgroMain } from './agro-main';
import { CentralBank } from './central-bank'
import { FmiMain } from './fmi-main';
import { FutbolMain } from './futbol-main';
import { Government } from './government/government';

export interface GameState {
    centralBank: CentralBank;
    agroMain: AgroMain;
    government: Government;
    afipMain: AfipMain;
    fmiMain: FmiMain;
    futbolMain: FutbolMain
}
