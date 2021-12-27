"use strict";
exports.__esModule = true;
exports.ModelConfigurarInterfaceRedeDadosConfiguracao = void 0;
var xml2js = require('xml2js');
var builder = new xml2js.Builder();
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
var ModelConfigurarInterfaceRedeDadosConfiguracao = /** @class */ (function () {
    function ModelConfigurarInterfaceRedeDadosConfiguracao(tipoInter, SSID, seg, codigo, tipoLan, lanIP, lanMask, lanGW, lanDNS1, lanDNS2, usuario, senha, proxy, proxy_ip, proxy_porta, proxy_user, proxy_senha) {
        if (tipoInter === void 0) { tipoInter = ''; }
        if (SSID === void 0) { SSID = ''; }
        if (seg === void 0) { seg = ''; }
        if (codigo === void 0) { codigo = ''; }
        if (tipoLan === void 0) { tipoLan = ''; }
        if (lanIP === void 0) { lanIP = ''; }
        if (lanMask === void 0) { lanMask = ''; }
        if (lanGW === void 0) { lanGW = ''; }
        if (lanDNS1 === void 0) { lanDNS1 = ''; }
        if (lanDNS2 === void 0) { lanDNS2 = ''; }
        if (usuario === void 0) { usuario = ''; }
        if (senha === void 0) { senha = ''; }
        if (proxy === void 0) { proxy = ''; }
        if (proxy_ip === void 0) { proxy_ip = ''; }
        if (proxy_porta === void 0) { proxy_porta = ''; }
        if (proxy_user === void 0) { proxy_user = ''; }
        if (proxy_senha === void 0) { proxy_senha = ''; }
        this._tipoInter = '';
        this._SSID = '';
        this._seg = '';
        this._codigo = '';
        this._tipoLan = '';
        this._lanIP = '';
        this._lanMask = '';
        this._lanGW = '';
        this._lanDNS1 = '';
        this._lanDNS2 = '';
        this._usuario = '';
        this._senha = '';
        this._proxy = '';
        this._proxy_ip = '';
        this._proxy_porta = '';
        this._proxy_user = '';
        this._proxy_senha = '';
        this.toXML = function () {
            try {
                return builder.buildObject(this);
            }
            catch (error) {
                console.error('ConfigurarInterfaceRedeDadosConfiguracao.toXML<Exception> ', error);
            }
        };
        this._tipoInter = tipoInter;
        this._SSID = SSID;
        this._seg = seg;
        this._codigo = codigo;
        this._tipoLan = tipoLan;
        this._lanIP = lanIP;
        this._lanMask = lanMask;
        this._lanGW = lanGW;
        this._lanDNS1 = lanDNS1;
        this._lanDNS2 = lanDNS2;
        this._usuario = usuario;
        this._senha = senha;
        this._proxy = proxy;
        this._proxy_ip = proxy_ip;
        this._proxy_porta = proxy_porta;
        this._proxy_user = proxy_user;
        this._proxy_senha = proxy_senha;
    }
    return ModelConfigurarInterfaceRedeDadosConfiguracao;
}());
exports.ModelConfigurarInterfaceRedeDadosConfiguracao = ModelConfigurarInterfaceRedeDadosConfiguracao;
