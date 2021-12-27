import { ffiLibrary } from "../../../utils/SAT_Library";
import { UTF8 } from "../../../utils/UTF8_Decode";
import { ModelComunicarCertificadoICPBRASIL } from "../../model/acoes/comunicar_certificado_icpbrasil/Comunicar_Certificado_ICPBRASIL";

export const comunicarCertificadoICPBRASIL: (_numeroSessao: number, _codigoAtivacao: string, _certificado: string) => Promise<ModelComunicarCertificadoICPBRASIL> = async function (
  _numeroSessao: number,
  _codigoAtivacao: string,
  _certificado: string
): Promise<ModelComunicarCertificadoICPBRASIL> {  
  
  return new Promise<ModelComunicarCertificadoICPBRASIL>(async (resolve, reject) => {
    try {
      let resultComunicarCertificadoICPBRASIL = ffiLibrary.ComunicarCertificadoICPBRASIL(_numeroSessao, _codigoAtivacao, _certificado);
      resultComunicarCertificadoICPBRASIL = UTF8.decode(resultComunicarCertificadoICPBRASIL);
    
      let _comunicarCertificadoICPBRASIL = new ModelComunicarCertificadoICPBRASIL();
      _comunicarCertificadoICPBRASIL.fromArray(resultComunicarCertificadoICPBRASIL.split('|'));

      resolve(_comunicarCertificadoICPBRASIL);
      
    } catch (error) {
      reject(error);
    }
  });
};