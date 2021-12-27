import { PISAliq } from "./pisaliq/pisaliq";
import { PISNT } from "./pisnt/pisnt";
import { PISOutr } from "./pisoutr/pisoutr";
import { PISQtde } from "./pisqtde/pisqtde";
import { PISSN } from "./pissn/pissn";
import { PISST } from "./pisst/pisst";

export interface IPIS {
  PISAliq: PISAliq,
  PISQtde: PISQtde,
  PISNT: PISNT,
  PISSN: PISSN,
  PISOutr: PISOutr,
  PISST: PISST,
}

/** Grupo do PIS
 * @param { PISAliq } PISAliq - Grupo de PIS tributado pela alíquota - CST = 01, 02 e 05.
 * @param { PISQtde } PISQtde - Grupo de PIS tributado por Qtde - CST = 03
 * @param { PISNT } PISNT - Grupo de PIS não tributado - CST = 04, 06, 07, 08 ou 09
 * @param { PISSN } PISSN - Grupo de PIS para contribuinte do SIMPLES NACIONAL - CST = 49
 * @param { PISOutr } PISOutr - Grupo de PIS Outras Operações - CST = 99
 * @param { PISST } PISST - Grupo de PIS Substituição Tributária
 */
export class PIS implements IPIS { 
  PISAliq: PISAliq;
  PISQtde: PISQtde;
  PISNT: PISNT;
  PISSN: PISSN;
  PISOutr: PISOutr;
  PISST: PISST;

  constructor(pisAliq: PISAliq = null, pisQtde: PISQtde = null, pisNT: PISNT = null,
              pisSN: PISSN = null, pisOutr: PISOutr = null, pisST: PISST = null) {
    this.PISAliq = pisAliq;
    this.PISQtde = pisQtde;
    this.PISNT = pisNT;
    this.PISSN = pisSN;
    this.PISOutr = pisOutr;
    this.PISST = pisST;
  }
}