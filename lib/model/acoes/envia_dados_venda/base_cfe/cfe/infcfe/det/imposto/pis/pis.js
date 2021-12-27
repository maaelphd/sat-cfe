"use strict";
exports.__esModule = true;
exports.PIS = void 0;
/** Grupo do PIS
 * @param { PISAliq } PISAliq - Grupo de PIS tributado pela alíquota - CST = 01, 02 e 05.
 * @param { PISQtde } PISQtde - Grupo de PIS tributado por Qtde - CST = 03
 * @param { PISNT } PISNT - Grupo de PIS não tributado - CST = 04, 06, 07, 08 ou 09
 * @param { PISSN } PISSN - Grupo de PIS para contribuinte do SIMPLES NACIONAL - CST = 49
 * @param { PISOutr } PISOutr - Grupo de PIS Outras Operações - CST = 99
 * @param { PISST } PISST - Grupo de PIS Substituição Tributária
 */
var PIS = /** @class */ (function () {
    function PIS(pisAliq, pisQtde, pisNT, pisSN, pisOutr, pisST) {
        if (pisAliq === void 0) { pisAliq = null; }
        if (pisQtde === void 0) { pisQtde = null; }
        if (pisNT === void 0) { pisNT = null; }
        if (pisSN === void 0) { pisSN = null; }
        if (pisOutr === void 0) { pisOutr = null; }
        if (pisST === void 0) { pisST = null; }
        this.PISAliq = pisAliq;
        this.PISQtde = pisQtde;
        this.PISNT = pisNT;
        this.PISSN = pisSN;
        this.PISOutr = pisOutr;
        this.PISST = pisST;
    }
    return PIS;
}());
exports.PIS = PIS;
