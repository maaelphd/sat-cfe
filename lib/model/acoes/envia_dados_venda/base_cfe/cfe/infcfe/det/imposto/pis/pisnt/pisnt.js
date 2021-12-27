"use strict";
exports.__esModule = true;
exports.PISNT = void 0;
/** Grupo de PIS não tributado - CST = 04, 06, 07, 08 ou 09
 * @param { number } CST - Código de Situação Tributária do PIS.
 */
var PISNT = /** @class */ (function () {
    function PISNT(cst) {
        if (cst === void 0) { cst = 0; }
        this.CST = cst;
    }
    return PISNT;
}());
exports.PISNT = PISNT;
