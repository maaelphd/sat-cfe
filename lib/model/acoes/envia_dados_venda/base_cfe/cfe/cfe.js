"use strict";
exports.__esModule = true;
exports.CFe = void 0;
var infcfe_1 = require("./infcfe/infcfe");
var CFe = /** @class */ (function () {
    function CFe(infCFe) {
        if (infCFe === void 0) { infCFe = new infcfe_1.InfCFe(); }
        this.infCFe = infCFe;
    }
    return CFe;
}());
exports.CFe = CFe;
