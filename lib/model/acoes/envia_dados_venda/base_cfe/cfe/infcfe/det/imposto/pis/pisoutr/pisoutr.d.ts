export interface IPISOutr {
    CST: number;
    vBC: number;
    pPIS: number;
    qBCProd: number;
    vAliqProd: number;
}
/** Grupo de PIS Outras Operações - CST = 99
 * @param { number } CST - Código de Situação Tributária do PIS.
 * @param { number } vBC - Valor da Base de Cálculo do PIS.
 * @param { number } pPIS - Alíquota do PIS (em percentual).
 * @param { number } qBCProd - Quantidade Vendida.
 * @param { number } vAliqProd - Alíquota do PIS (em reais).
 */
export declare class PISOutr implements IPISOutr {
    CST: number;
    vBC: number;
    pPIS: number;
    qBCProd: number;
    vAliqProd: number;
    constructor(cst?: number, vBC?: number, pPIS?: number, qBCProd?: number, vAliqProd?: number);
}
