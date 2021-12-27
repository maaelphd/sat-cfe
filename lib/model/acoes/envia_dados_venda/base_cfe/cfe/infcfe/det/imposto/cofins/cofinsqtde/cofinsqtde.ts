export interface ICOFINSQtde {
  CST: number,
  qBCProd: number,
  vAliqProd: number,
  pCOFINS: number
}

/** Grupo de COFINS tributado por Qtde - CST = 03
 * @param { number } CST - Código de Situação Tributária do COFINS.
 * @param { number } qBCProd - Quantidade Vendida.
 * @param { number } vAliqProd - Alíquota do COFINS (em reais).
 * @param { number } pCOFINS - Alíquota do COFINS (em percentual).
 */
export class COFINSQtde implements ICOFINSQtde { 
  CST: number;
  qBCProd: number;
  vAliqProd: number;
  pCOFINS: number;

  constructor(cst: number = 0, qBCProd: number = 0, vAliqProd: number = 0, pCOFINS: number = 0) {
    this.CST = cst;
    this.qBCProd = qBCProd;
    this.vAliqProd = vAliqProd;
    this.pCOFINS = pCOFINS;
  }
}