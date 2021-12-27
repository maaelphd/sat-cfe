export interface IPISSN {
  CST: number,
}

/** Grupo de PIS para contribuinte do SIMPLES NACIONAL.
 * @param { number } CST - Código de Situação Tributária do PIS.
 */
export class PISSN implements IPISSN { 
  CST: number;

  constructor(cst: number = 0) {
    this.CST = cst;
  }
}