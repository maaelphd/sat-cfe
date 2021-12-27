export interface ICOFINSOutr {
    CST: number;
    vBC: number;
    pCOFINS: number;
    qBCProd: number;
    vAliqProd: number;
}
/** Grupo de COFINS Outras Operações - CST = 99
 * @param { number } CST - Código de Situação Tributária do COFINS.
 * @param { number } vBC - Valor da Base de Cálculo do COFINS.
 * @param { number } pCOFINS - Alíquota do COFINS (em percentual).
 * @param { number } qBCProd - Quantidade Vendida.
 * @param { number } vAliqProd - Alíquota do COFINS (em reais).
 */
export declare class COFINSOutr implements ICOFINSOutr {
    CST: number;
    vBC: number;
    pCOFINS: number;
    qBCProd: number;
    vAliqProd: number;
    constructor(cst?: number, vBC?: number, pCOFINS?: number, qBCProd?: number, vAliqProd?: number);
}
