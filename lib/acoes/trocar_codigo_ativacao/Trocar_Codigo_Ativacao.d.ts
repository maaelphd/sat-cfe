import { ModelTrocarCodigoAtivacao } from "../../model/acoes/trocar_codigo_atiavacao/Trocar_Codigo_Ativacao";
export declare const trocarCodigoDeAtivacao: (_numeroSessao: number, _codigoAtivacao: string, _opcao: number, _novoCodigo: string, _confNovoCodigo: string) => Promise<ModelTrocarCodigoAtivacao>;
