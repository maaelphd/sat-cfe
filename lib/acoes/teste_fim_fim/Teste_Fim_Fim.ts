import { ffiLibrary } from "../../../utils/SAT_Library";
import { UTF8 } from "../../../utils/UTF8_Decode";
import { ModelTesteFimFim } from "../../model/acoes/teste_fim_fim/Teste_Fim_Fim";

export const testeFimFim: (_numeroSessao: number, _codigoAtivacao: string, _baseCFe: string) => Promise<ModelTesteFimFim> = async function (
  _numeroSessao: number,
  _codigoAtivacao: string,
  _baseCFe: string
): Promise<ModelTesteFimFim> {
  return new Promise<ModelTesteFimFim>(async (resolve, reject) => {
    try {
      let resultTesteFimFim = await ffiLibrary.TesteFimAFim(_numeroSessao, _codigoAtivacao, _baseCFe);
      resultTesteFimFim = UTF8.decode(resultTesteFimFim);
    
      let _testeFimFim = new ModelTesteFimFim();
      _testeFimFim.fromArray(resultTesteFimFim.split('|'));

      resolve(_testeFimFim);
      
    } catch (error) {
      reject(error);
    }
  });
};