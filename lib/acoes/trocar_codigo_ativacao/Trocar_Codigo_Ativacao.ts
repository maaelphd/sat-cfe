import { ffiLibrary } from "../../../utils/SAT_Library";
import { UTF8 } from "../../../utils/UTF8_Decode";
import { ModelTrocarCodigoAtivacao } from "../../model/acoes/trocar_codigo_atiavacao/Trocar_Codigo_Ativacao";

export const trocarCodigoDeAtivacao: (_numeroSessao: number, _codigoAtivacao: string, _opcao: number, _novoCodigo: string, _confNovoCodigo: string) => Promise<ModelTrocarCodigoAtivacao> = async function (
  _numeroSessao: number,
  _codigoAtivacao: string,
  _opcao: number,
  _novoCodigo: string,
  _confNovoCodigo: string
): Promise<ModelTrocarCodigoAtivacao> {  
  return new Promise<ModelTrocarCodigoAtivacao>(async (resolve, reject) => {
    try {

      let resultTrocarCodigoDeAtivacao = await ffiLibrary.TrocarCodigoDeAtivacao(_numeroSessao, _codigoAtivacao, _opcao, _novoCodigo, _confNovoCodigo);
      resultTrocarCodigoDeAtivacao = UTF8.decode(resultTrocarCodigoDeAtivacao);

      let _trocarCodigoDeAtivacao = new ModelTrocarCodigoAtivacao();
      _trocarCodigoDeAtivacao.fromArray(resultTrocarCodigoDeAtivacao.split('|'));

      resolve(_trocarCodigoDeAtivacao);

    } catch (error) {
      reject(error);
    }
  });
};