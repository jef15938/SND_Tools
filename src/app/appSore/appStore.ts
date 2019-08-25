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

        let menuListWithNameAndUrl = [
            //[name: string, url: stirng]
            ['homePage', ''],
            ['koaep', '/koaep'],
            ['paintBoard', '/paintBoard'],
            ['strategyPattern', '/strategyPattern'],
            ['prototypePattern', '/prototypePattern'],
            ['ngZoneTest', '/ngZoneTest'],
            ['webParameterTest', '/webParameterTest'],
            ['localStorageTest', '/localStorageTest'],
            ['arraySort','/arraySort'],
            ['nodeTree','/nodeTree'],
            ['zombieGame','/zombieGame'],
            ['nestedLoopRefactor','/nestedLoopRefactor'],
            ['getSetGenerator','/getSetGenerator'],
            ['layoutPractice','/layoutPractice']

        ]

        menuList = menuListWithNameAndUrl.map(x => this._setMenuItem(x[0], x[1]));
        // menuList.push(new MenuItem('homePage', ''));
        // menuList.push(new MenuItem('koaep', '/koaep'));
        // menuList.push(new MenuItem('paintBoard', '/paintBoard'));
        // menuList.push(new MenuItem('strategyPattern', '/strategyPattern'));
        // menuList.push(new MenuItem('prototypePattern', '/prototypePattern'));
        // menuList.push(new MenuItem('ngZoneTest', '/ngZoneTest'));
        // menuList.push(new MenuItem('webParameterTest', '/webParameterTest'));
        // menuList.push(new MenuItem('localStorageTest', '/localStorageTest'));
        // menuList.push(new MenuItem('arraySort','/arraySort'));
        // menuList.push(new MenuItem('nodeTree','/nodeTree'));
        // menuList.push(new MenuItem('zombieGame','/zombieGame'));
        // menuList.push(new MenuItem('nestedLoopRefactor','/nestedLoopRefactor'));
        // menuList.push(new MenuItem('getSetGenerator','/getSetGenerator'));
        // menuList.push(new MenuItem('layoutPractice','/layoutPractice'))

        return menuList;
    }

    setCurrentMenuItem(menuItemName: string) {
        let filterList = this.menuList.filter(x => x.name === menuItemName);
        this._currentMenuItem = filterList.length ? filterList[0] : this.menuList[0];
        this._getCurrentMenuItemSubject.next(this._currentMenuItem.clone());
    }

    getCurrentMenuItem() {
        return this._getCurrentMenuItemSubject.asObservable();
    }

    private _setMenuItem(name: string, url: string): MenuItem {
        return new MenuItem(name, url);
    }
}