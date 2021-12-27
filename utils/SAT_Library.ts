//import ffi from 'ffi-napi';
const ffi = require('ffi-napi');

export var ffiLibrary = new ffi.Library('', {});

export const SATLibrary: (_libraryPath: string) => any = function (
  _libraryPath: string
): any {
  ffiLibrary = new ffi.Library(_libraryPath, {
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
    'TrocarCodigoDeAtivacao': ['string', ['int', 'string', 'int', 'string', 'string']],
  });
};