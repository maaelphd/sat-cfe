"use strict";
exports.__esModule = true;
exports.COFINSST = void 0;
/** Grupo de COFINS Substituição Tributária
 * @param { number } vBC - Valor da Base de Cálculo do COFINS.
 * @param { number } pCOFINS - Alíquota do COFINS (em percentual).
 * @param { number } qBCProd - Quantidade Vendida.
 * @param { number } vAliqProd - Alíquota do COFINS (em reais).
 */
var COFINSST = /** @class */ (function () {
    function COFINSST(vBC, pCOFINS, qBCProd, vAliqProd) {
        if (vBC === void 0) { vBC = 0; }
        if (pCOFINS === void 0) { pCOFINS = 0; }
        if (qBCProd === void 0) { qBCProd = 0; }
        if (vAliqProd === void 0) { vAliqProd = 0; }
        this.vBC = vBC;
        this.pCOFINS = pCOFINS;
        this.qBCProd = qBCProd;
        this.vAliqProd = vAliqProd;
    }
    return COFINSST;
}());
exports.COFINSST = COFINSST;
