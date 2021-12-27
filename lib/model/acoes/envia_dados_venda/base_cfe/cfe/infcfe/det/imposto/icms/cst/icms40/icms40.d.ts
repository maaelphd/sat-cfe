export interface IICMS40 {
    Orig: number;
    CST: number;
}
/** Campo cRegTrib=3 – Regime Normal Grupo de Tributação do ICMS = 40, 41, 60.
 * @param { number } Orig - Origem da mercadoria.
 * @param { number } CST - Tributação do ICMS = 40, 41, 60.
 */
export declare class ICMS40 implements IICMS40 {
    Orig: number;
    CST: number;
    constructor(orig?: number, cst?: number);
}
