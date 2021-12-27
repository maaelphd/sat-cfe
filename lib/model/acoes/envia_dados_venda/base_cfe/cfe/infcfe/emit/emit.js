"use strict";
exports.__esModule = true;
exports.Emit = void 0;
/** Grupo de identificação do emitente do CF-e
 * @param { number } CNPJ - CNPJ do emitente.
 * @param { string } IE - IE do emitente.
 * @param { string } indRatISSQN - Indicador de rateio do Desconto sobre subtotal entre itens sujeitos à tributação pelo ISSQN.
 */
var Emit = /** @class */ (function () {
    function Emit(CNPJ, IE, indRatISSQN) {
        if (CNPJ === void 0) { CNPJ = 0; }
        if (IE === void 0) { IE = ''; }
        if (indRatISSQN === void 0) { indRatISSQN = 'N'; }
        this.CNPJ = CNPJ;
        this.IE = IE;
        this.indRatISSQN = indRatISSQN;
    }
    return Emit;
}());
exports.Emit = Emit;
