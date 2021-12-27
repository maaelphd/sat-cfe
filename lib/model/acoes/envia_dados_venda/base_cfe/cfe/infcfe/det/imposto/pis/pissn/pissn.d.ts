export interface IPISSN {
    CST: number;
}
/** Grupo de PIS para contribuinte do SIMPLES NACIONAL.
 * @param { number } CST - Código de Situação Tributária do PIS.
 */
export declare class PISSN implements IPISSN {
    CST: number;
    constructor(cst?: number);
}
