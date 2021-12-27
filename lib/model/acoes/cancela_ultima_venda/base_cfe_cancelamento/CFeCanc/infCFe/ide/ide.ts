export interface IIde {
    CNPJ: number;
    signAC: string;
  }
  
  /** Grupo das informações de identificação do CF-e
   * @param { number } CNPJ - CNPJ Software House
   * @param { string } signAC - Assinatura do Aplicativo Comercial
   */
  export class Ide implements IIde { 
    CNPJ: number;
    signAC: string;
  
    constructor(CNPJ: number = 0, signAC: string = '') {
      this.CNPJ = CNPJ;
      this.signAC = signAC;
    }
  }