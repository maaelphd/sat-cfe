import { Ide } from "./ide/ide";
import { Emit } from "./emit/emit";
import { Total } from "./total/total";

export interface IInfCFe {
  $: {
    chCanc: string
  },
  ide: Ide,
  emit: Emit,
  total: Total
}

/** Grupo das informações do CF-e
 * @param { string } chCanc - informar a chave de acesso do CF-e a ser cancelado, precedida do literal ‘CFe’,acrescentada a validação do formato
 * @param { Ide } ide - Grupo das informações de identificação do CF-e
 * @param { Total } total - Grupo de Valores Totais do CF-e
 */
export class InfCFe implements IInfCFe { 
  $: {
    chCanc: string
  };
  ide: Ide;
  emit: Emit;
  total: Total;

  constructor(chCanc: string = '', ide: Ide = new Ide(), emit: Emit = new Emit(), total: Total = new Total()) {
    this.$ = {
      chCanc: chCanc
    };
    this.ide = ide;
    this.emit = emit;
    this.total = total;
  }
}