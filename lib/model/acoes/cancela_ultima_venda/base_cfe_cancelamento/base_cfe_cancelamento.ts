import { CFeCanc } from "./CFeCanc/CFeCanc";
const xml2js = require('xml2js');

export interface IBaseCFeCanc {
  CFeCanc: CFeCanc;
}

export class BaseCFeCanc implements IBaseCFeCanc { 
  CFeCanc: CFeCanc;

  constructor(cfe: CFeCanc = new CFeCanc()) {
    this.CFeCanc = cfe;
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
      console.error('BaseCFeCanc.toXML<Exception> ', error);
    }
  };
}