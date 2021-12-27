export interface IPISOutr {
  CST: number,
  vBC: number,
  pPIS: number,
  qBCProd: number,
  vAliqProd: number
}

/** Grupo de PIS Outras Operações - CST = 99
 * @param { number } CST - Código de Situação Tributária do PIS.
 * @param { number } vBC - Valor da Base de Cálculo do PIS.
 * @param { number } pPIS - Alíquota do PIS (em percentual).
 * @param { number } qBCProd - Quantidade Vendida.
 * @param { number } vAliqProd - Alíquota do PIS (em reais).
 */
export class PISOutr implements IPISOutr { 
  CST: number;
  vBC: number;
  pPIS: number;
  qBCProd: number;
  vAliqProd: number;

  constructor(cst: number = 0, vBC: number = 0, pPIS: number = 0, qBCProd: number = 0, vAliqProd: number = 0) {
    this.CST = cst;
    this.vBC = vBC;
    this.pPIS = pPIS;
    this.qBCProd = qBCProd;
    this.vAliqProd = vAliqProd;
  }
}