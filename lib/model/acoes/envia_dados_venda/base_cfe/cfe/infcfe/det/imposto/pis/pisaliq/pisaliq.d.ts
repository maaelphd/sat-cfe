export interface IPISAliq {
    CST: number;
    vBC: number;
    pPIS: number;
}
/** Grupo de PIS tributado pela alíquota CST = 01, 02 e 05.
 * @param { number } CST - Código de Situação Tributária do PIS.
 * @param { number } vBC - Valor da Base de Cálculo do PIS.
 * @param { number } pPIS - Alíquota do PIS (em percentual).
 */
export declare class PISAliq implements IPISAliq {
    CST: number;
    vBC: number;
    pPIS: number;
    constructor(cst?: number, vBC?: number, pPIS?: number);
}
