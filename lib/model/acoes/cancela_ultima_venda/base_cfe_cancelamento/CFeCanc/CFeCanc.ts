import { InfCFe } from "./infCFe/infCFe";

export interface ICFeCanc {
  infCFe: InfCFe;
}

export class CFeCanc implements ICFeCanc { 
  infCFe: InfCFe;

  constructor(infCFe: InfCFe = new InfCFe()) {
    this.infCFe = infCFe;
  }
}