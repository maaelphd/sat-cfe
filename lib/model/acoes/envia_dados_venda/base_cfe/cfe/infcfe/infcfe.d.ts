import { Dest } from "./dest/dest";
import { Det } from "./det/det";
import { Emit } from "./emit/emit";
import { Entrega } from "./dest/entrega/entrega";
import { Ide } from "./ide/ide";
import { Total } from "./total/total";
import { Pgto } from "./pgto/pgto";
import { InfAdic } from "./infadic/infadic";
export interface IInfCFe {
    $: {
        versaoDadosEnt: string;
    };
    ide: Ide;
    emit: Emit;
    dest: Dest;
    entrega: Entrega;
    det: [Det];
    total: Total;
    pgto: Pgto;
    infAdic: InfAdic;
}
/** Grupo das informações do CF-e
 * @param { string } versaoDadosEnt - Versão do leiaute do arquivo de dados do AC
 * @param { Ide } ide - Grupo das informações de identificação do CF-e
 * @param { Dest } dest - Grupo de identificação do Destinatário do CF-e
 * @param { Entrega } entrega - Grupo de identificação do Local de entrega
 * @param { [Det] } det - Grupo do detalhamento de Produtos e Serviços do CF-e
 * @param { Total } total - Grupo de Valores Totais do CF-e
 * @param { Pgto } pgto - Grupo de informações sobre Pagamento do CFe
 * @param { InfAdic } infAdic - Grupo de Informações Adicionais
 */
export declare class InfCFe implements IInfCFe {
    $: {
        versaoDadosEnt: string;
    };
    ide: Ide;
    emit: Emit;
    dest: Dest;
    entrega: Entrega;
    det: [Det];
    total: Total;
    pgto: Pgto;
    infAdic: InfAdic;
    constructor(versaoDadosEnt?: string, ide?: Ide, emit?: Emit, dest?: Dest, entrega?: Entrega, det?: [Det], total?: Total, pgto?: Pgto, infAdic?: InfAdic);
}
