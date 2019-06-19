export class menuItem {

    private _imgUrl: string;
    private _name: string;
    private _url: string;

    constructor(name, url) {
        this._name = name;
        this._url = url;
    }

    get imgUrl() {
        return this._imgUrl;
    }

    get name() {
        return this._name;
    }

    get url() {
        return this._url;
    }
}