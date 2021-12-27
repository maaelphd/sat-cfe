"use strict";
exports.__esModule = true;
exports.BaseCFe = void 0;
var cfe_1 = require("./cfe/cfe");
var xml2js = require('xml2js');
var BaseCFe = /** @class */ (function () {
    function BaseCFe(cfe) {
        if (cfe === void 0) { cfe = new cfe_1.CFe(); }
        this.toXML = function () {
            try {
                var builder = new xml2js.Builder();
                // return builder.buildObject(json);
                return builder.buildObject(JSON.parse(JSON.stringify(this, function (key, value) {
                    if ((value !== null) && (value !== ''))
                        return value;
                })));
            }
            catch (error) {
                console.error('BaseCFe.toXML<Exception> ', error);
            }
        };
        this.CFe = cfe;
    }
    return BaseCFe;
}());
exports.BaseCFe = BaseCFe;
