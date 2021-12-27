import { CFe } from "./cfe/cfe";
const xml2js = require('xml2js');

export interface IBaseCFe {
  CFe: CFe;
}

export class BaseCFe implements IBaseCFe { 
  CFe: CFe;

  constructor(cfe: CFe = new CFe()) {
    this.CFe = cfe;
  }

  toXML: () => string = function (

  ): string {
    try {
      let builder = new xml2js.Builder();
      
      // return builder.buildObject(json);
      return builder.buildObject(JSON.parse(JSON.stringify(this, (key, value) => {
        if ((value !== null) && (value !== '')) return value
      })));      
    } catch (error) {
      console.error('BaseCFe.toXML<Exception> ', error);
    }
  };
}