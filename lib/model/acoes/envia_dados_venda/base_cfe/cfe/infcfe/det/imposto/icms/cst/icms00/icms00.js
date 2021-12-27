"use strict";
exports.__esModule = true;
exports.ICMS00 = void 0;
/** Campo cRegTrib=3 – Regime Normal Grupo de Tributação do ICMS= 00, 20, 90.
 * @param { number } Orig - Origem da mercadoria.
 * @param { number } CST - Tributação do ICMS = 00, 20, 90.
 * @param { number } pICMS - Alíquota efetiva do imposto.
 */
var ICMS00 = /** @class */ (function () {
    function ICMS00(orig, cst, picms) {
        if (orig === void 0) { orig = 0; }
        if (cst === void 0) { cst = 0; }
        if (picms === void 0) { picms = 0; }
        this.Orig = orig;
        this.CST = cst;
        this.pICMS = picms;
    }
    return ICMS00;
}());
exports.ICMS00 = ICMS00;
