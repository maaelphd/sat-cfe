export interface IModelExtrairLogs {
    _numeroSessao: string;
    _EEEEE: string;
    _mensagem: string;
    _cod: string;
    _mensagemSEFAZ: string;
    _arquivoLog: string;
}
export declare class ModelExtrairLogs implements IModelExtrairLogs {
    _numeroSessao: string;
    _EEEEE: string;
    _mensagem: string;
    _cod: string;
    _mensagemSEFAZ: string;
    _arquivoLog: string;
    constructor(numeroSessao?: string, EEEEE?: string, mensagem?: string, cod?: string, mensagemSEFAZ?: string, arquivoLog?: string);
    fromArray: (_value: Array<string>) => void;
}
