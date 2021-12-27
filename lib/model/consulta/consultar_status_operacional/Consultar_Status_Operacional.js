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
exports.ModelConsultarStatusOperacional = void 0;
var ModelConsultarStatusOperacional = /** @class */ (function () {
    function ModelConsultarStatusOperacional(numeroSessao, EEEEE, mensagem, cod, mensagemSEFAZ, conteudoRetorno) {
        if (numeroSessao === void 0) { numeroSessao = ''; }
        if (EEEEE === void 0) { EEEEE = ''; }
        if (mensagem === void 0) { mensagem = ''; }
        if (cod === void 0) { cod = ''; }
        if (mensagemSEFAZ === void 0) { mensagemSEFAZ = ''; }
        if (conteudoRetorno === void 0) { conteudoRetorno = new ConteudoRetorno(); }
        this.fromArray = function (_value) {
            if (_value === void 0) { _value = []; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    try {
                        this._numeroSessao = _value[0];
                        this._EEEEE = _value[1];
                        this._mensagem = _value[2];
                        this._cod = _value[3];
                        this._mensagemSEFAZ = _value[4];
                        this._conteudoRetorno = new ConteudoRetorno();
                        this._conteudoRetorno.fromArray(_value.splice(5, _value.length));
                    }
                    catch (error) {
                        console.error('ModelConsultarStatusOperacional.fromArray<Exception> ', error);
                    }
                    return [2 /*return*/];
                });
            });
        };
        this._numeroSessao = numeroSessao;
        this._EEEEE = EEEEE;
        this._mensagem = mensagem;
        this._cod = cod;
        this._mensagemSEFAZ = mensagemSEFAZ;
        this._conteudoRetorno = conteudoRetorno;
    }
    return ModelConsultarStatusOperacional;
}());
exports.ModelConsultarStatusOperacional = ModelConsultarStatusOperacional;
var ConteudoRetorno = /** @class */ (function () {
    function ConteudoRetorno(NSERIE, TIPO_LAN, LAN_IP, LAN_MAC, LAN_MASK, LAN_GW, LAN_DNS_1, LAN_DNS_2, STATUS_LAN, NIVEL_BATERIA, MT_TOTAL, MT_USADA, DH_ATUAL, VER_SB, VER_LAYOUT, ULTIMO_CFE_SAT, LISTA_INICIAL, LISTA_FINAL, DH_CFe, DH_ULTIMA, CERT_EMISSAO, CERT_VENCIMENTO, ESTADO_OPERACAO) {
        if (NSERIE === void 0) { NSERIE = ''; }
        if (TIPO_LAN === void 0) { TIPO_LAN = ''; }
        if (LAN_IP === void 0) { LAN_IP = ''; }
        if (LAN_MAC === void 0) { LAN_MAC = ''; }
        if (LAN_MASK === void 0) { LAN_MASK = ''; }
        if (LAN_GW === void 0) { LAN_GW = ''; }
        if (LAN_DNS_1 === void 0) { LAN_DNS_1 = ''; }
        if (LAN_DNS_2 === void 0) { LAN_DNS_2 = ''; }
        if (STATUS_LAN === void 0) { STATUS_LAN = ''; }
        if (NIVEL_BATERIA === void 0) { NIVEL_BATERIA = ''; }
        if (MT_TOTAL === void 0) { MT_TOTAL = ''; }
        if (MT_USADA === void 0) { MT_USADA = ''; }
        if (DH_ATUAL === void 0) { DH_ATUAL = ''; }
        if (VER_SB === void 0) { VER_SB = ''; }
        if (VER_LAYOUT === void 0) { VER_LAYOUT = ''; }
        if (ULTIMO_CFE_SAT === void 0) { ULTIMO_CFE_SAT = ''; }
        if (LISTA_INICIAL === void 0) { LISTA_INICIAL = ''; }
        if (LISTA_FINAL === void 0) { LISTA_FINAL = ''; }
        if (DH_CFe === void 0) { DH_CFe = ''; }
        if (DH_ULTIMA === void 0) { DH_ULTIMA = ''; }
        if (CERT_EMISSAO === void 0) { CERT_EMISSAO = ''; }
        if (CERT_VENCIMENTO === void 0) { CERT_VENCIMENTO = ''; }
        if (ESTADO_OPERACAO === void 0) { ESTADO_OPERACAO = ''; }
        this.fromArray = function (_value) {
            if (_value === void 0) { _value = []; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    try {
                        this._NSERIE = _value[0],
                            this._TIPO_LAN = _value[1],
                            this._LAN_IP = _value[2],
                            this._LAN_MAC = _value[3],
                            this._LAN_MASK = _value[4],
                            this._LAN_GW = _value[5],
                            this._LAN_DNS_1 = _value[6],
                            this._LAN_DNS_2 = _value[7],
                            this._STATUS_LAN = _value[8],
                            this._NIVEL_BATERIA = _value[9],
                            this._MT_TOTAL = _value[10],
                            this._MT_USADA = _value[11],
                            this._DH_ATUAL = _value[12],
                            this._VER_SB = _value[13],
                            this._VER_LAYOUT = _value[14],
                            this._ULTIMO_CFE_SAT = _value[15],
                            this._LISTA_INICIAL = _value[16],
                            this._LISTA_FINAL = _value[17],
                            this._DH_CFe = _value[18],
                            this._DH_ULTIMA = _value[19],
                            this._CERT_EMISSAO = _value[20],
                            this._CERT_VENCIMENTO = _value[21],
                            this._ESTADO_OPERACAO = _value[22];
                    }
                    catch (error) {
                        console.error('ConteudoRetorno.fromArray<Exception> ', error);
                    }
                    return [2 /*return*/];
                });
            });
        };
        this._NSERIE = NSERIE;
        this._TIPO_LAN = TIPO_LAN;
        this._LAN_IP = LAN_IP;
        this._LAN_MAC = LAN_MAC;
        this._LAN_MASK = LAN_MASK;
        this._LAN_GW = LAN_GW;
        this._LAN_DNS_1 = LAN_DNS_1;
        this._LAN_DNS_2 = LAN_DNS_2;
        this._STATUS_LAN = STATUS_LAN;
        this._NIVEL_BATERIA = NIVEL_BATERIA;
        this._MT_TOTAL = MT_TOTAL;
        this._MT_USADA = MT_USADA;
        this._DH_ATUAL = DH_ATUAL;
        this._VER_SB = VER_SB;
        this._VER_LAYOUT = VER_LAYOUT;
        this._ULTIMO_CFE_SAT = ULTIMO_CFE_SAT;
        this._LISTA_INICIAL = LISTA_INICIAL;
        this._LISTA_FINAL = LISTA_FINAL;
        this._DH_CFe = DH_CFe;
        this._DH_ULTIMA = DH_ULTIMA;
        this._CERT_EMISSAO = CERT_EMISSAO;
        this._CERT_VENCIMENTO = CERT_VENCIMENTO;
        this._ESTADO_OPERACAO = ESTADO_OPERACAO;
    }
    return ConteudoRetorno;
}());
