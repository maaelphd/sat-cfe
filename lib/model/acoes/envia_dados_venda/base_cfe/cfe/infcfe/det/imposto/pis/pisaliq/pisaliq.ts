export interface IPISAliq {
  CST: number,
  vBC: number,
  pPIS: number
}

/** Grupo de PIS tributado pela alíquota CST = 01, 02 e 05. 
 * @param { number } CST - Código de Situação Tributária do PIS.
 * @param { number } vBC - Valor da Base de Cálculo do PIS.
 * @param { number } pPIS - Alíquota do PIS (em percentual).
 */
export class PISAliq implements IPISAliq { 
  CST: number;
  vBC: number;
  pPIS: number;

  constructor(cst: number = 0, vBC: number = 0, pPIS: number = 0) {
    this.CST = cst;
    this.vBC = vBC;
    this.pPIS = pPIS;
  }
}