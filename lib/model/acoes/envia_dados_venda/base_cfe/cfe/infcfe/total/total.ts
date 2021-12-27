import { DescAcrEntr } from "./descacrentr/descacrentr";

export interface ITotal {
  DescAcrEntr: DescAcrEntr,
  vCFeLei12741: number
}

/** Grupo de Valores Totais do CF-e
 * @param { DescAcrEntr } DescAcrEntr - Grupo de valores de entrada de Desconto/Acrésci mo sobre Subtotal
 * @param { number } vCFeLei12741 - Valor aproximado dos tributos do CFe-SAT – Lei 12741/12.
 */
export class Total implements ITotal { 
  DescAcrEntr: DescAcrEntr;
  vCFeLei12741: number;

  constructor(descAcrEntr: DescAcrEntr = new DescAcrEntr()) {
    this.DescAcrEntr = descAcrEntr;
  }
}