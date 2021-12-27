import { ffiLibrary } from "../../../utils/SAT_Library";
import { UTF8 } from "../../../utils/UTF8_Decode";
import { ModelConsultarStatusOperacional} from "../../model/consulta/consultar_status_operacional/Consultar_Status_Operacional";

export const consultarStatusOperacional: (_numeroSessao: number, _codigoAtivacao: string) => Promise<ModelConsultarStatusOperacional> = async function (
  _numeroSessao: number,
  _codigoAtivacao: string
): Promise<ModelConsultarStatusOperacional> {
  return new Promise<ModelConsultarStatusOperacional>(async (resolve, reject) => {
    try {
      let resultConsultarStatusOperacional = await ffiLibrary.ConsultarStatusOperacional(_numeroSessao, _codigoAtivacao);
      resultConsultarStatusOperacional = UTF8.decode(resultConsultarStatusOperacional);
    
      let _consultarStatusOperacional = new ModelConsultarStatusOperacional();
      _consultarStatusOperacional.fromArray(resultConsultarStatusOperacional.split('|'));

      resolve(_consultarStatusOperacional);
      
    } catch (error) {
      reject(error);
    }
  });
};