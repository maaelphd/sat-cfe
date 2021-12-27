import { InfCFe } from "./infcfe/infcfe";
export interface ICFe {
    infCFe: InfCFe;
}
export declare class CFe implements ICFe {
    infCFe: InfCFe;
    constructor(infCFe?: InfCFe);
}
