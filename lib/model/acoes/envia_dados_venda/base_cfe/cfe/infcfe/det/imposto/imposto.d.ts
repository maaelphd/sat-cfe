import { ICMS } from "./icms/icms";
import { PIS } from "./pis/pis";
import { COFINS } from "./cofins/cofins";
export interface IImposto {
    vItem12741: number;
    ICMS: ICMS;
    PIS: PIS;
    COFINS: COFINS;
}
/** Grupo de Tributos incidentes no Produto ou Serviço
 * @param { string } vItem12741 - Valor aproximado dos tributos do Produto ou serviço – Lei 12741/12.
 * @param { ICMS } icms - Grupo do ICMS da Operação própria e ST
 */
export declare class Imposto implements IImposto {
    vItem12741: number;
    ICMS: ICMS;
    PIS: PIS;
    COFINS: COFINS;
    constructor(vItem12741?: number, icms?: ICMS, pis?: PIS, cofins?: COFINS);
}
