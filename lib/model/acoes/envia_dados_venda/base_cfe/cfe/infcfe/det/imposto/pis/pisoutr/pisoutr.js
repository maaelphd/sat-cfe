"use strict";
exports.__esModule = true;
exports.PISOutr = void 0;
/** Grupo de PIS Outras Operações - CST = 99
 * @param { number } CST - Código de Situação Tributária do PIS.
 * @param { number } vBC - Valor da Base de Cálculo do PIS.
 * @param { number } pPIS - Alíquota do PIS (em percentual).
 * @param { number } qBCProd - Quantidade Vendida.
 * @param { number } vAliqProd - Alíquota do PIS (em reais).
 */
var PISOutr = /** @class */ (function () {
    function PISOutr(cst, vBC, pPIS, qBCProd, vAliqProd) {
        if (cst === void 0) { cst = 0; }
        if (vBC === void 0) { vBC = 0; }
        if (pPIS === void 0) { pPIS = 0; }
        if (qBCProd === void 0) { qBCProd = 0; }
        if (vAliqProd === void 0) { vAliqProd = 0; }
        this.CST = cst;
        this.vBC = vBC;
        this.pPIS = pPIS;
        this.qBCProd = qBCProd;
        this.vAliqProd = vAliqProd;
    }
    return PISOutr;
}());
exports.PISOutr = PISOutr;
