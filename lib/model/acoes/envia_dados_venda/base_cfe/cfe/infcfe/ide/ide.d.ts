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
export declare class Ide implements IIde {
    CNPJ: number;
    signAC: string;
    numeroCaixa: number;
    constructor(CNPJ?: number, signAC?: string, numeroCaixa?: number);
}
