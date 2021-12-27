import { ffiLibrary } from "../../../utils/SAT_Library";
import { UTF8 } from "../../../utils/UTF8_Decode";
import { ModelExtrairLogs } from "../../model/consulta/extrair_logs/Extrair_Logs";

export const extrairLogs: (_numeroSessao: number, _codigoAtivacao: string)=> Promise<ModelExtrairLogs> = async function (
  _numeroSessao: number,
  _codigoAtivacao: string
): Promise<ModelExtrairLogs> {  
  return new Promise<ModelExtrairLogs>(async (resolve, reject) => {
    try {

      let resultExtrairLogs = await ffiLibrary.ExtrairLogs(_numeroSessao, _codigoAtivacao);
      resultExtrairLogs = UTF8.decode(resultExtrairLogs);

      let _extrairLogs = new ModelExtrairLogs();
      _extrairLogs.fromArray(resultExtrairLogs.split('|'));

      resolve(_extrairLogs);

    } catch (error) {
      reject(error);
    }
  });
};