import { MP } from "./mp/mp";
export interface IPgto {
    MP: [MP];
}
/** Grupo de informações sobre Pagamento do CFe
* @param { [MP] } MP - Grupo de informações dos Meios de Pagamento empregados na quitação do CF-e
*/
export declare class Pgto implements IPgto {
    MP: [MP];
    constructor(mp?: [MP]);
}
