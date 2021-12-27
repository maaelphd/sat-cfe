"use strict";
exports.__esModule = true;
exports.PISSN = void 0;
/** Grupo de PIS para contribuinte do SIMPLES NACIONAL.
 * @param { number } CST - Código de Situação Tributária do PIS.
 */
var PISSN = /** @class */ (function () {
    function PISSN(cst) {
        if (cst === void 0) { cst = 0; }
        this.CST = cst;
    }
    return PISSN;
}());
exports.PISSN = PISSN;
