"use strict";
exports.__esModule = true;
exports.Dest = void 0;
/** Grupo de identificação do Destinatário do CF-e
 * @param { number } CNPJ - CNPJ do destinatário.
 * @param { string } CPF - CPF do destinatário.
 * @param { string } xNome - Razão Social ou Nome do destinatário.
 */
var Dest = /** @class */ (function () {
    function Dest(CNPJ, CPF, xNome) {
        if (CNPJ === void 0) { CNPJ = 0; }
        if (CPF === void 0) { CPF = 0; }
        if (xNome === void 0) { xNome = ''; }
        CNPJ = CNPJ;
        CPF = CPF;
        xNome = xNome;
    }
    return Dest;
}());
exports.Dest = Dest;
