"use strict";
exports.__esModule = true;
exports.COFINSQtde = void 0;
/** Grupo de COFINS tributado por Qtde - CST = 03
 * @param { number } CST - Código de Situação Tributária do COFINS.
 * @param { number } qBCProd - Quantidade Vendida.
 * @param { number } vAliqProd - Alíquota do COFINS (em reais).
 * @param { number } pCOFINS - Alíquota do COFINS (em percentual).
 */
var COFINSQtde = /** @class */ (function () {
    function COFINSQtde(cst, qBCProd, vAliqProd, pCOFINS) {
        if (cst === void 0) { cst = 0; }
        if (qBCProd === void 0) { qBCProd = 0; }
        if (vAliqProd === void 0) { vAliqProd = 0; }
        if (pCOFINS === void 0) { pCOFINS = 0; }
        this.CST = cst;
        this.qBCProd = qBCProd;
        this.vAliqProd = vAliqProd;
        this.pCOFINS = pCOFINS;
    }
    return COFINSQtde;
}());
exports.COFINSQtde = COFINSQtde;
