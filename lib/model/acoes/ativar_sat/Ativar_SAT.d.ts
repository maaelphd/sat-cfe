export interface IModelAtivarSAT {
    _numeroSessao: string;
    _EEEEE: string;
    _mensagem: string;
    _cod: string;
    _mensagemSEFAZ: string;
    _CSR: string;
}
export declare class ModelAtivarSAT implements IModelAtivarSAT {
    _numeroSessao: string;
    _EEEEE: string;
    _mensagem: string;
    _cod: string;
    _mensagemSEFAZ: string;
    _CSR: string;
    constructor(numeroSessao?: string, EEEEE?: string, mensagem?: string, cod?: string, mensagemSEFAZ?: string, CSR?: string);
    fromArray: (_value: Array<string>) => void;
}
