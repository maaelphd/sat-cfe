"use strict";
exports.__esModule = true;
exports.COFINS = void 0;
/** Grupo do COFINS
 * @param { COFINSAliq } COFINSAliq - Grupo de COFINS tributado pela alíquota - CST = 01, 02 e 05.
 * @param { COFINSQtde } COFINSQtde - Grupo de COFINS tributado por Qtde - CST = 03
 * @param { COFINSNT } COFINSNT - Grupo de COFINS não tributado - CST = 04, 06, 07, 08 ou 09
 * @param { COFINSSN } COFINSSN - Grupo de COFINS para contribuinte do SIMPLES NACIONAL - CST = 49
 * @param { COFINSOutr } COFINSOutr - Grupo de COFINS Outras Operações - CST = 99
 * @param { COFINSST } COFINSST - Grupo de COFINS Substituição Tributária
 */
var COFINS = /** @class */ (function () {
    function COFINS(cofinsAliq, cofinsQtde, cofinsNT, cofinsSN, cofinsOutr, cofinsST) {
        if (cofinsAliq === void 0) { cofinsAliq = null; }
        if (cofinsQtde === void 0) { cofinsQtde = null; }
        if (cofinsNT === void 0) { cofinsNT = null; }
        if (cofinsSN === void 0) { cofinsSN = null; }
        if (cofinsOutr === void 0) { cofinsOutr = null; }
        if (cofinsST === void 0) { cofinsST = null; }
        this.COFINSAliq = cofinsAliq;
        this.COFINSQtde = cofinsQtde;
        this.COFINSNT = cofinsNT;
        this.COFINSSN = cofinsSN;
        this.COFINSOutr = cofinsOutr;
        this.COFINSST = cofinsST;
    }
    return COFINS;
}());
exports.COFINS = COFINS;
