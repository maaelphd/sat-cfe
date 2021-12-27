export interface ICOFINSSN {
  CST: number,
}

/** Grupo de COFINS para contribuinte do SIMPLES NACIONAL.
 * @param { number } CST - Código de Situação Tributária do COFINS.
 */
export class COFINSSN implements ICOFINSSN { 
  CST: number;

  constructor(cst: number = 0) {
    this.CST = cst;
  }
}