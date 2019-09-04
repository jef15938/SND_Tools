export class PayRecord {
    private _date: string;
    private _item: string;
    private _cost: number;

    constructor(date: string, item: string, cost: number) {
        this._date = date;
        this._item = item;
        this._cost = cost;
    }

    public get date(): string {
        return this._date;
    }
    
    public get item(): string {
        return this._item;
    }
    
    public get cost(): number {
        return this._cost;
    }

    public clone(): PayRecord {
        return new PayRecord(this._date, this._item, this._cost);
    }
    
    
}