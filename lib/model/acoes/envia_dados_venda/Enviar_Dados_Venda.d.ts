export interface IModelEnviarDadosVenda {
    _numeroSessao: string;
    _EEEEE: string;
    _CCCC: string;
    _mensagem: string;
    _cod: string;
    _mensagemSEFAZ: string;
    _arquivoCfeBase64: string;
    _timeStamp: string;
    _chaveConsulta: string;
    _valorTotalCFe: string;
    _CPFCNPJValue: string;
    _assinaturaQRCODE: string;
}
export declare class ModelEnviarDadosVenda implements IModelEnviarDadosVenda {
    _numeroSessao: string;
    _EEEEE: string;
    _CCCC: string;
    _mensagem: string;
    _cod: string;
    _mensagemSEFAZ: string;
    _arquivoCfeBase64: string;
    _timeStamp: string;
    _chaveConsulta: string;
    _valorTotalCFe: string;
    _CPFCNPJValue: string;
    _assinaturaQRCODE: string;
    _XMLRetorno: string;
    constructor(numeroSessao?: string, EEEEE?: string, CCCC?: string, mensagem?: string, cod?: string, mensagemSEFAZ?: string, arquivoCfeBase64?: string, timeStamp?: string, chaveConsulta?: string, valorTotalCFe?: string, CPFCNPJValue?: string, assinaturaQRCODE?: string, XMLRetorno?: string);
    fromArray: (_value: Array<string>) => void;
    toObject(): void;
}
