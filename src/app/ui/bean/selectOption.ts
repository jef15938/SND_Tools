export class SelectOption {
    private _name: string;
    private _code: string;

    constructor(name: string, code: string) {
        this._name = name;
        this._code = code;
    }

    public get name(): string {
        return this._name;
    }
    
    public get code(): string {
        return this._code;
    }
        
    
}