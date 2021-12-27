"use strict";
exports.__esModule = true;
exports.ICMSSN102 = void 0;
/** cRegTrib=1 – Simples Nacional e CSOSN=102, 300, 400, 500.
 * @param { number } Orig - Origem da mercadoria.
 * @param { number } CSOSN - Código de Situação da Operação – Simples Nacional.
 */
var ICMSSN102 = /** @class */ (function () {
    function ICMSSN102(orig, csosn) {
        if (orig === void 0) { orig = 0; }
        if (csosn === void 0) { csosn = 0; }
        this.Orig = orig;
        this.CSOSN = csosn;
    }
    return ICMSSN102;
}());
exports.ICMSSN102 = ICMSSN102;
