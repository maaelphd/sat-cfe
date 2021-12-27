"use strict";
exports.__esModule = true;
exports.Ide = void 0;
/** Grupo das informações de identificação do CF-e
 * @param { number } CNPJ - CNPJ Software House
 * @param { string } signAC - Assinatura do Aplicativo Comercial
 * @param { number } numeroCaixa - Número do Caixa ao qual o SAT está conectado
 */
var Ide = /** @class */ (function () {
    function Ide(CNPJ, signAC, numeroCaixa) {
        if (CNPJ === void 0) { CNPJ = 0; }
        if (signAC === void 0) { signAC = ''; }
        if (numeroCaixa === void 0) { numeroCaixa = 0; }
        this.CNPJ = CNPJ;
        this.signAC = signAC;
        this.numeroCaixa = numeroCaixa;
    }
    return Ide;
}());
exports.Ide = Ide;
