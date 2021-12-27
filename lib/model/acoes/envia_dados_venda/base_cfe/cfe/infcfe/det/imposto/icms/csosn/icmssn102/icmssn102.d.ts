export interface IICMSSN102 {
    Orig: number;
    CSOSN: number;
}
/** cRegTrib=1 – Simples Nacional e CSOSN=102, 300, 400, 500.
 * @param { number } Orig - Origem da mercadoria.
 * @param { number } CSOSN - Código de Situação da Operação – Simples Nacional.
 */
export declare class ICMSSN102 implements IICMSSN102 {
    Orig: number;
    CSOSN: number;
    constructor(orig?: number, csosn?: number);
}
