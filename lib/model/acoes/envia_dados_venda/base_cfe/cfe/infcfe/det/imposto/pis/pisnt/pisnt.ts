export interface IPISNT {
  CST: number,
}

/** Grupo de PIS não tributado - CST = 04, 06, 07, 08 ou 09
 * @param { number } CST - Código de Situação Tributária do PIS.
 */
export class PISNT implements IPISNT { 
  CST: number;

  constructor(cst: number = 0) {
    this.CST = cst;
  }
}