import { ICMSSN102 } from "./csosn/icmssn102/icmssn102";
import { ICMSSN900 } from "./csosn/icmssn900/icmssn900";
import { ICMS00 } from "./cst/icms00/icms00";
import { ICMS40 } from "./cst/icms40/icms40";
export interface IICMS {
    ICMS00: ICMS00;
    ICMS40: ICMS40;
    ICMSSN102: ICMSSN102;
    ICMSSN900: ICMSSN900;
}
/** Grupo do ICMS da Operação própria e ST
 * @param { ICMS00 } ICMS00 - Campo cRegTrib=3 – Regime Normal Grupo de Tributação do ICMS= 00, 20, 90.
 * @param { ICMS40 } ICMS40 - Campo cRegTrib=3 – Regime Normal Grupo de Tributação do ICMS = 40, 41, 60.
 * @param { ICMSSN102 } ICMSSN102 - cRegTrib=1 – Simples Nacional e CSOSN=102, 300, 400, 500.
 * @param { ICMSSN900 } ICMSSN900 - Campo cRegTrib=1 – Simples Nacional e CSOSN=900
 */
export declare class ICMS implements IICMS {
    ICMS00: ICMS00;
    ICMS40: ICMS40;
    ICMSSN102: ICMSSN102;
    ICMSSN900: ICMSSN900;
    constructor(icms00?: ICMS00, icms40?: ICMS40, icmssn102?: ICMSSN102, icmssn900?: ICMSSN900);
}
