import { InfCFe } from "./infcfe/infcfe";

export interface ICFe {
  infCFe: InfCFe;
}

export class CFe implements ICFe { 
  infCFe: InfCFe;

  constructor(infCFe: InfCFe = new InfCFe()) {
    this.infCFe = infCFe;
  }
}