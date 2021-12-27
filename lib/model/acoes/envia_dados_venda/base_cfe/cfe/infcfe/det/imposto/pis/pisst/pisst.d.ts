export interface IPISST {
    vBC: number;
    pPIS: number;
    qBCProd: number;
    vAliqProd: number;
}
/** Grupo de PIS Substituição Tributária
 * @param { number } vBC - Valor da Base de Cálculo do PIS.
 * @param { number } pPIS - Alíquota do PIS (em percentual).
 * @param { number } qBCProd - Quantidade Vendida.
 * @param { number } vAliqProd - Alíquota do PIS (em reais).
 */
export declare class PISST implements IPISST {
    vBC: number;
    pPIS: number;
    qBCProd: number;
    vAliqProd: number;
    constructor(vBC?: number, pPIS?: number, qBCProd?: number, vAliqProd?: number);
}
