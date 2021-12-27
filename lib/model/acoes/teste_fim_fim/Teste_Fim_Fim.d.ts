export interface IModelTesteFimFim {
    _numeroSessao: string;
    _EEEEE: string;
    _mensagem: string;
    _cod: string;
    _mensagemSEFAZ: string;
    _arquivoCfeBase64: String;
    _timeStamp: string;
    _numDocFiscal: string;
    _chaveConsulta: string;
}
export declare class ModelTesteFimFim implements IModelTesteFimFim {
    _numeroSessao: string;
    _EEEEE: string;
    _mensagem: string;
    _cod: string;
    _mensagemSEFAZ: string;
    _arquivoCfeBase64: String;
    _timeStamp: string;
    _numDocFiscal: string;
    _chaveConsulta: string;
    constructor(numeroSessao?: string, EEEEE?: string, mensagem?: string, cod?: string, mensagemSEFAZ?: string, arquivoCfeBase64?: String, timeStamp?: string, numDocFiscal?: string, chaveConsulta?: string);
    fromArray: (_value: Array<string>) => void;
}
