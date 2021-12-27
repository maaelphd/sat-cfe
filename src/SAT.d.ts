import { ModelAtivarSAT } from "../lib/model/acoes/ativar_sat/Ativar_SAT";
import { ModelComunicarCertificadoICPBRASIL } from "../lib/model/acoes/comunicar_certificado_icpbrasil/Comunicar_Certificado_ICPBRASIL";
import { ModelEnviarDadosVenda } from "../lib/model/acoes/envia_dados_venda/Enviar_Dados_Venda";
import { ModelCancelarUltimaVenda } from "../lib/model/acoes/cancela_ultima_venda/Cancelar_Ultima_Venda";
import { ModelConsultarSAT } from "../lib/model/consulta/consultar_sat/Consultar_SAT";
import { ModelTesteFimFim } from "../lib/model/acoes/teste_fim_fim/Teste_Fim_Fim";
import { ModelConsultarStatusOperacional } from "../lib/model/consulta/consultar_status_operacional/Consultar_Status_Operacional";
import { ModelConsultarNumeroSessao } from "../lib/model/consulta/consultar_numero_sessao/Consultar_Numero_Sessao";
import { ModelConfigurarInterfaceRede } from "../lib/model/acoes/configurar_interface_rede/Configurar_Interface_Rede";
import { ModelConfigurarInterfaceRedeDadosConfiguracao } from "../lib/model/acoes/configurar_interface_rede/Configurar_Interface_Rede_Dados_Configuracao";
import { ModelAssociarAssinatura } from "../lib/model/acoes/associar_assinatura/Associar_Assinatura";
import { ModelAtualizarSoftwareSAT } from "../lib/model/acoes/atualizar_software_sat/Atualizar_Software_SAT";
import { ModelExtrairLogs } from "../lib/model/consulta/extrair_logs/Extrair_Logs";
import { ModelBloquearSAT } from "../lib/model/acoes/bloquear_sat/Bloquear_SAT";
import { ModelDesbloquearSAT } from "../lib/model/acoes/desbloquear_sat/Desbloquear_SAT";
import { ModelTrocarCodigoAtivacao } from "../lib/model/acoes/trocar_codigo_atiavacao/Trocar_Codigo_Ativacao";
export declare class SAT {
    private _libraryPath;
    private _codigoAtivacao;
    private _SATLibrary;
    /**
     * Construtor da classe SAT
     * @param { string } libraryPath - Caminho da dll do SAT *SAT.DLL*
     * @param { string } codigoAtivacao - Senha definida pelo contribuinte no software de ativação. Deve conter de 8 a 32 caracteres alfanuméricos
     */
    constructor(libraryPath: string, codigoAtivacao: string);
    readonly libraryPath: string;
    readonly codigoAtivacao: string;
    /**
     * Ativar o aparelho SAT
     * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
     * @param { number } _subComando - Identificador do tipo de certificado - 1 AC-SAT/SEFAZ / A CF-e-SAT | 2 - ICP-BRASIL | 3 - Renovação ICP-BRASIL
     * @param { string } _CNPJ - CNPJ do contribuinte, somente números
     * @param { string } _cUF - Código do Estado da Federação, segundo tabela do IBGE, onde o SAT será ativado.
     * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.1.2 da Especificacao_SAT_v_ER_2_27_05
     */
    ativarSAT: (_numeroSessao: number, _subComando: number, _CNPJ: string, _cUF: number) => Promise<ModelAtivarSAT>;
    /**
     * Comunicar com o certificado ICP Brasil
     * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
     * @param { string } _certificado - Certificado Digital criado pela Autoridade Certificadora – ICPBrasil
     * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.2.2 da Especificacao_SAT_v_ER_2_27_05
     */
    comunicarCertificadoICPBRASIL: (_numeroSessao: number, _certificado: string) => Promise<ModelComunicarCertificadoICPBRASIL>;
    /**
     * Enviar os dados da venda para o aparelho SAT
     * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
     * @param { string } _baseCFe - Refere-se aos dados de venda gerados pelo AC e utilizados para compor o CF-e-SAT
     * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.3.3 da Especificacao_SAT_v_ER_2_27_05
     */
    enviarDadosVenda: (_numeroSessao: number, _baseCFe: string) => Promise<ModelEnviarDadosVenda>;
    /**
     * Cancelar a Ultima venda de acordo com a os valores enviados no _chave e _baseCFeCancelamento
     * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
     * @param { string } _chave - Chave de acesso do CF-e-SAT a ser cancelado precedida do literal ‘CFe’ (vide 4.7) da Especificacao_SAT_v_ER_2_27_05
     * @param { string } _baseCFeCancelamento - Refere-se aos dados da venda gerados pelo AC e utilizados para compor o CF-e-SAT de cancelamento (vide 4.2.3) da Especificacao_SAT_v_ER_2_27_05
     * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.4.2 da Especificacao_SAT_v_ER_2_27_05
     */
    cancelarUltimaVenda: (_numeroSessao: number, _chave: string, _baseCFeCancelamento: string) => Promise<ModelCancelarUltimaVenda>;
    /**
     * Consulta o status do SAT
     * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
     * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.5.2 da Especificacao_SAT_v_ER_2_27_05
     */
    consultarSAT: (_numeroSessao: number) => Promise<ModelConsultarSAT>;
    /**
     * Teste fim a fim, faz teste de venda para o aparelho SAT
     * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
     * @param { string } _baseCFe - Refere-se aos dados de venda gerados pelo AC e utilizados para compor o CF-e-SAT
     * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.6.3 da Especificacao_SAT_v_ER_2_27_05
     */
    testeFimFim: (_numeroSessao: number, _baseCFe: string) => Promise<ModelTesteFimFim>;
    /**
     * Consulta os satatus operacional do SAT
     * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
     * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.7.2 da Especificacao_SAT_v_ER_2_27_05
     */
    consultarStatusOperacional: (_numeroSessao: number) => Promise<ModelConsultarStatusOperacional>;
    /**
     * Consulta o Número sequencial de 6 dígitos da sessao do SAT
     * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
     * @param { number } _cNumeroDeSessao - Número sequencial de 6 dígitos da sessão a ser consultada no SAT
     * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.8.3 da Especificacao_SAT_v_ER_2_27_05
     */
    consultarNumeroSessao: (_numeroSessao: number, _cNumeroSessao: number) => Promise<ModelConsultarNumeroSessao>;
    /**
     * Configurar a Interface de Rede so aparelho SAT
     * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
     * @param { Object } _dadosConfiguracao - Objeto de configuração de rede
     * * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.9.1 da Especificacao_SAT_v_ER_2_27_05
     */
    configurarInterfaceRede: (_numeroSessao: number, _dadosConfiguracao: ModelConfigurarInterfaceRedeDadosConfiguracao) => Promise<ModelConfigurarInterfaceRede>;
    /**
     * Associa o CNPJ da software house ao cnpj do contrinuinte
     * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
     * @param { string } _CNPJvalue - CNPJ da software house concatenado com o CNPJ do contribuinte
     * @param { string } _assinaturaCNPJs - Código hash SHA56 em base64 gerado com o valor contido em _CNPJvalue
     * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.10.2 da Especificacao_SAT_v_ER_2_27_05
     */
    associarAssinatura: (_numeroSessao: number, _CNPJvalue: string, _assinaturaCNPJs: string) => Promise<ModelAssociarAssinatura>;
    /**
     * Atualiza para a mais nova versão do SAT disponibilizada pelo fabircante
     * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
     * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.11.2 da Especificacao_SAT_v_ER_2_27_05
     */
    atualizarSoftwareSAT: (_numeroSessao: number) => Promise<ModelAtualizarSoftwareSAT>;
    /**
     * Extrai dados de loja para ser salvo em arquivo
     * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
     * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.12.2 da Especificacao_SAT_v_ER_2_27_05
     */
    extrairLogs: (_numeroSessao: number) => Promise<ModelExtrairLogs>;
    /**
     * Bloquear o aparelho SAT
     * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
     * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.13.2 da Especificacao_SAT_v_ER_2_27_05
     */
    bloquearSAT: (_numeroSessao: number) => Promise<ModelBloquearSAT>;
    /**
     * Desbloquear o aparelho SAT
     * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
     * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.14.2 da Especificacao_SAT_v_ER_2_27_05
     */
    desbloquearSAT: (_numeroSessao: number) => Promise<ModelDesbloquearSAT>;
    /**
     * Trocar o código de atiavação do aparelho SAT usando o código atual, o de emergência
     * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
     * @param { number } _opcao - Opção do códgio de ativação 1- Código de Ativação / 2 - Código de Ativação de Emergência
     * @param { string } _novoCodigo - Novo código de ativação
     * @param { string } _confNovoCodigo - Confirmação do novo código de ativação
     * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.15.2 da Especificacao_SAT_v_ER_2_27_05
     */
    trocarCodigoDeAtivacao: (_numeroSessao: number, _opcao: number, _novoCodigo: string, _confNovoCodigo: string) => Promise<ModelTrocarCodigoAtivacao>;
}
