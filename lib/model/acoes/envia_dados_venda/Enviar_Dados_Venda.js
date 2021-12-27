"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ModelEnviarDadosVenda = void 0;
var xml2js_1 = require("xml2js");
var ModelEnviarDadosVenda = /** @class */ (function () {
    function ModelEnviarDadosVenda(numeroSessao, EEEEE, CCCC, mensagem, cod, mensagemSEFAZ, arquivoCfeBase64, timeStamp, chaveConsulta, valorTotalCFe, CPFCNPJValue, assinaturaQRCODE, XMLRetorno) {
        if (numeroSessao === void 0) { numeroSessao = ''; }
        if (EEEEE === void 0) { EEEEE = ''; }
        if (CCCC === void 0) { CCCC = ''; }
        if (mensagem === void 0) { mensagem = ''; }
        if (cod === void 0) { cod = ''; }
        if (mensagemSEFAZ === void 0) { mensagemSEFAZ = ''; }
        if (arquivoCfeBase64 === void 0) { arquivoCfeBase64 = ''; }
        if (timeStamp === void 0) { timeStamp = ''; }
        if (chaveConsulta === void 0) { chaveConsulta = ''; }
        if (valorTotalCFe === void 0) { valorTotalCFe = ''; }
        if (CPFCNPJValue === void 0) { CPFCNPJValue = ''; }
        if (assinaturaQRCODE === void 0) { assinaturaQRCODE = ''; }
        if (XMLRetorno === void 0) { XMLRetorno = ''; }
        this.fromArray = function (_value) {
            if (_value === void 0) { _value = []; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    try {
                        this._numeroSessao = _value[0];
                        this._EEEEE = _value[1];
                        this._CCCC = _value[2];
                        this._mensagem = _value[3];
                        this._cod = _value[4];
                        this._mensagemSEFAZ = _value[5];
                        this._arquivoCfeBase64 = _value[6];
                        this._timeStamp = _value[7];
                        this._chaveConsulta = _value[8];
                        this._valorTotalCFe = _value[9];
                        this._CPFCNPJValue = _value[10];
                        this._assinaturaQRCODE = _value[11];
                        this.toObject();
                    }
                    catch (error) {
                        console.error('ModelEnviarDadosVenda.fromArray<Exception> ', error);
                    }
                    return [2 /*return*/];
                });
            });
        };
        this._numeroSessao = numeroSessao;
        this._EEEEE = EEEEE;
        this._CCCC = CCCC;
        this._mensagem = mensagem;
        this._cod = cod;
        this._mensagemSEFAZ = mensagemSEFAZ;
        this._arquivoCfeBase64 = arquivoCfeBase64;
        this._timeStamp = timeStamp;
        this._chaveConsulta = chaveConsulta;
        this._valorTotalCFe = valorTotalCFe;
        this._CPFCNPJValue = CPFCNPJValue;
        this._assinaturaQRCODE = assinaturaQRCODE;
        this._XMLRetorno = XMLRetorno;
    }
    ModelEnviarDadosVenda.prototype.toObject = function () {
        var xmlRetorno = null;
        xml2js_1.parseString(decodeURIComponent(escape(atob(this._arquivoCfeBase64))), function (err, result) {
            xmlRetorno = result;
        });
        this._XMLRetorno = xmlRetorno;
    };
    return ModelEnviarDadosVenda;
}());
exports.ModelEnviarDadosVenda = ModelEnviarDadosVenda;
