import { ffiLibrary } from "../../../utils/SAT_Library";
import { UTF8 } from "../../../utils/UTF8_Decode";
import { ModelConsultarSAT} from '../../model/consulta/consultar_sat/Consultar_SAT'

export const consultarSAT: (_numeroSessao: number) => Promise<ModelConsultarSAT> = async function (
  _numeroSessao: number
): Promise<ModelConsultarSAT> {
  return new Promise<ModelConsultarSAT>(async (resolve, reject) => {
    try {
      let resultConsultarSAT = await ffiLibrary.ConsultarSAT(_numeroSessao);
      resultConsultarSAT = UTF8.decode(resultConsultarSAT);

      let consultarSAT = new ModelConsultarSAT();
      consultarSAT.fromArray(resultConsultarSAT.split('|'));

      resolve(consultarSAT);
      
    } catch (error) {
      reject(error);
    }
  });
};