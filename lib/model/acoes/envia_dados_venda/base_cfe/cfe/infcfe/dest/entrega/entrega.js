"use strict";
exports.__esModule = true;
exports.Entrega = void 0;
/** Grupo de identificação do Local de entrega
  * @param { string } xLgr - Logradouro do endereço de entrega
  * @param { string } nro - Número do endereço de entrega
  * @param { string } xCpl - Complemento do endereço de entrega
  * @param { string } xBairro - Bairro do endereço de entrega
  * @param { string } xMun - Nome do município do endereço de entrega
  * @param { string } UF - Sigla da UF do endereço de entrega
 */
var Entrega = /** @class */ (function () {
    function Entrega(xLgr, nro, xCpl, xBairro, xMun, UF) {
        if (xLgr === void 0) { xLgr = ''; }
        if (nro === void 0) { nro = ''; }
        if (xCpl === void 0) { xCpl = ''; }
        if (xBairro === void 0) { xBairro = ''; }
        if (xMun === void 0) { xMun = ''; }
        if (UF === void 0) { UF = ''; }
        xLgr = xLgr;
        nro = nro;
        xCpl = xCpl;
        xBairro = xBairro;
        xMun = xMun;
        UF = UF;
    }
    return Entrega;
}());
exports.Entrega = Entrega;
