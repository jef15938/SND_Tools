import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../angularStore';
import { AppStore } from 'src/app/appSore/appStore';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  public storeSubscribe;
  public isMenuOpen: boolean;
  constructor(
    private store: AppStore
  ) { 
    this.store.setCurrentMenuItem('');
  }

  ngOnInit() {
    
  }
}
