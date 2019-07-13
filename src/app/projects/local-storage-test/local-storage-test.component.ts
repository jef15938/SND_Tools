import { Component, OnInit } from '@angular/core';
import { AppStore } from 'src/app/appSore/appStore';

@Component({
  selector: 'app-local-storage-test',
  templateUrl: './local-storage-test.component.html',
  styleUrls: ['./local-storage-test.component.scss']
})
export class LocalStorageTestComponent implements OnInit {

  public count: number;
  constructor(
    private store: AppStore
  ) { 
    this.store.setCurrentMenuItem('localStorageTest');
  }

  ngOnInit() {
    //localStorage.setItem('clickCount', '0');
    //this.count = +localStorage.getItem('clickCount');
  }

  onClickBody() {
    let count = +localStorage.getItem('clickCount') + 1;
    localStorage.setItem('clickCount', count.toString());
    this.count = +localStorage.getItem('clickCount');

  }



}
