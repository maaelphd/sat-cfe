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
exports.SAT = void 0;
var SAT_Library_1 = require("../utils/SAT_Library");
var Ativar_SAT_1 = require("../lib/acoes/ativar_sat/Ativar_SAT");
var Comunicar_Certificado_ICPBRASIL_1 = require("../lib/acoes/comunicar_certificado_icpbrasil/Comunicar_Certificado_ICPBRASIL");
var Enviar_Dados_Venda_1 = require("../lib/acoes/enviar_dados_venda/Enviar_Dados_Venda");
var Cancela_Ultima_Venda_1 = require("../lib/acoes/cancela_ultima_venda/Cancela_Ultima_Venda");
var Consultar_SAT_1 = require("../lib/consulta/consultar_sat/Consultar_SAT");
var Teste_Fim_Fim_1 = require("../lib/acoes/teste_fim_fim/Teste_Fim_Fim");
var Consultar_Status_Operacional_1 = require("../lib/consulta/consultar_status_operacional/Consultar_Status_Operacional");
var Configurar_Interface_Rede_1 = require("../lib/acoes/configurar_interface_rede/Configurar_Interface_Rede");
var Consultar_Numero_Sessao_1 = require("../lib/consulta/consultar_numero_sessao/Consultar_Numero_Sessao");
var Associar_Assinatura_1 = require("../lib/acoes/associar_assinatura/Associar_Assinatura");
var Atualizar_Software_SAT_1 = require("../lib/acoes/atualizar_software_sat/Atualizar_Software_SAT");
var Extrair_Logs_1 = require("../lib/consulta/extrair_logs/Extrair_Logs");
var Bloquear_SAT_1 = require("../lib//acoes/bloquear_sat/Bloquear_SAT");
var Desbloquear_SAT_1 = require("../lib/acoes/desbloquear_sat/Desbloquear_SAT");
var Trocar_Codigo_Ativacao_1 = require("../lib/acoes/trocar_codigo_ativacao/Trocar_Codigo_Ativacao");
// * MODELS
var Ativar_SAT_2 = require("../lib/model/acoes/ativar_sat/Ativar_SAT");
var Comunicar_Certificado_ICPBRASIL_2 = require("../lib/model/acoes/comunicar_certificado_icpbrasil/Comunicar_Certificado_ICPBRASIL");
var Enviar_Dados_Venda_2 = require("../lib/model/acoes/envia_dados_venda/Enviar_Dados_Venda");
var Cancelar_Ultima_Venda_1 = require("../lib/model/acoes/cancela_ultima_venda/Cancelar_Ultima_Venda");
var Consultar_SAT_2 = require("../lib/model/consulta/consultar_sat/Consultar_SAT");
var Teste_Fim_Fim_2 = require("../lib/model/acoes/teste_fim_fim/Teste_Fim_Fim");
var Consultar_Status_Operacional_2 = require("../lib/model/consulta/consultar_status_operacional/Consultar_Status_Operacional");
var Consultar_Numero_Sessao_2 = require("../lib/model/consulta/consultar_numero_sessao/Consultar_Numero_Sessao");
var Configurar_Interface_Rede_2 = require("../lib/model/acoes/configurar_interface_rede/Configurar_Interface_Rede");
var Associar_Assinatura_2 = require("../lib/model/acoes/associar_assinatura/Associar_Assinatura");
var Atualizar_Software_SAT_2 = require("../lib/model/acoes/atualizar_software_sat/Atualizar_Software_SAT");
var Extrair_Logs_2 = require("../lib/model/consulta/extrair_logs/Extrair_Logs");
var Bloquear_SAT_2 = require("../lib/model/acoes/bloquear_sat/Bloquear_SAT");
var Desbloquear_SAT_2 = require("../lib/model/acoes/desbloquear_sat/Desbloquear_SAT");
var Trocar_Codigo_Ativacao_2 = require("../lib/model/acoes/trocar_codigo_atiavacao/Trocar_Codigo_Ativacao");
var SAT = /** @class */ (function () {
    /**
     * Construtor da classe SAT
     * @param { string } libraryPath - Caminho da dll do SAT *SAT.DLL*
     * @param { string } codigoAtivacao - Senha definida pelo contribuinte no software de ativação. Deve conter de 8 a 32 caracteres alfanuméricos
     */
    function SAT(libraryPath, codigoAtivacao) {
        /**
         * Ativar o aparelho SAT
         * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
         * @param { number } _subComando - Identificador do tipo de certificado - 1 AC-SAT/SEFAZ / A CF-e-SAT | 2 - ICP-BRASIL | 3 - Renovação ICP-BRASIL
         * @param { string } _CNPJ - CNPJ do contribuinte, somente números
         * @param { string } _cUF - Código do Estado da Federação, segundo tabela do IBGE, onde o SAT será ativado.
         * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.1.2 da Especificacao_SAT_v_ER_2_27_05
         */
        this.ativarSAT = function (_numeroSessao, _subComando, _CNPJ, _cUF) {
            return __awaiter(this, void 0, void 0, function () {
                var _modelAtivarSAT_1, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            _modelAtivarSAT_1 = new Ativar_SAT_2.ModelAtivarSAT();
                            return [4 /*yield*/, Ativar_SAT_1.ativarSAT(_numeroSessao, _subComando, this._codigoAtivacao, _CNPJ, _cUF)
                                    .then(function (result) {
                                    _modelAtivarSAT_1 = result;
                                })["catch"](function (error) {
                                    throw new Error(error);
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, _modelAtivarSAT_1];
                        case 2:
                            error_1 = _a.sent();
                            console.error('AtivarSAT<Exception> ', error_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Comunicar com o certificado ICP Brasil
         * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
         * @param { string } _certificado - Certificado Digital criado pela Autoridade Certificadora – ICPBrasil
         * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.2.2 da Especificacao_SAT_v_ER_2_27_05
         */
        this.comunicarCertificadoICPBRASIL = function (_numeroSessao, _certificado) {
            return __awaiter(this, void 0, void 0, function () {
                var _modelComunicarCertificadoICPBRASIL_1, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            _modelComunicarCertificadoICPBRASIL_1 = new Comunicar_Certificado_ICPBRASIL_2.ModelComunicarCertificadoICPBRASIL();
                            return [4 /*yield*/, Comunicar_Certificado_ICPBRASIL_1.comunicarCertificadoICPBRASIL(_numeroSessao, this._codigoAtivacao, _certificado)
                                    .then(function (result) {
                                    _modelComunicarCertificadoICPBRASIL_1 = result;
                                })["catch"](function (error) {
                                    throw new Error(error);
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, _modelComunicarCertificadoICPBRASIL_1];
                        case 2:
                            error_2 = _a.sent();
                            console.error('ComunicarCertificadoICPBRASIL<Exception> ', error_2);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Enviar os dados da venda para o aparelho SAT
         * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
         * @param { string } _baseCFe - Refere-se aos dados de venda gerados pelo AC e utilizados para compor o CF-e-SAT
         * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.3.3 da Especificacao_SAT_v_ER_2_27_05
         */
        this.enviarDadosVenda = function (_numeroSessao, _baseCFe) {
            return __awaiter(this, void 0, void 0, function () {
                var _modelEnviarDadosVenda_1, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            _modelEnviarDadosVenda_1 = new Enviar_Dados_Venda_2.ModelEnviarDadosVenda();
                            return [4 /*yield*/, Enviar_Dados_Venda_1.enviarDadosVenda(_numeroSessao, this._codigoAtivacao, _baseCFe)
                                    .then(function (result) {
                                    _modelEnviarDadosVenda_1 = result;
                                })["catch"](function (error) {
                                    throw new Error(error);
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, _modelEnviarDadosVenda_1];
                        case 2:
                            error_3 = _a.sent();
                            console.error('EnviarDadosVenda<Exception> ', error_3);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Cancelar a Ultima venda de acordo com a os valores enviados no _chave e _baseCFeCancelamento
         * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
         * @param { string } _chave - Chave de acesso do CF-e-SAT a ser cancelado precedida do literal ‘CFe’ (vide 4.7) da Especificacao_SAT_v_ER_2_27_05
         * @param { string } _baseCFeCancelamento - Refere-se aos dados da venda gerados pelo AC e utilizados para compor o CF-e-SAT de cancelamento (vide 4.2.3) da Especificacao_SAT_v_ER_2_27_05
         * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.4.2 da Especificacao_SAT_v_ER_2_27_05
         */
        this.cancelarUltimaVenda = function (_numeroSessao, _chave, _baseCFeCancelamento) {
            return __awaiter(this, void 0, void 0, function () {
                var _modelCancelarUltimaVenda_1, error_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            _modelCancelarUltimaVenda_1 = new Cancelar_Ultima_Venda_1.ModelCancelarUltimaVenda();
                            return [4 /*yield*/, Cancela_Ultima_Venda_1.cancelarUltimaVenda(_numeroSessao, this._codigoAtivacao, _chave, _baseCFeCancelamento)
                                    .then(function (result) {
                                    _modelCancelarUltimaVenda_1 = result;
                                })["catch"](function (error) {
                                    throw new Error(error);
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, _modelCancelarUltimaVenda_1];
                        case 2:
                            error_4 = _a.sent();
                            console.error('CancelarUltimaVenda<Exception> ', error_4);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Consulta o status do SAT
         * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
         * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.5.2 da Especificacao_SAT_v_ER_2_27_05
         */
        this.consultarSAT = function (_numeroSessao) {
            if (_numeroSessao === void 0) { _numeroSessao = 0; }
            return __awaiter(this, void 0, void 0, function () {
                var _modelConsultarSAT_1, error_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            _modelConsultarSAT_1 = new Consultar_SAT_2.ModelConsultarSAT();
                            return [4 /*yield*/, Consultar_SAT_1.consultarSAT(_numeroSessao)
                                    .then(function (result) {
                                    _modelConsultarSAT_1 = result;
                                })["catch"](function (error) {
                                    throw new Error(error);
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, _modelConsultarSAT_1];
                        case 2:
                            error_5 = _a.sent();
                            console.error('ConsultarSAT<Exception> ', error_5);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Teste fim a fim, faz teste de venda para o aparelho SAT
         * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
         * @param { string } _baseCFe - Refere-se aos dados de venda gerados pelo AC e utilizados para compor o CF-e-SAT
         * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.6.3 da Especificacao_SAT_v_ER_2_27_05
         */
        this.testeFimFim = function (_numeroSessao, _baseCFe) {
            return __awaiter(this, void 0, void 0, function () {
                var _modelTesteFimFim_1, error_6;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            _modelTesteFimFim_1 = new Teste_Fim_Fim_2.ModelTesteFimFim();
                            return [4 /*yield*/, Teste_Fim_Fim_1.testeFimFim(_numeroSessao, this._codigoAtivacao, _baseCFe)
                                    .then(function (result) {
                                    _modelTesteFimFim_1 = result;
                                })["catch"](function (error) {
                                    throw new Error(error);
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, _modelTesteFimFim_1];
                        case 2:
                            error_6 = _a.sent();
                            console.error('TesteFimFim<Exception> ', error_6);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Consulta os satatus operacional do SAT
         * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
         * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.7.2 da Especificacao_SAT_v_ER_2_27_05
         */
        this.consultarStatusOperacional = function (_numeroSessao) {
            return __awaiter(this, void 0, void 0, function () {
                var _modelConsultarStatusOperacional_1, error_7;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            _modelConsultarStatusOperacional_1 = new Consultar_Status_Operacional_2.ModelConsultarStatusOperacional();
                            return [4 /*yield*/, Consultar_Status_Operacional_1.consultarStatusOperacional(_numeroSessao, this._codigoAtivacao)
                                    .then(function (result) {
                                    _modelConsultarStatusOperacional_1 = result;
                                })["catch"](function (error) {
                                    throw new Error(error);
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, _modelConsultarStatusOperacional_1];
                        case 2:
                            error_7 = _a.sent();
                            console.error('ConsultarStatusOperacional<Exception> ', error_7);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Consulta o Número sequencial de 6 dígitos da sessao do SAT
         * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
         * @param { number } _cNumeroDeSessao - Número sequencial de 6 dígitos da sessão a ser consultada no SAT
         * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.8.3 da Especificacao_SAT_v_ER_2_27_05
         */
        this.consultarNumeroSessao = function (_numeroSessao, _cNumeroSessao) {
            return __awaiter(this, void 0, void 0, function () {
                var _modelConsultarNumeroSessao_1, error_8;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            _modelConsultarNumeroSessao_1 = new Consultar_Numero_Sessao_2.ModelConsultarNumeroSessao();
                            return [4 /*yield*/, Consultar_Numero_Sessao_1.consultarNumeroSessao(_numeroSessao, this._codigoAtivacao, _cNumeroSessao)
                                    .then(function (result) {
                                    _modelConsultarNumeroSessao_1 = result;
                                })["catch"](function (error) {
                                    throw new Error(error);
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, _modelConsultarNumeroSessao_1];
                        case 2:
                            error_8 = _a.sent();
                            console.error('ConsultarNumeroSessao<Exception> ', error_8);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Configurar a Interface de Rede so aparelho SAT
         * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
         * @param { Object } _dadosConfiguracao - Objeto de configuração de rede
         * * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.9.1 da Especificacao_SAT_v_ER_2_27_05
         */
        this.configurarInterfaceRede = function (_numeroSessao, _dadosConfiguracao) {
            return __awaiter(this, void 0, void 0, function () {
                var _modelConfigurarInterfaceRede_1, error_9;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            _modelConfigurarInterfaceRede_1 = new Configurar_Interface_Rede_2.ModelConfigurarInterfaceRede();
                            return [4 /*yield*/, Configurar_Interface_Rede_1.configurarInterfaceRede(_numeroSessao, this._codigoAtivacao, _dadosConfiguracao)
                                    .then(function (result) {
                                    _modelConfigurarInterfaceRede_1 = result;
                                })["catch"](function (error) {
                                    throw new Error(error);
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, _modelConfigurarInterfaceRede_1];
                        case 2:
                            error_9 = _a.sent();
                            console.error('ConfigurarInterfaceRede<Exception> ', error_9);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Associa o CNPJ da software house ao cnpj do contrinuinte
         * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
         * @param { string } _CNPJvalue - CNPJ da software house concatenado com o CNPJ do contribuinte
         * @param { string } _assinaturaCNPJs - Código hash SHA56 em base64 gerado com o valor contido em _CNPJvalue
         * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.10.2 da Especificacao_SAT_v_ER_2_27_05
         */
        this.associarAssinatura = function (_numeroSessao, _CNPJvalue, _assinaturaCNPJs) {
            return __awaiter(this, void 0, void 0, function () {
                var _modelAssociarAssinatura_1, error_10;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            _modelAssociarAssinatura_1 = new Associar_Assinatura_2.ModelAssociarAssinatura();
                            return [4 /*yield*/, Associar_Assinatura_1.associarAssinatura(_numeroSessao, this._codigoAtivacao, _CNPJvalue, _assinaturaCNPJs)
                                    .then(function (result) {
                                    _modelAssociarAssinatura_1 = result;
                                })["catch"](function (error) {
                                    throw new Error(error);
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, _modelAssociarAssinatura_1];
                        case 2:
                            error_10 = _a.sent();
                            console.error('AssociarAssinatura<Exception> ', error_10);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Atualiza para a mais nova versão do SAT disponibilizada pelo fabircante
         * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
         * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.11.2 da Especificacao_SAT_v_ER_2_27_05
         */
        this.atualizarSoftwareSAT = function (_numeroSessao) {
            return __awaiter(this, void 0, void 0, function () {
                var _modelAtualizarSoftwareSAT_1, error_11;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            _modelAtualizarSoftwareSAT_1 = new Atualizar_Software_SAT_2.ModelAtualizarSoftwareSAT();
                            return [4 /*yield*/, Atualizar_Software_SAT_1.atualizarSoftwareSAT(_numeroSessao, this._codigoAtivacao)
                                    .then(function (result) {
                                    _modelAtualizarSoftwareSAT_1 = result;
                                })["catch"](function (error) {
                                    throw new Error(error);
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, _modelAtualizarSoftwareSAT_1];
                        case 2:
                            error_11 = _a.sent();
                            console.error('AtualizarSoftwareSAT<Exception> ', error_11);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Extrai dados de loja para ser salvo em arquivo
         * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
         * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.12.2 da Especificacao_SAT_v_ER_2_27_05
         */
        this.extrairLogs = function (_numeroSessao) {
            return __awaiter(this, void 0, void 0, function () {
                var _modelExtrairLogs_1, error_12;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            _modelExtrairLogs_1 = new Extrair_Logs_2.ModelExtrairLogs();
                            return [4 /*yield*/, Extrair_Logs_1.extrairLogs(_numeroSessao, this._codigoAtivacao)
                                    .then(function (result) {
                                    _modelExtrairLogs_1 = result;
                                })["catch"](function (error) {
                                    throw new Error(error);
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, _modelExtrairLogs_1];
                        case 2:
                            error_12 = _a.sent();
                            console.error('ExtrairLogs<Exception> ', error_12);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Bloquear o aparelho SAT
         * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
         * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.13.2 da Especificacao_SAT_v_ER_2_27_05
         */
        this.bloquearSAT = function (_numeroSessao) {
            return __awaiter(this, void 0, void 0, function () {
                var _modelBloquearSAT_1, error_13;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            _modelBloquearSAT_1 = new Bloquear_SAT_2.ModelBloquearSAT();
                            return [4 /*yield*/, Bloquear_SAT_1.bloquearSAT(_numeroSessao, this._codigoAtivacao)
                                    .then(function (result) {
                                    _modelBloquearSAT_1 = result;
                                })["catch"](function (error) {
                                    throw new Error(error);
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, _modelBloquearSAT_1];
                        case 2:
                            error_13 = _a.sent();
                            console.error('BloquearSAT<Exception> ', error_13);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Desbloquear o aparelho SAT
         * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
         * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.14.2 da Especificacao_SAT_v_ER_2_27_05
         */
        this.desbloquearSAT = function (_numeroSessao) {
            return __awaiter(this, void 0, void 0, function () {
                var _modelDesbloquearSAT_1, error_14;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            _modelDesbloquearSAT_1 = new Desbloquear_SAT_2.ModelDesbloquearSAT();
                            return [4 /*yield*/, Desbloquear_SAT_1.desbloquearSAT(_numeroSessao, this._codigoAtivacao)
                                    .then(function (result) {
                                    _modelDesbloquearSAT_1 = result;
                                })["catch"](function (error) {
                                    throw new Error(error);
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, _modelDesbloquearSAT_1];
                        case 2:
                            error_14 = _a.sent();
                            console.error('DesbloquearSAT<Exception> ', error_14);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Trocar o código de atiavação do aparelho SAT usando o código atual, o de emergência
         * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
         * @param { number } _opcao - Opção do códgio de ativação 1- Código de Ativação / 2 - Código de Ativação de Emergência
         * @param { string } _novoCodigo - Novo código de ativação
         * @param { string } _confNovoCodigo - Confirmação do novo código de ativação
         * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.15.2 da Especificacao_SAT_v_ER_2_27_05
         */
        this.trocarCodigoDeAtivacao = function (_numeroSessao, _opcao, _novoCodigo, _confNovoCodigo) {
            return __awaiter(this, void 0, void 0, function () {
                var _modelTrocarCodigoAtivacao_1, error_15;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            _modelTrocarCodigoAtivacao_1 = new Trocar_Codigo_Ativacao_2.ModelTrocarCodigoAtivacao();
                            return [4 /*yield*/, Trocar_Codigo_Ativacao_1.trocarCodigoDeAtivacao(_numeroSessao, this._codigoAtivacao, _opcao, _novoCodigo, _confNovoCodigo)
                                    .then(function (result) {
                                    _modelTrocarCodigoAtivacao_1 = result;
                                })["catch"](function (error) {
                                    throw new Error(error);
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, _modelTrocarCodigoAtivacao_1];
                        case 2:
                            error_15 = _a.sent();
                            console.error('DesbloquearSAT<Exception> ', error_15);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        this._libraryPath = libraryPath;
        this._codigoAtivacao = codigoAtivacao;
        this._SATLibrary = SAT_Library_1.SATLibrary(this._libraryPath);
    }
    return SAT;
}());
exports.SAT = SAT;
