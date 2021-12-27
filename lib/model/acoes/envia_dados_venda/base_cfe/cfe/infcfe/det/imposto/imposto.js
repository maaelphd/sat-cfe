"use strict";
exports.__esModule = true;
exports.Imposto = void 0;
var icms_1 = require("./icms/icms");
var pis_1 = require("./pis/pis");
var cofins_1 = require("./cofins/cofins");
/** Grupo de Tributos incidentes no Produto ou Serviço
 * @param { string } vItem12741 - Valor aproximado dos tributos do Produto ou serviço – Lei 12741/12.
 * @param { ICMS } icms - Grupo do ICMS da Operação própria e ST
 */
var Imposto = /** @class */ (function () {
    function Imposto(vItem12741, icms, pis, cofins) {
        if (vItem12741 === void 0) { vItem12741 = 0; }
        if (icms === void 0) { icms = new icms_1.ICMS; }
        if (pis === void 0) { pis = new pis_1.PIS(); }
        if (cofins === void 0) { cofins = new cofins_1.COFINS(); }
        this.vItem12741 = vItem12741;
        this.ICMS = icms;
        this.PIS = pis;
        this.COFINS = cofins;
    }
    return Imposto;
}());
exports.Imposto = Imposto;
