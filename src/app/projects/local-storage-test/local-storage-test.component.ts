import { Component, OnInit } from '@angular/core';
import { AppStore } from 'src/app/appSore/appStore';

@Component({
  selector: 'app-local-storage-test',
  templateUrl: './local-storage-test.component.html',
  styleUrls: ['./local-storage-test.component.scss']
})
export class LocalStorageTestComponent implements OnInit {

  public buttonClickCount: number = 0;
  private buttonClickCountStorageKey: string;
  private visitorCountKey: string;
  public visitorMessage: string = 'Hello! You are the ${visitorCount} visitor.';
  constructor(
    private store: AppStore
  ) {
    this.store.setCurrentMenuItem('localStorageTest');
    this.buttonClickCountStorageKey = LOCALSTORAGE.CLICKCOUNT;
    this.visitorCountKey = LOCALSTORAGE.VISITORCOUNT;
  }

  ngOnInit() {

    if (this._getLocalStorageContentByKey(this.buttonClickCountStorageKey) === null) {
      localStorage.setItem(this.buttonClickCountStorageKey, '0');
    }
    this.buttonClickCount = Number(this._getLocalStorageContentByKey(this.buttonClickCountStorageKey));


    let visitorCount = this._getLocalStorageContentByKey(this.visitorCountKey);
    if (visitorCount === null) {
      localStorage.setItem(this.visitorCountKey, '1');
      visitorCount = '1';
    }

    else {
      let addVisitorCount = Number(visitorCount) + 1;
      localStorage.setItem(this.visitorCountKey, addVisitorCount.toString());
    }

    
    this.visitorMessage = this.visitorMessage.replace('${visitorCount}',visitorCount);
  }

  onClickButton() {
    let addButtonClickCount = Number(this._getLocalStorageContentByKey(this.buttonClickCountStorageKey)) + 1;
    this.buttonClickCount = addButtonClickCount;
    this._setLocalStorage(this.buttonClickCountStorageKey, this.buttonClickCount.toString());
    //this.count = +localStorage.getItem('clickCount');

  }


  private _getLocalStorageContentByKey(key: string): string {
    return localStorage.getItem(key);
  }

  private _setLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  }



}


export enum LOCALSTORAGE {
  CLICKCOUNT = 'buttonClickCount',
  VISITORCOUNT = 'visitorCount'
}
