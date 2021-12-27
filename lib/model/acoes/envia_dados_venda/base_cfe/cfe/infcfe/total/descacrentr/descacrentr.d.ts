export interface IDescAcrEntr {
    vDescSubtot: number;
}
/** Grupo de Valores Totais do CF-e
 * @param { DescAcrEntr } DescAcrEntr - Valor de Entrada de Desconto sobre Subtotal.
 */
export declare class DescAcrEntr implements IDescAcrEntr {
    vDescSubtot: number;
    constructor(vDescSubtot?: number);
}
