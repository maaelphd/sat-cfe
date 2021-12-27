export interface ICOFINSST {
  vBC: number,
  pCOFINS: number,
  qBCProd: number,
  vAliqProd: number
}

/** Grupo de COFINS Substituição Tributária
 * @param { number } vBC - Valor da Base de Cálculo do COFINS.
 * @param { number } pCOFINS - Alíquota do COFINS (em percentual).
 * @param { number } qBCProd - Quantidade Vendida.
 * @param { number } vAliqProd - Alíquota do COFINS (em reais).
 */
export class COFINSST implements ICOFINSST { 
  vBC: number;
  pCOFINS: number;
  qBCProd: number;
  vAliqProd: number;

  constructor(vBC: number = 0, pCOFINS: number = 0, qBCProd: number = 0, vAliqProd: number = 0) {
    this.vBC = vBC;
    this.pCOFINS = pCOFINS;
    this.qBCProd = qBCProd;
    this.vAliqProd = vAliqProd;
  }
}