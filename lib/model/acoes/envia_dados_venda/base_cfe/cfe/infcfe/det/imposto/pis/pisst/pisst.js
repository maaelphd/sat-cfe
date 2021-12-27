"use strict";
exports.__esModule = true;
exports.PISST = void 0;
/** Grupo de PIS Substituição Tributária
 * @param { number } vBC - Valor da Base de Cálculo do PIS.
 * @param { number } pPIS - Alíquota do PIS (em percentual).
 * @param { number } qBCProd - Quantidade Vendida.
 * @param { number } vAliqProd - Alíquota do PIS (em reais).
 */
var PISST = /** @class */ (function () {
    function PISST(vBC, pPIS, qBCProd, vAliqProd) {
        if (vBC === void 0) { vBC = 0; }
        if (pPIS === void 0) { pPIS = 0; }
        if (qBCProd === void 0) { qBCProd = 0; }
        if (vAliqProd === void 0) { vAliqProd = 0; }
        this.vBC = vBC;
        this.pPIS = pPIS;
        this.qBCProd = qBCProd;
        this.vAliqProd = vAliqProd;
    }
    return PISST;
}());
exports.PISST = PISST;
