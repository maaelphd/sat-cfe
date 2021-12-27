"use strict";
exports.__esModule = true;
exports.ICMS40 = void 0;
/** Campo cRegTrib=3 – Regime Normal Grupo de Tributação do ICMS = 40, 41, 60.
 * @param { number } Orig - Origem da mercadoria.
 * @param { number } CST - Tributação do ICMS = 40, 41, 60.
 */
var ICMS40 = /** @class */ (function () {
    function ICMS40(orig, cst) {
        if (orig === void 0) { orig = 0; }
        if (cst === void 0) { cst = 0; }
        this.Orig = orig;
        this.CST = cst;
    }
    return ICMS40;
}());
exports.ICMS40 = ICMS40;
