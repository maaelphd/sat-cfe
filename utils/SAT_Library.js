"use strict";
exports.__esModule = true;
exports.SATLibrary = exports.ffiLibrary = void 0;
//import ffi from 'ffi-napi';
var ffi = require('ffi-napi');
exports.ffiLibrary = new ffi.Library('', {});
var SATLibrary = function (_libraryPath) {
    exports.ffiLibrary = new ffi.Library(_libraryPath, {
        'AtivarSAT': ['string', ['int', 'int', 'string', 'string', 'int']],
        'ComunicarCertificadoICPBRASIL': ['string', ['int', 'string', 'string']],
        'EnviarDadosVenda': ['string', ['int', 'string', 'string']],
        'CancelarUltimaVenda': ['string', ['int', 'string', 'string', 'string']],
        'ConsultarSAT': ['string', ['int']],
        'TesteFimAFim': ['string', ['int', 'string', 'string']],
        'ConsultarStatusOperacional': ['string', ['int', 'string']],
        'ConsultarNumeroSessao': ['string', ['int', 'string', 'int']],
        'ConfigurarInterfaceDeRede': ['string', ['int', 'string', 'string']],
        'AssociarAssinatura': ['string', ['int', 'string', 'string', 'string']],
        'AtualizarSoftwareSAT': ['string', ['int', 'string']],
        'ExtrairLogs': ['string', ['int', 'string']],
        'BloquearSAT': ['string', ['int', 'string']],
        'DesbloquearSAT': ['string', ['int', 'string']],
        'TrocarCodigoDeAtivacao': ['string', ['int', 'string', 'int', 'string', 'string']]
    });
};
exports.SATLibrary = SATLibrary;
