export interface IDest {
    CNPJ: number;
    CPF: number;
    xNome: string;
}
/** Grupo de identificação do Destinatário do CF-e
 * @param { number } CNPJ - CNPJ do destinatário.
 * @param { string } CPF - CPF do destinatário.
 * @param { string } xNome - Razão Social ou Nome do destinatário.
 */
export declare class Dest implements IDest {
    CNPJ: number;
    CPF: number;
    xNome: string;
    constructor(CNPJ?: number, CPF?: number, xNome?: string);
}
