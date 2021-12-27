"use strict";
exports.__esModule = true;
exports.PISQtde = void 0;
/** Grupo de PIS tributado por Qtde - CST = 03
 * @param { number } CST - Código de Situação Tributária do PIS.
 * @param { number } qBCProd - Quantidade Vendida.
 * @param { number } vAliqProd - Alíquota do PIS (em reais).
 */
var PISQtde = /** @class */ (function () {
    function PISQtde(cst, qBCProd, vAliqProd) {
        if (cst === void 0) { cst = 0; }
        if (qBCProd === void 0) { qBCProd = 0; }
        if (vAliqProd === void 0) { vAliqProd = 0; }
        this.CST = cst;
        this.qBCProd = qBCProd;
        this.vAliqProd = vAliqProd;
    }
    return PISQtde;
}());
exports.PISQtde = PISQtde;
