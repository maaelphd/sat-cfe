import { ffiLibrary } from "../../../utils/SAT_Library";
import { UTF8 } from "../../../utils/UTF8_Decode";
import { ModelBloquearSAT } from "../../model/acoes/bloquear_sat/Bloquear_SAT";

export const bloquearSAT: (_numeroSessao: number, _codigoAtivacao: string)=> Promise<ModelBloquearSAT> = async function (
  _numeroSessao: number,
  _codigoAtivacao: string
): Promise<ModelBloquearSAT> {  
  return new Promise<ModelBloquearSAT>(async (resolve, reject) => {
    try {

      let resultBloquearSAT = await ffiLibrary.BloquearSAT(_numeroSessao, _codigoAtivacao);
      resultBloquearSAT = UTF8.decode(resultBloquearSAT);

      let _bloquearSAT = new ModelBloquearSAT();
      _bloquearSAT.fromArray(resultBloquearSAT.split('|'));

      resolve(_bloquearSAT);

    } catch (error) {
      reject(error);
    }
  });
};