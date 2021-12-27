export interface IMP {
    cMP: number;
    vMP: number;
}
/** Grupo de Valores Totais do CF-e
 * @param { number } cMP - Código do Meio de Pagamento empregado para quitação do CF-e
 * @param { number } vMP - Valor do Meio de Pagamento empregado para quitação do CF-e
 */
export declare class MP implements IMP {
    cMP: number;
    vMP: number;
    constructor(cMP?: number, vMP?: number);
}
