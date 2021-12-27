export interface IICMSSN900 {
    Orig: number;
    CSOSN: number;
    pICMS: number;
}
/** Campo cRegTrib=3 – Regime Normal Grupo de Tributação do ICMS= 00, 20, 90.
 * @param { number } Orig - Origem da mercadoria.
 * @param { number } CSOSN - Código de Situação da Operação – Simples Nacional.
 * @param { number } pICMS - Alíquota efetiva do imposto.
 */
export declare class ICMSSN900 implements IICMSSN900 {
    Orig: number;
    CSOSN: number;
    pICMS: number;
    constructor(orig?: number, csosn?: number, picms?: number);
}
