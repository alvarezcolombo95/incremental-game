import { AgroMain } from './agro-main';
import { CentralBank } from './central-bank'

export interface GameState {
    centralBank: CentralBank;
    agroMain: AgroMain;
}
