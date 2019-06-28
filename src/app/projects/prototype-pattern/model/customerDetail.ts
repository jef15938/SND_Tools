export class CustomerDetail {
    private _name: string;
    private _address: string;
    private _gender: string;
    private _telList: Array<TelList>;



    constructor(name: string, address: string, gender: string, telList: Array<TelList>) {
        this._name = name;
        this._address = address;
        this._gender = gender;
        this._telList = telList;
    }

    public get name() {
        return this._name;
    }

    public get address() {
        return this._address;
    }

    public get gender() {
        return this._gender;
    }

    public get telList() {
        return this._telList;
    }

    public set name(name : string) {
        this._name = name;
    }

    public set address(address : string) {
        this._address = address;
    }

    public set gender(gender : string) {
        this._gender = gender;
    }

    public set telList(telList: Array<TelList>) {
        this._telList = telList;
    }


    public clone(): CustomerDetail{
        
        return new CustomerDetail(this._name,this._address,this._gender,this._telList.map(x => x.clone()));
        
    }

    public dirtyClone(): CustomerDetail{
        
        return new CustomerDetail(this._name,this._address,this._gender,this._telList);
        
    }

}

export class TelList {

    private _name: string;
    private _tel: string;
   
    constructor(name: string, tel: string) {
        this._name = name;
        this._tel = tel;
    }

    public get tel(): string {
        return this._tel;
    }

    public set tel(tel: string) {
        this._tel = tel;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public clone():TelList {
        return new TelList(this._name,this._tel);
    }


}