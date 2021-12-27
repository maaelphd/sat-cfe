"use strict";
exports.__esModule = true;
exports.COFINSAliq = void 0;
/** Grupo de COFINS tributado pela alíquota CST = 01, 02 e 05.
 * @param { number } CST - Código de Situação Tributária do COFINS.
 * @param { number } vBC - Valor da Base de Cálculo do COFINS.
 * @param { number } pCOFINS - Alíquota do COFINS (em percentual).
 */
var COFINSAliq = /** @class */ (function () {
    function COFINSAliq(cst, vBC, pCOFINS) {
        if (cst === void 0) { cst = 0; }
        if (vBC === void 0) { vBC = 0; }
        if (pCOFINS === void 0) { pCOFINS = 0; }
        this.CST = cst;
        this.vBC = vBC;
        this.pCOFINS = pCOFINS;
    }
    return COFINSAliq;
}());
exports.COFINSAliq = COFINSAliq;
