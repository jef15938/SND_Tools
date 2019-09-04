import { PayRecordMonth } from "./PayRecordMonth";

export class PayRecordYear {
    private _year: number;
    private _payRecordMonthList: Array<PayRecordMonth> = [];

    constructor(year: number) {
        this._year = year;
    }

    public get year(): number {
        return this._year;
    }

    
    public set payRecordMonthList(payRecordMonthList: Array<PayRecordMonth>) {
        this._payRecordMonthList = payRecordMonthList;
    }
    public get payRecordMonthList(): Array<PayRecordMonth> {
        return this._payRecordMonthList;
    }
    
    
}