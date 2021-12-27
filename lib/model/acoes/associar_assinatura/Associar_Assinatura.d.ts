export interface IModelAssociarAssinatura {
    _numeroSessao: string;
    _EEEEE: string;
    _CCCC: string;
    _mensagem: string;
    _cod: string;
    _mensagemSEFAZ: string;
}
export declare class ModelAssociarAssinatura implements IModelAssociarAssinatura {
    _numeroSessao: string;
    _EEEEE: string;
    _CCCC: string;
    _mensagem: string;
    _cod: string;
    _mensagemSEFAZ: string;
    constructor(numeroSessao?: string, EEEEE?: string, CCCC?: string, mensagem?: string, cod?: string, mensagemSEFAZ?: string);
    fromArray: (_value: Array<string>) => void;
}
