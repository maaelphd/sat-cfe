import { CFe } from "./cfe/cfe";
export interface IBaseCFe {
    CFe: CFe;
}
export declare class BaseCFe implements IBaseCFe {
    CFe: CFe;
    constructor(cfe?: CFe);
    toXML: () => string;
}
