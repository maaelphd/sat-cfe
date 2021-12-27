export interface IInfAdic {
    infCpl: string;
}
/** Grupo de Informações Adicionais
 * @param { string } infCpl - Informações Complementares de interesse do Contribuinte
 */
export declare class InfAdic implements IInfAdic {
    infCpl: string;
    constructor(infCpl?: string);
}
