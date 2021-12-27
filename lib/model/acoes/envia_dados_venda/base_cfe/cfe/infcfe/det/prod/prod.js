"use strict";
exports.__esModule = true;
exports.Prod = void 0;
/** Grupo de identificação do Destinatário do CF-e
 * @param { string } cProd - Código do produto ou serviço
 * @param { string } cEAN - GTIN (Global Trade Item Number) do produto, antigo código EAN ou código de barras
 * @param { string } xProd - Descrição do produto ou serviço
 * @param { string } NCM - Código NCM com 8 dígitos ou 2 dígitos (gênero)
 * @param { number } CEST - Código Especificador da Substituição Tributária
 * @param { number } CFOP - Código Fiscal de Operações e Prestações
 * @param { string } uCom - Unidade Comercial
 * @param { number } qCom - Quantidade Comercia
 * @param { number } vUnCom - Valor Unitário de Comercialização
 * @param { string } indRegra - Regra de cálculo A - Arredondamento | T - Truncamento
 * @param { string } vDesc - Valor do Desconto sobre item
 */
var Prod = /** @class */ (function () {
    function Prod(cProd, cEAN, xProd, NCM, CEST, CFOP, uCom, qCom, vUnCom, indRegra, vDesc) {
        if (cProd === void 0) { cProd = ''; }
        if (cEAN === void 0) { cEAN = ''; }
        if (xProd === void 0) { xProd = ''; }
        if (NCM === void 0) { NCM = ''; }
        if (CEST === void 0) { CEST = 0; }
        if (CFOP === void 0) { CFOP = 0; }
        if (uCom === void 0) { uCom = ''; }
        if (qCom === void 0) { qCom = 0; }
        if (vUnCom === void 0) { vUnCom = 0; }
        if (indRegra === void 0) { indRegra = ''; }
        if (vDesc === void 0) { vDesc = ''; }
        this.cProd = cProd;
        this.cEAN = cEAN;
        this.xProd = xProd;
        this.NCM = NCM;
        this.CEST = CEST;
        this.CFOP = CFOP;
        this.uCom = uCom;
        this.qCom = qCom;
        this.vUnCom = vUnCom;
        this.indRegra = indRegra;
        this.vDesc = vDesc;
    }
    return Prod;
}());
exports.Prod = Prod;
