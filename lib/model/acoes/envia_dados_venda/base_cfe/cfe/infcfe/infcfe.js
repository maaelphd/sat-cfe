"use strict";
exports.__esModule = true;
exports.InfCFe = void 0;
var dest_1 = require("./dest/dest");
var det_1 = require("./det/det");
var emit_1 = require("./emit/emit");
var ide_1 = require("./ide/ide");
var total_1 = require("./total/total");
var pgto_1 = require("./pgto/pgto");
var infadic_1 = require("./infadic/infadic");
/** Grupo das informações do CF-e
 * @param { string } versaoDadosEnt - Versão do leiaute do arquivo de dados do AC
 * @param { Ide } ide - Grupo das informações de identificação do CF-e
 * @param { Dest } dest - Grupo de identificação do Destinatário do CF-e
 * @param { Entrega } entrega - Grupo de identificação do Local de entrega
 * @param { [Det] } det - Grupo do detalhamento de Produtos e Serviços do CF-e
 * @param { Total } total - Grupo de Valores Totais do CF-e
 * @param { Pgto } pgto - Grupo de informações sobre Pagamento do CFe
 * @param { InfAdic } infAdic - Grupo de Informações Adicionais
 */
var InfCFe = /** @class */ (function () {
    function InfCFe(versaoDadosEnt, ide, emit, dest, entrega, det, total, pgto, infAdic) {
        if (versaoDadosEnt === void 0) { versaoDadosEnt = ''; }
        if (ide === void 0) { ide = new ide_1.Ide(); }
        if (emit === void 0) { emit = new emit_1.Emit(); }
        if (dest === void 0) { dest = new dest_1.Dest(); }
        if (entrega === void 0) { entrega = null; }
        if (det === void 0) { det = [new det_1.Det()]; }
        if (total === void 0) { total = new total_1.Total(); }
        if (pgto === void 0) { pgto = new pgto_1.Pgto(); }
        if (infAdic === void 0) { infAdic = new infadic_1.InfAdic(); }
        this.$ = {
            versaoDadosEnt: versaoDadosEnt
        };
        this.ide = ide;
        this.emit = emit;
        this.dest = dest;
        this.entrega = entrega;
        this.det = det;
        this.total = total;
        this.pgto = pgto;
        this.infAdic = infAdic;
    }
    return InfCFe;
}());
exports.InfCFe = InfCFe;
