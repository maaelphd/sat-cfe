"use strict";
exports.__esModule = true;
exports.COFINSNT = void 0;
/** Grupo de COFINS não tributado - CST = 04, 06, 07, 08 ou 09
 * @param { number } CST - Código de Situação Tributária do COFINS.
 */
var COFINSNT = /** @class */ (function () {
    function COFINSNT(cst) {
        if (cst === void 0) { cst = 0; }
        this.CST = cst;
    }
    return COFINSNT;
}());
exports.COFINSNT = COFINSNT;
