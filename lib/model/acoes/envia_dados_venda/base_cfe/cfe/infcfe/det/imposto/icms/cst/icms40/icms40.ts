export interface IICMS40 {
  Orig: number,
  CST: number
}

/** Campo cRegTrib=3 – Regime Normal Grupo de Tributação do ICMS = 40, 41, 60.
 * @param { number } Orig - Origem da mercadoria.
 * @param { number } CST - Tributação do ICMS = 40, 41, 60.
 */
export class ICMS40 implements IICMS40 { 
  Orig: number;
  CST: number;

  constructor(orig: number = 0, cst: number = 0) {
    this.Orig = orig;
    this.CST = cst;
  }
}