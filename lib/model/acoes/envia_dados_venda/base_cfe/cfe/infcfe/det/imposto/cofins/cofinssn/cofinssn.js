"use strict";
exports.__esModule = true;
exports.COFINSSN = void 0;
/** Grupo de COFINS para contribuinte do SIMPLES NACIONAL.
 * @param { number } CST - Código de Situação Tributária do COFINS.
 */
var COFINSSN = /** @class */ (function () {
    function COFINSSN(cst) {
        if (cst === void 0) { cst = 0; }
        this.CST = cst;
    }
    return COFINSSN;
}());
exports.COFINSSN = COFINSSN;
