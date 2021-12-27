export interface IICMS00 {
  Orig: number,
  CST: number,
  pICMS: number
}

/** Campo cRegTrib=3 – Regime Normal Grupo de Tributação do ICMS= 00, 20, 90.
 * @param { number } Orig - Origem da mercadoria.
 * @param { number } CST - Tributação do ICMS = 00, 20, 90.
 * @param { number } pICMS - Alíquota efetiva do imposto.
 */
export class ICMS00 implements IICMS00 { 
  Orig: number;
  CST: number;
  pICMS: number;

  constructor(orig: number = 0, cst: number = 0, picms: number = 0) {
    this.Orig = orig;
    this.CST = cst;
    this.pICMS = picms;
  }
}