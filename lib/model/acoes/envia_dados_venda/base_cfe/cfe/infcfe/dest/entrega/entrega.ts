export interface IEntrega {
  xLgr: string;
  nro: string;
  xCpl: string;
  xBairro: string;
  xMun: string;
  UF: string;
}

/** Grupo de identificação do Local de entrega
  * @param { string } xLgr - Logradouro do endereço de entrega
  * @param { string } nro - Número do endereço de entrega
  * @param { string } xCpl - Complemento do endereço de entrega
  * @param { string } xBairro - Bairro do endereço de entrega
  * @param { string } xMun - Nome do município do endereço de entrega
  * @param { string } UF - Sigla da UF do endereço de entrega
 */
export class Entrega implements IEntrega { 
  xLgr: string;
  nro: string;
  xCpl: string;
  xBairro: string;
  xMun: string;
  UF: string;

  constructor(xLgr: string = '', nro: string = '', xCpl: string = '', xBairro: string = '', xMun: string = '', UF: string = '') {
    xLgr = xLgr;
    nro = nro;
    xCpl = xCpl;
    xBairro = xBairro;
    xMun = xMun;
    UF = UF;
  }
}