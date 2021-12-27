export interface IPISQtde {
    CST: number;
    qBCProd: number;
    vAliqProd: number;
}
/** Grupo de PIS tributado por Qtde - CST = 03
 * @param { number } CST - Código de Situação Tributária do PIS.
 * @param { number } qBCProd - Quantidade Vendida.
 * @param { number } vAliqProd - Alíquota do PIS (em reais).
 */
export declare class PISQtde implements IPISQtde {
    CST: number;
    qBCProd: number;
    vAliqProd: number;
    constructor(cst?: number, qBCProd?: number, vAliqProd?: number);
}
