import { Injectable } from "@angular/core";
import { MenuItem } from "../ui/menu/model/menuItem";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AppStore {

    private _currentMenuItem: MenuItem = this.menuList[0];
    private _getCurrentMenuItemSubject: BehaviorSubject<MenuItem> = new BehaviorSubject(this._currentMenuItem);
    constructor() {

    }

    get menuList() {
        let menuList: Array<MenuItem> = [];

        menuList.push(new MenuItem('homePage', ''));
        menuList.push(new MenuItem('koaep', '/koaep'));
        menuList.push(new MenuItem('paintBoard', '/paintBoard'));
        menuList.push(new MenuItem('strategyPattern', '/strategyPattern'));
        menuList.push(new MenuItem('prototypePattern', '/prototypePattern'));
        menuList.push(new MenuItem('ngZoneTest', '/ngZoneTest'));
        menuList.push(new MenuItem('webParameterTest', '/webParameterTest'));
        menuList.push(new MenuItem('localStorageTest', '/localStorageTest'));
        menuList.push(new MenuItem('arraySort','/arraySort'));
        menuList.push(new MenuItem('nodeTree','/nodeTree'));
        menuList.push(new MenuItem('zombieGame','/zombieGame'));

        
        return menuList.map(x => x.clone());
    }

    setCurrentMenuItem(menuItemName: string) {
        let filterList = this.menuList.filter(x => x.name === menuItemName);
        this._currentMenuItem = filterList.length ? filterList[0] : this.menuList[0];
        this._getCurrentMenuItemSubject.next(this._currentMenuItem.clone());
    }

    getCurrentMenuItem() {
        return this._getCurrentMenuItemSubject.asObservable();
    }
}