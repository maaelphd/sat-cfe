export interface ICOFINSNT {
    CST: number;
}
/** Grupo de COFINS não tributado - CST = 04, 06, 07, 08 ou 09
 * @param { number } CST - Código de Situação Tributária do COFINS.
 */
export declare class COFINSNT implements ICOFINSNT {
    CST: number;
    constructor(cst?: number);
}
