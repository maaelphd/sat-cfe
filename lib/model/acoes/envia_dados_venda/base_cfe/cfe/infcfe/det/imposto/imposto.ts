import { COFINSAliq } from "./cofins/cofinsaliq/cofinsaliq";
import { ICMS } from "./icms/icms";
import { PIS } from "./pis/pis";
import { COFINS } from "./cofins/cofins";

export interface IImposto {
  vItem12741: number,
  ICMS: ICMS
  PIS: PIS,
  COFINS: COFINS
}

/** Grupo de Tributos incidentes no Produto ou Serviço
 * @param { string } vItem12741 - Valor aproximado dos tributos do Produto ou serviço – Lei 12741/12.
 * @param { ICMS } icms - Grupo do ICMS da Operação própria e ST
 */
export class Imposto implements IImposto { 
  vItem12741: number;
  ICMS: ICMS;
  PIS: PIS;
  COFINS: COFINS;

  constructor(vItem12741: number = 0, icms: ICMS = new ICMS, pis: PIS = new PIS(), cofins: COFINS = new COFINS()) {
    this.vItem12741 = vItem12741;
    this.ICMS = icms;
    this.PIS = pis;
    this.COFINS = cofins;
  }
}