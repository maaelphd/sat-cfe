"use strict";
exports.__esModule = true;
exports.MP = void 0;
/** Grupo de Valores Totais do CF-e
 * @param { number } cMP - Código do Meio de Pagamento empregado para quitação do CF-e
 * @param { number } vMP - Valor do Meio de Pagamento empregado para quitação do CF-e
 */
var MP = /** @class */ (function () {
    function MP(cMP, vMP) {
        if (cMP === void 0) { cMP = 0; }
        if (vMP === void 0) { vMP = 0; }
        this.cMP = cMP;
        this.vMP = vMP;
    }
    return MP;
}());
exports.MP = MP;
