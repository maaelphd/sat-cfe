"use strict";
exports.__esModule = true;
exports.COFINSOutr = void 0;
/** Grupo de COFINS Outras Operações - CST = 99
 * @param { number } CST - Código de Situação Tributária do COFINS.
 * @param { number } vBC - Valor da Base de Cálculo do COFINS.
 * @param { number } pCOFINS - Alíquota do COFINS (em percentual).
 * @param { number } qBCProd - Quantidade Vendida.
 * @param { number } vAliqProd - Alíquota do COFINS (em reais).
 */
var COFINSOutr = /** @class */ (function () {
    function COFINSOutr(cst, vBC, pCOFINS, qBCProd, vAliqProd) {
        if (cst === void 0) { cst = 0; }
        if (vBC === void 0) { vBC = 0; }
        if (pCOFINS === void 0) { pCOFINS = 0; }
        if (qBCProd === void 0) { qBCProd = 0; }
        if (vAliqProd === void 0) { vAliqProd = 0; }
        this.CST = cst;
        this.vBC = vBC;
        this.pCOFINS = pCOFINS;
        this.qBCProd = qBCProd;
        this.vAliqProd = vAliqProd;
    }
    return COFINSOutr;
}());
exports.COFINSOutr = COFINSOutr;
