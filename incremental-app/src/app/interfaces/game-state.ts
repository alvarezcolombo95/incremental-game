import { AfipMain } from './afip-main';
import { AgroMain } from './agro-main';
import { ArmyMain } from './army-main';
import { CentralBank } from './central-bank'
import { ConicetMain } from './conicet-main';
import { FmiMain } from './fmi-main';
import { FutbolMain } from './futbol-main';
import { Government } from './government/government';
import { SpaceMain } from './space-main';

export interface GameState {
    centralBank: CentralBank;
    agroMain: AgroMain;
    government: Government;
    afipMain: AfipMain;
    fmiMain: FmiMain;
    futbolMain: FutbolMain;
    armyMain: ArmyMain;
    spaceMain: SpaceMain;
    conicetMain: ConicetMain
}
