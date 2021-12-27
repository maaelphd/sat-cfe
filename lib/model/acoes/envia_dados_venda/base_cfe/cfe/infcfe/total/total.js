"use strict";
exports.__esModule = true;
exports.Total = void 0;
var descacrentr_1 = require("./descacrentr/descacrentr");
/** Grupo de Valores Totais do CF-e
 * @param { DescAcrEntr } DescAcrEntr - Grupo de valores de entrada de Desconto/Acrésci mo sobre Subtotal
 * @param { number } vCFeLei12741 - Valor aproximado dos tributos do CFe-SAT – Lei 12741/12.
 */
var Total = /** @class */ (function () {
    function Total(descAcrEntr) {
        if (descAcrEntr === void 0) { descAcrEntr = new descacrentr_1.DescAcrEntr(); }
        this.DescAcrEntr = descAcrEntr;
    }
    return Total;
}());
exports.Total = Total;
