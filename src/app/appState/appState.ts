import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AppState {
    private _isMenuOpen: boolean = null;

    public get isMenuOpen() {
        return this._isMenuOpen;
    }

    public set isMenuOpen(isMenuOpen) {
        this._isMenuOpen = isMenuOpen;
    }
}