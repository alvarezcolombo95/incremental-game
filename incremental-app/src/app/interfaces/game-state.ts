import { AgroMain } from './agro-main';
import { CentralBank } from './central-bank'
import { Government } from './government/government';

export interface GameState {
    centralBank: CentralBank;
    agroMain: AgroMain;
    government: Government
}
