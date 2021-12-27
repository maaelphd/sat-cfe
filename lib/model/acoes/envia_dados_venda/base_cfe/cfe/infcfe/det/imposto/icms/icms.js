"use strict";
exports.__esModule = true;
exports.ICMS = void 0;
/** Grupo do ICMS da Operação própria e ST
 * @param { ICMS00 } ICMS00 - Campo cRegTrib=3 – Regime Normal Grupo de Tributação do ICMS= 00, 20, 90.
 * @param { ICMS40 } ICMS40 - Campo cRegTrib=3 – Regime Normal Grupo de Tributação do ICMS = 40, 41, 60.
 * @param { ICMSSN102 } ICMSSN102 - cRegTrib=1 – Simples Nacional e CSOSN=102, 300, 400, 500.
 * @param { ICMSSN900 } ICMSSN900 - Campo cRegTrib=1 – Simples Nacional e CSOSN=900
 */
var ICMS = /** @class */ (function () {
    function ICMS(icms00, icms40, icmssn102, icmssn900) {
        if (icms00 === void 0) { icms00 = null; }
        if (icms40 === void 0) { icms40 = null; }
        if (icmssn102 === void 0) { icmssn102 = null; }
        if (icmssn900 === void 0) { icmssn900 = null; }
        this.ICMS00 = icms00;
        this.ICMS40 = icms40;
        this.ICMSSN102 = icmssn102;
        this.ICMSSN900 = icmssn900;
    }
    return ICMS;
}());
exports.ICMS = ICMS;
