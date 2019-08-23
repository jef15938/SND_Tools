export class CustomerBirthday{
    
    private _lastName : string;
    private _firstName : string;
    private _birthdayMonth : string;
    private _birthdayDate : string;

    constructor(firstName : string ,lastName : string, birthdayMonth: string , birthdayDate : string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthdayMonth = birthdayMonth;
        this._birthdayDate =  birthdayDate;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public get birthdayMonth(): string {
        return this._birthdayMonth;
    }

    public get birthdayDate(): string {
        return this._birthdayDate;
    }
   
}