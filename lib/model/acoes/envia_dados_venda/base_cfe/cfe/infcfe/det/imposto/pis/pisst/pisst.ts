export interface IPISST {
  vBC: number,
  pPIS: number,
  qBCProd: number,
  vAliqProd: number
}

/** Grupo de PIS Substituição Tributária
 * @param { number } vBC - Valor da Base de Cálculo do PIS.
 * @param { number } pPIS - Alíquota do PIS (em percentual).
 * @param { number } qBCProd - Quantidade Vendida.
 * @param { number } vAliqProd - Alíquota do PIS (em reais).
 */
export class PISST implements IPISST { 
  vBC: number;
  pPIS: number;
  qBCProd: number;
  vAliqProd: number;

  constructor(vBC: number = 0, pPIS: number = 0, qBCProd: number = 0, vAliqProd: number = 0) {
    this.vBC = vBC;
    this.pPIS = pPIS;
    this.qBCProd = qBCProd;
    this.vAliqProd = vAliqProd;
  }
}