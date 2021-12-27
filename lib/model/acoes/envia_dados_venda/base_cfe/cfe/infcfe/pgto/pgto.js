"use strict";
exports.__esModule = true;
exports.Pgto = void 0;
var mp_1 = require("./mp/mp");
/** Grupo de informações sobre Pagamento do CFe
* @param { [MP] } MP - Grupo de informações dos Meios de Pagamento empregados na quitação do CF-e
*/
var Pgto = /** @class */ (function () {
    function Pgto(mp) {
        if (mp === void 0) { mp = [new mp_1.MP()]; }
        this.MP = mp;
    }
    return Pgto;
}());
exports.Pgto = Pgto;
