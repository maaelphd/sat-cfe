export interface ICOFINSSN {
    CST: number;
}
/** Grupo de COFINS para contribuinte do SIMPLES NACIONAL.
 * @param { number } CST - Código de Situação Tributária do COFINS.
 */
export declare class COFINSSN implements ICOFINSSN {
    CST: number;
    constructor(cst?: number);
}
