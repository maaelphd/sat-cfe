export interface IEmit {
    CNPJ: number;
    IE: string;
    indRatISSQN: string;
}
/** Grupo de identificação do emitente do CF-e
 * @param { number } CNPJ - CNPJ do emitente.
 * @param { string } IE - IE do emitente.
 * @param { string } indRatISSQN - Indicador de rateio do Desconto sobre subtotal entre itens sujeitos à tributação pelo ISSQN.
 */
export declare class Emit implements IEmit {
    CNPJ: number;
    IE: string;
    indRatISSQN: string;
    constructor(CNPJ?: number, IE?: string, indRatISSQN?: string);
}
