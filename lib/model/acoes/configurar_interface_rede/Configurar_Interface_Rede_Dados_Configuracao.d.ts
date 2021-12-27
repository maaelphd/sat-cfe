export interface IModelConfigurarInterfaceRedeDadosConfiguracao {
    _tipoInter: string;
    _SSID: string;
    _seg: string;
    _codigo: string;
    _tipoLan: string;
    _lanIP: string;
    _lanMask: string;
    _lanGW: string;
    _lanDNS1: string;
    _lanDNS2: string;
    _usuario: string;
    _senha: string;
    _proxy: string;
    _proxy_ip: string;
    _proxy_porta: string;
    _proxy_user: string;
    _proxy_senha: string;
}
/**
 * Dados de configuração da Interface de Rede
 * @param { string } _tipoInter - Tipo de interface de rede utilizada pelo Equipamento. “ETHE”, “WIFI”
 * @param { string } _SSID - Nome da rede sem fio do estabelecimento
 * @param { string } _seg - Nome da rede sem fio do estabelecimento
 * @param { string } codigo - Frase ou chave de acesso à sem fio.
 * @param { string } tipoLan - Tipo de Rede LAN utilizada
 * @param { string } lanIP - Endereço IP.
 * @param { string } lanMask - Máscara de sub-rede.
 * @param { string } lanGW - Gateway Padrão.
 * @param { string } lanDNS1 - DNS preferencial
 * @param { string } lanDNS2 - DNS alternativo.
 * @param { string } usuario - Se a rede necessitar de usuário para obtenção do endereço IP.
 * @param { string } senha - Se a rede necessitar de senha para obtenção do endereço IP.
 * @param { string } proxy - Se a rede usa proxy para o protocolo navegação do protocolo HTTPs.
 * @param { string } proxy_ip - Endereço IP do Servidor Proxy.
 * @param { string } proxy_porta - Porta TCP do Servidor de Proxy.
 * @param { string } proxy_user - Se o proxy necessitar de usuário para navegação.
 * @param { string } proxy_senha - Se o proxy necessitar de senha para navegação.
*/
export declare class ModelConfigurarInterfaceRedeDadosConfiguracao implements IModelConfigurarInterfaceRedeDadosConfiguracao {
    _tipoInter: string;
    _SSID: string;
    _seg: string;
    _codigo: string;
    _tipoLan: string;
    _lanIP: string;
    _lanMask: string;
    _lanGW: string;
    _lanDNS1: string;
    _lanDNS2: string;
    _usuario: string;
    _senha: string;
    _proxy: string;
    _proxy_ip: string;
    _proxy_porta: string;
    _proxy_user: string;
    _proxy_senha: string;
    constructor(tipoInter?: string, SSID?: string, seg?: string, codigo?: string, tipoLan?: string, lanIP?: string, lanMask?: string, lanGW?: string, lanDNS1?: string, lanDNS2?: string, usuario?: string, senha?: string, proxy?: string, proxy_ip?: string, proxy_porta?: string, proxy_user?: string, proxy_senha?: string);
    toXML: () => string;
}
