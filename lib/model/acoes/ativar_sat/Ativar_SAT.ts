export interface IModelAtivarSAT {
  _numeroSessao: string;
  _EEEEE: string;
  _mensagem: string;
  _cod: string;
  _mensagemSEFAZ: string;
  _CSR: string;
}

export class ModelAtivarSAT implements IModelAtivarSAT { 
  _numeroSessao: string;
  _EEEEE: string;
  _mensagem: string;
  _cod: string;
  _mensagemSEFAZ: string;
  _CSR: string;

  constructor(numeroSessao: string = '', EEEEE: string = '', mensagem: string = '', cod: string = '', mensagemSEFAZ: string = '', CSR: string = '') {
    this._numeroSessao = numeroSessao;
    this._EEEEE = EEEEE;
    this._mensagem = mensagem;
    this._cod = cod;
    this._mensagemSEFAZ = mensagemSEFAZ;
    this._CSR = CSR;
  }

  fromArray: (_value: Array<string>) => void = async function (
    _value: Array<string> = []
  ) {
    try {
      this._numeroSessao   = _value[0];
      this._EEEEE          = _value[1];
      this._mensagem       = _value[2];
      this._cod            = _value[3];
      this._mensagemSEFAZ  = _value[4];
      this._CSR            = _value[5];
    } catch (error) {
      console.error('ModelAtivarSAT.fromArray<Exception> ', error);
    }
  };
}