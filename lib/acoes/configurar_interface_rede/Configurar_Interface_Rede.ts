import { ffiLibrary } from "../../../utils/SAT_Library";
import { UTF8 } from "../../../utils/UTF8_Decode";
import { ModelConfigurarInterfaceRedeDadosConfiguracao } from "../../model/acoes/configurar_interface_rede/Configurar_Interface_Rede_Dados_Configuracao";
import { ModelConfigurarInterfaceRede } from "../../model/acoes/configurar_interface_rede/Configurar_Interface_Rede";

export const configurarInterfaceRede: (_numeroSessao: number, _codigoAtivacao: string, _dadosConfiguracao: ModelConfigurarInterfaceRedeDadosConfiguracao) => Promise<ModelConfigurarInterfaceRede> = async function (
  _numeroSessao: number,
  _codigoAtivacao: string,
  _dadosConfiguracao: ModelConfigurarInterfaceRedeDadosConfiguracao
): Promise<ModelConfigurarInterfaceRede> {  
  return new Promise<ModelConfigurarInterfaceRede>(async (resolve, reject) => {
    try {

      console.log('_dadosConfiguracao.toXML: ', _dadosConfiguracao.toXML);

      let resultConfigurarInterfaceRede = await ffiLibrary.ConfigurarInterfaceRede(_numeroSessao, _codigoAtivacao, _dadosConfiguracao.toXML);
      resultConfigurarInterfaceRede = UTF8.decode(resultConfigurarInterfaceRede);

      let _configurarInterfaceRede = new ModelConfigurarInterfaceRede();
      _configurarInterfaceRede.fromArray(resultConfigurarInterfaceRede.split('|'));

      resolve(_configurarInterfaceRede);

    } catch (error) {
      reject(error);
    }
  });
};