import { ffiLibrary } from "../../../utils/SAT_Library";
import { UTF8 } from "../../../utils/UTF8_Decode";
import { ModelCancelarUltimaVenda } from "../../model/acoes/cancela_ultima_venda/Cancelar_Ultima_Venda";

export const cancelarUltimaVenda: (_numeroSessao: number, _codigoAtivacao: string, _chave: string, _baseCFeCancelamento: string) => Promise<ModelCancelarUltimaVenda> = async function (
  _numeroSessao: number,
  _codigoAtivacao: string,
  _chave: string,
  _baseCFeCancelamento: string
): Promise<ModelCancelarUltimaVenda> {  
  return new Promise<ModelCancelarUltimaVenda>(async (resolve, reject) => {
    try {
      let resultCancelarUltimaVenda = ffiLibrary.CancelarUltimaVenda(_numeroSessao, _codigoAtivacao, _baseCFeCancelamento);
      resultCancelarUltimaVenda = UTF8.decode(resultCancelarUltimaVenda);
    
      let _cancelarUltimaVenda = new ModelCancelarUltimaVenda();
      _cancelarUltimaVenda.fromArray(resultCancelarUltimaVenda.split('|'));

      resolve(_cancelarUltimaVenda);
      
    } catch (error) {
      reject(error);
    }
  });
};