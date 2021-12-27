export interface IIde {
  CNPJ: number;
  signAC: string;
  numeroCaixa: number;
}

/** Grupo das informações de identificação do CF-e
 * @param { number } CNPJ - CNPJ Software House
 * @param { string } signAC - Assinatura do Aplicativo Comercial
 * @param { number } numeroCaixa - Número do Caixa ao qual o SAT está conectado
 */
export class Ide implements IIde { 
  CNPJ: number;
  signAC: string;
  numeroCaixa: number;

  constructor(CNPJ: number = 0, signAC: string = '', numeroCaixa: number = 0) {
    this.CNPJ = CNPJ;
    this.signAC = signAC;
    this.numeroCaixa = numeroCaixa;
  }
}