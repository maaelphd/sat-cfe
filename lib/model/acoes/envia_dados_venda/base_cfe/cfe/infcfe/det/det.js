"use strict";
exports.__esModule = true;
exports.Det = void 0;
var imposto_1 = require("./imposto/imposto");
var prod_1 = require("./prod/prod");
/** Grupo do detalhamento de Produtos e Serviços do CF-e
 * @param { number } nItem - Número do item.
 * @param { Prod } prod - TAG de grupo do detalhamento de Produtos e Serviços do CF-e.
 * @param { Imposto } imposto - Grupo de Tributos incidentes no Produto ou Serviço.
 * @param { string } infAdProd - Informações Adicionais do Produto.
 */
var Det = /** @class */ (function () {
    function Det(nItem, prod, imposto, infAdProd) {
        if (nItem === void 0) { nItem = 0; }
        if (prod === void 0) { prod = new prod_1.Prod(); }
        if (imposto === void 0) { imposto = new imposto_1.Imposto(); }
        if (infAdProd === void 0) { infAdProd = ''; }
        this.$ = {
            nItem: nItem
        };
        this.prod = prod;
        this.imposto = imposto;
        this.infAdProd = infAdProd;
    }
    return Det;
}());
exports.Det = Det;
