export interface IModelConsultarStatusOperacional {
  _numeroSessao: string;
  _EEEEE: string;
  _mensagem: string;
  _cod: string;
  _mensagemSEFAZ: string;
  _conteudoRetorno: ConteudoRetorno;
}

export class ModelConsultarStatusOperacional implements IModelConsultarStatusOperacional {
  _numeroSessao: string;
  _EEEEE: string;
  _mensagem: string;
  _cod: string;
  _mensagemSEFAZ: string;
  _conteudoRetorno: ConteudoRetorno;

  constructor(numeroSessao: string = '', EEEEE: string = '', mensagem: string = '', cod: string = '', mensagemSEFAZ: string = '', conteudoRetorno: ConteudoRetorno = new ConteudoRetorno()) {
    this._numeroSessao = numeroSessao;
    this._EEEEE = EEEEE;
    this._mensagem = mensagem;
    this._cod = cod;
    this._mensagemSEFAZ = mensagemSEFAZ;
    this._conteudoRetorno = conteudoRetorno;
  }

  fromArray: (_value: Array<string>) => void = async function (
    _value: Array<string> = []
  ) {
    try {
      this._numeroSessao  = _value[0];
      this._EEEEE         = _value[1];
      this._mensagem      = _value[2];
      this._cod           = _value[3];
      this._mensagemSEFAZ = _value[4];
  
      this._conteudoRetorno = new ConteudoRetorno();
      this._conteudoRetorno.fromArray(_value.splice(5, _value.length));
    } catch (error) {
      console.error('ModelConsultarStatusOperacional.fromArray<Exception> ', error);
    }
  };
}

interface IConteudoRetorno {
  _NSERIE: string;
  _TIPO_LAN: string;
  _LAN_IP: string;
  _LAN_MAC: string;
  _LAN_MASK: string;
  _LAN_GW: string;
  _LAN_DNS_1: string;
  _LAN_DNS_2: string;
  _STATUS_LAN: string;
  _NIVEL_BATERIA: string;
  _MT_TOTAL: string;
  _MT_USADA: string;
  _DH_ATUAL: string;
  _VER_SB: string;
  _VER_LAYOUT: string;
  _ULTIMO_CFE_SAT: string;
  _LISTA_INICIAL: string;
  _LISTA_FINAL: string;
  _DH_CFe: string;
  _DH_ULTIMA: string;
  _CERT_EMISSAO: string;
  _CERT_VENCIMENTO: string;
  _ESTADO_OPERACAO: string;
}

class ConteudoRetorno implements IConteudoRetorno {
  _NSERIE: string;
  _TIPO_LAN: string;
  _LAN_IP: string;
  _LAN_MAC: string;
  _LAN_MASK: string;
  _LAN_GW: string;
  _LAN_DNS_1: string;
  _LAN_DNS_2: string;
  _STATUS_LAN: string;
  _NIVEL_BATERIA: string;
  _MT_TOTAL: string;
  _MT_USADA: string;
  _DH_ATUAL: string;
  _VER_SB: string;
  _VER_LAYOUT: string;
  _ULTIMO_CFE_SAT: string;
  _LISTA_INICIAL: string;
  _LISTA_FINAL: string;
  _DH_CFe: string;
  _DH_ULTIMA: string;
  _CERT_EMISSAO: string;
  _CERT_VENCIMENTO: string;
  _ESTADO_OPERACAO: string;

  constructor(NSERIE: string = '', TIPO_LAN: string = '', LAN_IP: string = '', LAN_MAC: string = '', LAN_MASK: string = '', LAN_GW: string = '', LAN_DNS_1: string = '',
    LAN_DNS_2: string = '', STATUS_LAN: string = '', NIVEL_BATERIA: string = '', MT_TOTAL: string = '', MT_USADA: string = '', DH_ATUAL: string = '',
    VER_SB: string = '', VER_LAYOUT: string = '', ULTIMO_CFE_SAT: string = '', LISTA_INICIAL: string = '', LISTA_FINAL: string = '', DH_CFe: string = '',
    DH_ULTIMA: string = '', CERT_EMISSAO: string = '', CERT_VENCIMENTO: string = '', ESTADO_OPERACAO: string = '') {
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

  fromArray: (_value: Array<string>) => void = async function (
    _value: Array<string> = []
  ) {
    try {
      this._NSERIE          = _value[0],
      this._TIPO_LAN        = _value[1],
      this._LAN_IP          = _value[2],
      this._LAN_MAC         = _value[3],
      this._LAN_MASK        = _value[4],
      this._LAN_GW          = _value[5],
      this._LAN_DNS_1       = _value[6],
      this._LAN_DNS_2       = _value[7],
      this._STATUS_LAN      = _value[8],
      this._NIVEL_BATERIA   = _value[9],
      this._MT_TOTAL        = _value[10],
      this._MT_USADA        = _value[11],
      this._DH_ATUAL        = _value[12],
      this._VER_SB          = _value[13],
      this._VER_LAYOUT      = _value[14],
      this._ULTIMO_CFE_SAT  = _value[15],
      this._LISTA_INICIAL   = _value[16],
      this._LISTA_FINAL     = _value[17],
      this._DH_CFe          = _value[18],
      this._DH_ULTIMA       = _value[19],
      this._CERT_EMISSAO    = _value[20],
      this._CERT_VENCIMENTO = _value[21],
      this._ESTADO_OPERACAO = _value[22]
    } catch (error) {
      console.error('ConteudoRetorno.fromArray<Exception> ', error);
    }
  };
}