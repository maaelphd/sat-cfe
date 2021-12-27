export interface IModelCancelarUltimaVenda {
    _numeroSessao: string;
    _EEEEE: string;
    _CCCC: string;
    _mensagem: string;
    _cod: string;
    _mensagemSEFAZ: string;
    _arquivoCfeBase64: String;
    _timeStamp: string;
    _chaveConsulta: string;
    _valorTotalCFe: string;
    _CPFCNPJValue: string;
    _assinaturaQRCODE: string;
}
export declare class ModelCancelarUltimaVenda implements IModelCancelarUltimaVenda {
    _numeroSessao: string;
    _EEEEE: string;
    _CCCC: string;
    _mensagem: string;
    _cod: string;
    _mensagemSEFAZ: string;
    _arquivoCfeBase64: String;
    _timeStamp: string;
    _chaveConsulta: string;
    _valorTotalCFe: string;
    _CPFCNPJValue: string;
    _assinaturaQRCODE: string;
    constructor(numeroSessao?: string, EEEEE?: string, CCCC?: string, mensagem?: string, cod?: string, mensagemSEFAZ?: string, arquivoCfeBase64?: String, timeStamp?: string, chaveConsulta?: string, valorTotalCFe?: string, CPFCNPJValue?: string, assinaturaQRCODE?: string);
    fromArray: (_value: Array<string>) => void;
}
