"use strict";
exports.__esModule = true;
exports.DescAcrEntr = void 0;
/** Grupo de Valores Totais do CF-e
 * @param { DescAcrEntr } DescAcrEntr - Valor de Entrada de Desconto sobre Subtotal.
 */
var DescAcrEntr = /** @class */ (function () {
    function DescAcrEntr(vDescSubtot) {
        if (vDescSubtot === void 0) { vDescSubtot = 0; }
        this.vDescSubtot = vDescSubtot;
    }
    return DescAcrEntr;
}());
exports.DescAcrEntr = DescAcrEntr;
