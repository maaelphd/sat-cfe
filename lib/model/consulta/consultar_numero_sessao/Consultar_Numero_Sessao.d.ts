export interface IModelConsultarNumeroSessao {
    _numeroSessao: string;
    _EEEEE: string;
    _mensagem: string;
    _cod: string;
    _mensagemSEFAZ: string;
}
export declare class ModelConsultarNumeroSessao implements IModelConsultarNumeroSessao {
    _numeroSessao: string;
    _EEEEE: string;
    _mensagem: string;
    _cod: string;
    _mensagemSEFAZ: string;
    constructor(numeroSessao?: string, EEEEE?: string, mensagem?: string, cod?: string, mensagemSEFAZ?: string);
    fromArray: (_value: Array<string>) => void;
}
