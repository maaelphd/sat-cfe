export interface IModelTesteFimFim {
  _numeroSessao: string;
  _EEEEE: string;
  _mensagem: string;
  _cod: string;
  _mensagemSEFAZ: string;
  _arquivoCfeBase64: String;
  _timeStamp: string;
  _numDocFiscal: string;
  _chaveConsulta: string;
}

export class ModelTesteFimFim implements IModelTesteFimFim {
  _numeroSessao: string;
  _EEEEE: string;
  _mensagem: string;
  _cod: string;
  _mensagemSEFAZ: string;
  _arquivoCfeBase64: String;
  _timeStamp: string;
  _numDocFiscal: string;
  _chaveConsulta: string;

  constructor(numeroSessao: string = '', EEEEE: string = '', mensagem: string = '', cod: string = '', mensagemSEFAZ: string = '',
    arquivoCfeBase64: String = '', timeStamp: string = '', numDocFiscal: string = '', chaveConsulta: string = '') {
    this._numeroSessao = numeroSessao;
    this._EEEEE = EEEEE;
    this._mensagem = mensagem;
    this._cod = cod;
    this._mensagemSEFAZ = mensagemSEFAZ;
    this._arquivoCfeBase64 = arquivoCfeBase64;
    this._timeStamp = timeStamp;
    this._numDocFiscal = numDocFiscal;
    this._chaveConsulta = chaveConsulta;
  }

  fromArray: (_value: Array<string>) => void = async function (
    _value: Array<string> = []
  ) {
    try {
      this._numeroSessao      = _value[0];
      this._EEEEE             = _value[1];
      this._mensagem          = _value[2];
      this._cod               = _value[3];
      this._mensagemSEFAZ     = _value[4];
      this._arquivoCfeBase64  = _value[5];
      this._timeStamp         = _value[6];
      this._numDocFiscal      = _value[7];
      this._chaveConsulta     = _value[8];
    } catch (error) {
      console.error('ModelTesteFimFim.fromArray<Exception> ', error);
    }
  };
}