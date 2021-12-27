"use strict";
exports.__esModule = true;
exports.ICMSSN900 = void 0;
/** Campo cRegTrib=3 – Regime Normal Grupo de Tributação do ICMS= 00, 20, 90.
 * @param { number } Orig - Origem da mercadoria.
 * @param { number } CSOSN - Código de Situação da Operação – Simples Nacional.
 * @param { number } pICMS - Alíquota efetiva do imposto.
 */
var ICMSSN900 = /** @class */ (function () {
    function ICMSSN900(orig, csosn, picms) {
        if (orig === void 0) { orig = 0; }
        if (csosn === void 0) { csosn = 0; }
        if (picms === void 0) { picms = 0; }
        this.Orig = orig;
        this.CSOSN = csosn;
        this.pICMS = picms;
    }
    return ICMSSN900;
}());
exports.ICMSSN900 = ICMSSN900;
