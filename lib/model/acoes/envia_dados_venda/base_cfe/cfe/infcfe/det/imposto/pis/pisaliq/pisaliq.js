"use strict";
exports.__esModule = true;
exports.PISAliq = void 0;
/** Grupo de PIS tributado pela alíquota CST = 01, 02 e 05.
 * @param { number } CST - Código de Situação Tributária do PIS.
 * @param { number } vBC - Valor da Base de Cálculo do PIS.
 * @param { number } pPIS - Alíquota do PIS (em percentual).
 */
var PISAliq = /** @class */ (function () {
    function PISAliq(cst, vBC, pPIS) {
        if (cst === void 0) { cst = 0; }
        if (vBC === void 0) { vBC = 0; }
        if (pPIS === void 0) { pPIS = 0; }
        this.CST = cst;
        this.vBC = vBC;
        this.pPIS = pPIS;
    }
    return PISAliq;
}());
exports.PISAliq = PISAliq;
