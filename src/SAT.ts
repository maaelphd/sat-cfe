import { SATLibrary } from "../utils/SAT_Library";
import { ativarSAT } from "../lib/acoes/ativar_sat/Ativar_SAT";
import { comunicarCertificadoICPBRASIL } from "../lib/acoes/comunicar_certificado_icpbrasil/Comunicar_Certificado_ICPBRASIL";
import { enviarDadosVenda } from "../lib/acoes/enviar_dados_venda/Enviar_Dados_Venda";
import { cancelarUltimaVenda } from "../lib/acoes/cancela_ultima_venda/Cancela_Ultima_Venda";
import { consultarSAT } from '../lib/consulta/consultar_sat/Consultar_SAT';
import { testeFimFim } from "../lib/acoes/teste_fim_fim/Teste_Fim_Fim";
import { consultarStatusOperacional } from "../lib/consulta/consultar_status_operacional/Consultar_Status_Operacional";
import { configurarInterfaceRede } from "../lib/acoes/configurar_interface_rede/Configurar_Interface_Rede";
import { consultarNumeroSessao } from "../lib/consulta/consultar_numero_sessao/Consultar_Numero_Sessao";
import { associarAssinatura } from "../lib/acoes/associar_assinatura/Associar_Assinatura";
import { atualizarSoftwareSAT } from "../lib/acoes/atualizar_software_sat/Atualizar_Software_SAT";
import { extrairLogs } from "../lib/consulta/extrair_logs/Extrair_Logs";
import { bloquearSAT } from "../lib//acoes/bloquear_sat/Bloquear_SAT";
import { desbloquearSAT } from "../lib/acoes/desbloquear_sat/Desbloquear_SAT";
import { trocarCodigoDeAtivacao } from "../lib/acoes/trocar_codigo_ativacao/Trocar_Codigo_Ativacao";

// * MODELS
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

export class SAT {
  private _libraryPath: string;
  private _codigoAtivacao: string;
  private _SATLibrary: typeof SATLibrary;

  /**
   * Construtor da classe SAT
   * @param { string } libraryPath - Caminho da dll do SAT *SAT.DLL*
   * @param { string } codigoAtivacao - Senha definida pelo contribuinte no software de ativação. Deve conter de 8 a 32 caracteres alfanuméricos
   */
  constructor(
    libraryPath: string,
    codigoAtivacao: string
  ) {
    this._libraryPath = libraryPath;
    this._codigoAtivacao = codigoAtivacao;

    this._SATLibrary = SATLibrary(this._libraryPath);
  }
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
  ativarSAT: (_numeroSessao: number, _subComando: number, _CNPJ: string, _cUF: number) => Promise<ModelAtivarSAT> = async function (
    _numeroSessao: number,
    _subComando: number,
    _CNPJ: string,
    _cUF: number
  ): Promise<ModelAtivarSAT> {
    try {
      let _modelAtivarSAT = new ModelAtivarSAT();

      await ativarSAT(_numeroSessao, _subComando, this._codigoAtivacao, _CNPJ, _cUF)
      .then((result) => {
        _modelAtivarSAT = result;
      })
      .catch((error) => {
        throw new Error(error);
      })

      return _modelAtivarSAT;
      
    } catch (error) {
      console.error('AtivarSAT<Exception> ', error);
    }
  };

  /**
   * Comunicar com o certificado ICP Brasil
   * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
   * @param { string } _certificado - Certificado Digital criado pela Autoridade Certificadora – ICPBrasil
   * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.2.2 da Especificacao_SAT_v_ER_2_27_05
   */
  comunicarCertificadoICPBRASIL: (_numeroSessao: number, _certificado: string) => Promise<ModelComunicarCertificadoICPBRASIL> = async function (
    _numeroSessao: number,
    _certificado: string
  ): Promise<ModelComunicarCertificadoICPBRASIL> {
    try {
      let _modelComunicarCertificadoICPBRASIL = new ModelComunicarCertificadoICPBRASIL();

      await comunicarCertificadoICPBRASIL(_numeroSessao, this._codigoAtivacao, _certificado)
      .then((result) => {
        _modelComunicarCertificadoICPBRASIL = result;
      })
      .catch((error) => {
        throw new Error(error);
      })

      return _modelComunicarCertificadoICPBRASIL;
      
    } catch (error) {
      console.error('ComunicarCertificadoICPBRASIL<Exception> ', error);
    }
  };

  /**
   * Enviar os dados da venda para o aparelho SAT
   * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
   * @param { string } _baseCFe - Refere-se aos dados de venda gerados pelo AC e utilizados para compor o CF-e-SAT
   * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.3.3 da Especificacao_SAT_v_ER_2_27_05
   */
  enviarDadosVenda: (_numeroSessao: number, _baseCFe: string) => Promise<ModelEnviarDadosVenda> = async function (
    _numeroSessao: number,
    _baseCFe: string
  ): Promise<ModelEnviarDadosVenda> {
    try {
      let _modelEnviarDadosVenda = new ModelEnviarDadosVenda();

      await enviarDadosVenda(_numeroSessao, this._codigoAtivacao, _baseCFe)
      .then((result) => {
        _modelEnviarDadosVenda = result;
      })
      .catch((error) => {
        throw new Error(error);     
      })

      return _modelEnviarDadosVenda;
      
    } catch (error) {
      console.error('EnviarDadosVenda<Exception> ', error);
    }
  };

  /**
   * Cancelar a Ultima venda de acordo com a os valores enviados no _chave e _baseCFeCancelamento
   * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
   * @param { string } _chave - Chave de acesso do CF-e-SAT a ser cancelado precedida do literal ‘CFe’ (vide 4.7) da Especificacao_SAT_v_ER_2_27_05
   * @param { string } _baseCFeCancelamento - Refere-se aos dados da venda gerados pelo AC e utilizados para compor o CF-e-SAT de cancelamento (vide 4.2.3) da Especificacao_SAT_v_ER_2_27_05
   * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.4.2 da Especificacao_SAT_v_ER_2_27_05
   */
  cancelarUltimaVenda: (_numeroSessao: number, _chave: string, _baseCFeCancelamento: string) => Promise<ModelCancelarUltimaVenda> = async function (
    _numeroSessao: number,
    _chave: string,
    _baseCFeCancelamento: string
  ): Promise<ModelCancelarUltimaVenda> {
    try {
      let _modelCancelarUltimaVenda = new ModelCancelarUltimaVenda();

      await cancelarUltimaVenda(_numeroSessao, this._codigoAtivacao, _chave, _baseCFeCancelamento)
      .then((result) => {
        _modelCancelarUltimaVenda = result;
      })
      .catch((error) => {
        throw new Error(error);     
      })

      return _modelCancelarUltimaVenda;
      
    } catch (error) {
      console.error('CancelarUltimaVenda<Exception> ', error);
    }
  };

  /**
   * Consulta o status do SAT
   * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
   * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.5.2 da Especificacao_SAT_v_ER_2_27_05
   */
  consultarSAT: (_numeroSessao: number) => Promise<ModelConsultarSAT> = async function (
    _numeroSessao: number = 0
  ): Promise<ModelConsultarSAT> {
    try {
      let _modelConsultarSAT = new ModelConsultarSAT();

      await consultarSAT(_numeroSessao)
      .then((result) => {
        _modelConsultarSAT = result;
      })
      .catch((error) => {
        throw new Error(error);
      })

      return _modelConsultarSAT;

    } catch (error) {
      console.error('ConsultarSAT<Exception> ', error);
    }
  };

  /**
   * Teste fim a fim, faz teste de venda para o aparelho SAT
   * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
   * @param { string } _baseCFe - Refere-se aos dados de venda gerados pelo AC e utilizados para compor o CF-e-SAT
   * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.6.3 da Especificacao_SAT_v_ER_2_27_05
   */
  testeFimFim: (_numeroSessao: number, _baseCFe: string) => Promise<ModelTesteFimFim> = async function (
    _numeroSessao: number,
    _baseCFe: string
  ): Promise<ModelTesteFimFim> {
    try {
      let _modelTesteFimFim = new ModelTesteFimFim();

      await testeFimFim(_numeroSessao, this._codigoAtivacao, _baseCFe)
      .then((result) => {
        _modelTesteFimFim = result;
      })
      .catch((error) => {
        throw new Error(error);
      })

      return _modelTesteFimFim;

    } catch (error) {
      console.error('TesteFimFim<Exception> ', error);
    }
  };

  /**
   * Consulta os satatus operacional do SAT
   * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
   * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.7.2 da Especificacao_SAT_v_ER_2_27_05
   */
  consultarStatusOperacional: (_numeroSessao: number) => Promise<ModelConsultarStatusOperacional> = async function (
    _numeroSessao: number
  ): Promise<ModelConsultarStatusOperacional> {
    try {
      let _modelConsultarStatusOperacional = new ModelConsultarStatusOperacional();

      await consultarStatusOperacional(_numeroSessao, this._codigoAtivacao)
      .then((result) => {
        _modelConsultarStatusOperacional = result;
      })
      .catch((error) => {
        throw new Error(error);
      })

      return _modelConsultarStatusOperacional;

    } catch (error) {
      console.error('ConsultarStatusOperacional<Exception> ', error);
    }
  };

  /**
   * Consulta o Número sequencial de 6 dígitos da sessao do SAT
   * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
   * @param { number } _cNumeroDeSessao - Número sequencial de 6 dígitos da sessão a ser consultada no SAT
   * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.8.3 da Especificacao_SAT_v_ER_2_27_05
   */
  consultarNumeroSessao: (_numeroSessao: number, _cNumeroSessao: number) => Promise<ModelConsultarNumeroSessao> = async function (
    _numeroSessao: number,
    _cNumeroSessao: number
  ): Promise<ModelConsultarNumeroSessao> {
    try {
      let _modelConsultarNumeroSessao = new ModelConsultarNumeroSessao();

      await consultarNumeroSessao(_numeroSessao, this._codigoAtivacao, _cNumeroSessao)
      .then((result) => {
        _modelConsultarNumeroSessao = result;
      })
      .catch((error) => {
        throw new Error(error);
      })

      return _modelConsultarNumeroSessao;

    } catch (error) {
      console.error('ConsultarNumeroSessao<Exception> ', error);
    }
  };

  /**
   * Configurar a Interface de Rede so aparelho SAT
   * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
   * @param { Object } _dadosConfiguracao - Objeto de configuração de rede
   * * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.9.1 da Especificacao_SAT_v_ER_2_27_05
   */
  configurarInterfaceRede: (_numeroSessao: number, _dadosConfiguracao: ModelConfigurarInterfaceRedeDadosConfiguracao) => Promise<ModelConfigurarInterfaceRede> = async function (
    _numeroSessao: number,
    _dadosConfiguracao: ModelConfigurarInterfaceRedeDadosConfiguracao
  ): Promise<ModelConfigurarInterfaceRede> {
    try {
      let _modelConfigurarInterfaceRede = new ModelConfigurarInterfaceRede();

      await configurarInterfaceRede(_numeroSessao, this._codigoAtivacao, _dadosConfiguracao)
      .then((result) => {
        _modelConfigurarInterfaceRede = result;
      })
      .catch((error) => {
        throw new Error(error);
      })

      return _modelConfigurarInterfaceRede;

    } catch (error) {
      console.error('ConfigurarInterfaceRede<Exception> ', error);
    }
  };

  /**
   * Associa o CNPJ da software house ao cnpj do contrinuinte
   * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
   * @param { string } _CNPJvalue - CNPJ da software house concatenado com o CNPJ do contribuinte
   * @param { string } _assinaturaCNPJs - Código hash SHA56 em base64 gerado com o valor contido em _CNPJvalue
   * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.10.2 da Especificacao_SAT_v_ER_2_27_05
   */
  associarAssinatura: (_numeroSessao: number, _CNPJvalue: string, _assinaturaCNPJs: string) => Promise<ModelAssociarAssinatura> = async function (
    _numeroSessao: number,
    _CNPJvalue: string,
    _assinaturaCNPJs: string
  ): Promise<ModelAssociarAssinatura> {
    try {
      let _modelAssociarAssinatura = new ModelAssociarAssinatura();

      await associarAssinatura(_numeroSessao, this._codigoAtivacao, _CNPJvalue, _assinaturaCNPJs)
      .then((result) => {
        _modelAssociarAssinatura = result;
      })
      .catch((error) => {
        throw new Error(error);
      })

      return _modelAssociarAssinatura;

    } catch (error) {
      console.error('AssociarAssinatura<Exception> ', error);
    }
  };

  /**
   * Atualiza para a mais nova versão do SAT disponibilizada pelo fabircante
   * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
   * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.11.2 da Especificacao_SAT_v_ER_2_27_05
   */
  atualizarSoftwareSAT: (_numeroSessao: number) => Promise<ModelAtualizarSoftwareSAT> = async function (
    _numeroSessao: number
  ): Promise<ModelAtualizarSoftwareSAT> {
    try {
      let _modelAtualizarSoftwareSAT = new ModelAtualizarSoftwareSAT();

      await atualizarSoftwareSAT(_numeroSessao, this._codigoAtivacao)
      .then((result) => {
        _modelAtualizarSoftwareSAT = result;
      })
      .catch((error) => {
        throw new Error(error);
      })

      return _modelAtualizarSoftwareSAT;

    } catch (error) {
      console.error('AtualizarSoftwareSAT<Exception> ', error);
    }
  };

  /**
   * Extrai dados de loja para ser salvo em arquivo
   * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
   * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.12.2 da Especificacao_SAT_v_ER_2_27_05
   */
  extrairLogs: (_numeroSessao: number) => Promise<ModelExtrairLogs> = async function (
    _numeroSessao: number
  ): Promise<ModelExtrairLogs> {
    try {
      let _modelExtrairLogs = new ModelExtrairLogs();

      await extrairLogs(_numeroSessao, this._codigoAtivacao)
      .then((result) => {
        _modelExtrairLogs = result;
      })
      .catch((error) => {
        throw new Error(error);
      })

      return _modelExtrairLogs;

    } catch (error) {
      console.error('ExtrairLogs<Exception> ', error);
    }
  };

  /**
   * Bloquear o aparelho SAT
   * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
   * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.13.2 da Especificacao_SAT_v_ER_2_27_05
   */
  bloquearSAT: (_numeroSessao: number) => Promise<ModelBloquearSAT> = async function (
    _numeroSessao: number
  ): Promise<ModelBloquearSAT> {
    try {
      let _modelBloquearSAT = new ModelBloquearSAT();

      await bloquearSAT(_numeroSessao, this._codigoAtivacao)
      .then((result) => {
        _modelBloquearSAT = result;
      })
      .catch((error) => {
        throw new Error(error);
      })

      return _modelBloquearSAT;

    } catch (error) {
      console.error('BloquearSAT<Exception> ', error);
    }
  };

  /**
   * Desbloquear o aparelho SAT
   * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
   * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.14.2 da Especificacao_SAT_v_ER_2_27_05
   */
  desbloquearSAT: (_numeroSessao: number) => Promise<ModelDesbloquearSAT> = async function (
    _numeroSessao: number
  ): Promise<ModelDesbloquearSAT> {
    try {
      let _modelDesbloquearSAT = new ModelDesbloquearSAT();

      await desbloquearSAT(_numeroSessao, this._codigoAtivacao)
      .then((result) => {
        _modelDesbloquearSAT = result;
      })
      .catch((error) => {
        throw new Error(error);
      })

      return _modelDesbloquearSAT;

    } catch (error) {
      console.error('DesbloquearSAT<Exception> ', error);
    }
  };

  /**
   * Trocar o código de atiavação do aparelho SAT usando o código atual, o de emergência
   * @param { number } _numeroSessao - Número aleatório de 6 dígitos gerado pelo AC para controle da comunicação e vendas
   * @param { number } _opcao - Opção do códgio de ativação 1- Código de Ativação / 2 - Código de Ativação de Emergência
   * @param { string } _novoCodigo - Novo código de ativação
   * @param { string } _confNovoCodigo - Confirmação do novo código de ativação
   * @returns { Promise } - Promise object contendo os dados descritos no item 6.1.15.2 da Especificacao_SAT_v_ER_2_27_05
   */
  trocarCodigoDeAtivacao: (_numeroSessao: number, _opcao: number, _novoCodigo: string, _confNovoCodigo: string) => Promise<ModelTrocarCodigoAtivacao> = async function (
    _numeroSessao: number,
    _opcao: number,
    _novoCodigo: string,
    _confNovoCodigo: string
  ): Promise<ModelTrocarCodigoAtivacao> {
    try {
      let _modelTrocarCodigoAtivacao = new ModelTrocarCodigoAtivacao();

      await trocarCodigoDeAtivacao(_numeroSessao, this._codigoAtivacao, _opcao, _novoCodigo, _confNovoCodigo)
      .then((result) => {
        _modelTrocarCodigoAtivacao = result;
      })
      .catch((error) => {
        throw new Error(error);
      })

      return _modelTrocarCodigoAtivacao;

    } catch (error) {
      console.error('DesbloquearSAT<Exception> ', error);
    }
  };
}