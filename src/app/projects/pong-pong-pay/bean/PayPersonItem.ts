import { PayRecord } from "./PayRecord";

export class PayPersonItem {
    private _id: string;
    private _name: string;
    private _moneySum: number;
    private _costSum: number;
    private _restMoney: number;
    private _payRecordList: Array<PayRecord> = [];
    constructor(id: string, name: string, moneySum: number, costSum: number, payRecordList: Array<PayRecord>) {
      this._id = id;
      this._name = name;
      this._moneySum = moneySum;
      this._costSum = costSum;
      this._payRecordList = payRecordList;
    }
  
    public get id(): string {
      return this._id;
    }
    
    public get name(): string {
      return this._name;
    }
    
    public get money(): number {
      return this._moneySum;
    }

    public get payRecordList(): Array<PayRecord> {
        return this._payRecordList.map(x => x.clone());
    }

    public get restMoney(): number {
      return this._moneySum - this._costSum;
    }

    public get costSum(): number {
      return this._costSum;
    }    
  }