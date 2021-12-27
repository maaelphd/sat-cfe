import { ffiLibrary } from "../../../utils/SAT_Library";
import { UTF8 } from "../../../utils/UTF8_Decode";
import { ModelAtualizarSoftwareSAT } from "../../model/acoes/atualizar_software_sat/Atualizar_Software_SAT";

export const atualizarSoftwareSAT: (_numeroSessao: number, _codigoAtivacao: string)=> Promise<ModelAtualizarSoftwareSAT> = async function (
  _numeroSessao: number,
  _codigoAtivacao: string
): Promise<ModelAtualizarSoftwareSAT> {  
  return new Promise<ModelAtualizarSoftwareSAT>(async (resolve, reject) => {
    try {

      let resultAtualizarSoftwareSAT = await ffiLibrary.AtualizarSoftwareSAT(_numeroSessao, _codigoAtivacao);
      resultAtualizarSoftwareSAT = UTF8.decode(resultAtualizarSoftwareSAT);

      let _atualizarSoftwareSAT = new ModelAtualizarSoftwareSAT();
      _atualizarSoftwareSAT.fromArray(resultAtualizarSoftwareSAT.split('|'));

      resolve(_atualizarSoftwareSAT);

    } catch (error) {
      reject(error);
    }
  });
};