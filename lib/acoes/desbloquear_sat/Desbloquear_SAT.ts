import { ffiLibrary } from "../../../utils/SAT_Library";
import { UTF8 } from "../../../utils/UTF8_Decode";
import { ModelDesbloquearSAT } from "../../model/acoes/desbloquear_sat/Desbloquear_SAT";

export const desbloquearSAT: (_numeroSessao: number, _codigoAtivacao: string)=> Promise<ModelDesbloquearSAT> = async function (
  _numeroSessao: number,
  _codigoAtivacao: string
): Promise<ModelDesbloquearSAT> {  
  return new Promise<ModelDesbloquearSAT>(async (resolve, reject) => {
    try {

      let resultDesbloquearSAT = await ffiLibrary.DesbloquearSAT(_numeroSessao, _codigoAtivacao);
      resultDesbloquearSAT = UTF8.decode(resultDesbloquearSAT);

      let _desbloquearSAT = new ModelDesbloquearSAT();
      _desbloquearSAT.fromArray(resultDesbloquearSAT.split('|'));

      resolve(_desbloquearSAT);

    } catch (error) {
      reject(error);
    }
  });
};