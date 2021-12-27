export interface ICOFINSST {
    vBC: number;
    pCOFINS: number;
    qBCProd: number;
    vAliqProd: number;
}
/** Grupo de COFINS Substituição Tributária
 * @param { number } vBC - Valor da Base de Cálculo do COFINS.
 * @param { number } pCOFINS - Alíquota do COFINS (em percentual).
 * @param { number } qBCProd - Quantidade Vendida.
 * @param { number } vAliqProd - Alíquota do COFINS (em reais).
 */
export declare class COFINSST implements ICOFINSST {
    vBC: number;
    pCOFINS: number;
    qBCProd: number;
    vAliqProd: number;
    constructor(vBC?: number, pCOFINS?: number, qBCProd?: number, vAliqProd?: number);
}
