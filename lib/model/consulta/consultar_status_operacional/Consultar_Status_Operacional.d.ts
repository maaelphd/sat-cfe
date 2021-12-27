export interface IModelConsultarStatusOperacional {
    _numeroSessao: string;
    _EEEEE: string;
    _mensagem: string;
    _cod: string;
    _mensagemSEFAZ: string;
    _conteudoRetorno: ConteudoRetorno;
}
export declare class ModelConsultarStatusOperacional implements IModelConsultarStatusOperacional {
    _numeroSessao: string;
    _EEEEE: string;
    _mensagem: string;
    _cod: string;
    _mensagemSEFAZ: string;
    _conteudoRetorno: ConteudoRetorno;
    constructor(numeroSessao?: string, EEEEE?: string, mensagem?: string, cod?: string, mensagemSEFAZ?: string, conteudoRetorno?: ConteudoRetorno);
    fromArray: (_value: Array<string>) => void;
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
declare class ConteudoRetorno implements IConteudoRetorno {
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
    constructor(NSERIE?: string, TIPO_LAN?: string, LAN_IP?: string, LAN_MAC?: string, LAN_MASK?: string, LAN_GW?: string, LAN_DNS_1?: string, LAN_DNS_2?: string, STATUS_LAN?: string, NIVEL_BATERIA?: string, MT_TOTAL?: string, MT_USADA?: string, DH_ATUAL?: string, VER_SB?: string, VER_LAYOUT?: string, ULTIMO_CFE_SAT?: string, LISTA_INICIAL?: string, LISTA_FINAL?: string, DH_CFe?: string, DH_ULTIMA?: string, CERT_EMISSAO?: string, CERT_VENCIMENTO?: string, ESTADO_OPERACAO?: string);
    fromArray: (_value: Array<string>) => void;
}
export {};
