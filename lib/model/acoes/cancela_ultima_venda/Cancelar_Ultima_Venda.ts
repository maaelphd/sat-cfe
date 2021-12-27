export interface IModelCancelarUltimaVenda {
  _numeroSessao: string;
  _EEEEE: string;
  _CCCC: string;
  _mensagem: string;
  _cod: string;
  _mensagemSEFAZ: string;
  _arquivoCfeBase64: String;
  _timeStamp: string;
  _chaveConsulta: string;
  _valorTotalCFe: string;
  _CPFCNPJValue: string;
  _assinaturaQRCODE: string;
}

export class ModelCancelarUltimaVenda implements IModelCancelarUltimaVenda {
  _numeroSessao: string;
  _EEEEE: string;
  _CCCC: string;
  _mensagem: string;
  _cod: string;
  _mensagemSEFAZ: string;
  _arquivoCfeBase64: String;
  _timeStamp: string;
  _chaveConsulta: string;
  _valorTotalCFe: string;
  _CPFCNPJValue: string;
  _assinaturaQRCODE: string;

  constructor(numeroSessao: string = '', EEEEE: string = '', CCCC: string = '', mensagem: string = '', cod: string = '', mensagemSEFAZ: string = '',
              arquivoCfeBase64: String = '', timeStamp: string = '', chaveConsulta: string = '', valorTotalCFe: string = '', CPFCNPJValue: string = '', assinaturaQRCODE: string = '') {
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
  }

  fromArray: (_value: Array<string>) => void = async function (
    _value: Array<string> = []
  ) {
    try {
      this._numeroSessao      = _value[0];
      this._EEEEE             = _value[1];
      this._CCCC              = _value[2];
      this._mensagem          = _value[3];
      this._cod               = _value[4];
      this._mensagemSEFAZ     = _value[5];
      this._arquivoCfeBase64  = _value[6];
      this._timeStamp         = _value[7];
      this._chaveConsulta     = _value[8];
      this._valorTotalCFe     = _value[9];
      this._CPFCNPJValue      = _value[10];
      this._assinaturaQRCODE  = _value[11];
    } catch (error) {
      console.error('ModelCancelarUltimaVenda.fromArray<Exception> ', error);
    }
  };
}