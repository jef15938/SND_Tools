import { PayRecord } from './PayRecord';
export class PayRecordMonth {
    private _month: number;
    private _payRecordList: Array<PayRecord> = [];

    constructor(month: number) {
        this._month = month;
    }

    public get month(): number {
        return this._month;
    }
    
    public set payRecordList(payRecordList: Array<PayRecord>) {
        this._payRecordList = payRecordList;
    }
    public get payRecordList(): Array<PayRecord> {
        return this._payRecordList;
    }
    
    
}