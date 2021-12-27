export interface ICOFINSAliq {
  CST: number,
  vBC: number,
  pCOFINS: number
}

/** Grupo de COFINS tributado pela alíquota CST = 01, 02 e 05. 
 * @param { number } CST - Código de Situação Tributária do COFINS.
 * @param { number } vBC - Valor da Base de Cálculo do COFINS.
 * @param { number } pCOFINS - Alíquota do COFINS (em percentual).
 */
export class COFINSAliq implements ICOFINSAliq { 
  CST: number;
  vBC: number;
  pCOFINS: number;

  constructor(cst: number = 0, vBC: number = 0, pCOFINS: number = 0) {
    this.CST = cst;
    this.vBC = vBC;
    this.pCOFINS = pCOFINS;
  }
}