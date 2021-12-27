import { ffiLibrary } from "../../../utils/SAT_Library";
import { UTF8 } from "../../../utils/UTF8_Decode";
import { ModelEnviarDadosVenda } from "../../model/acoes/envia_dados_venda/Enviar_Dados_Venda";

export const enviarDadosVenda: (_numeroSessao: number, _codigoAtivacao: string, _baseCFe: string) => Promise<ModelEnviarDadosVenda> = async function (
  _numeroSessao: number,
  _codigoAtivacao: string,
  _baseCFe: string
): Promise<ModelEnviarDadosVenda> {
  return new Promise<ModelEnviarDadosVenda>(async (resolve, reject) => {
    try {
      let resultEnviarDadosVenda = ffiLibrary.EnviarDadosVenda(_numeroSessao, _codigoAtivacao, _baseCFe);
      resultEnviarDadosVenda = UTF8.decode(resultEnviarDadosVenda);
    
      let _enviarDadosVenda = new ModelEnviarDadosVenda();
      _enviarDadosVenda.fromArray(resultEnviarDadosVenda.split('|'));

      resolve(_enviarDadosVenda);
      
    } catch (error) {
      reject(error);
    }
  });
};