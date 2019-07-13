import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../angularStore';
import { Observable } from 'rxjs';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { AppStore } from 'src/app/appSore/appStore';
@Component({
  selector: 'app-koaep',
  templateUrl: './koaep.component.html',
  styleUrls: ['./koaep.component.scss']
})
export class KoaepComponent implements OnInit {

  public isMenuOpen: boolean;
  public isFrameLoad: boolean;
  public isHideLoading: boolean;
  public isUsingLoadingAnimation: boolean = false;

  constructor(
    private store: AppStore
  ) { 
    this.store.setCurrentMenuItem('koaep');
  }

  ngOnInit() {
    this.isFrameLoad = false;
    this.isHideLoading = false;
  }

  loadFrameDone(event) {
    
    this.isFrameLoad = true;
    this.isHideLoading = true;
    
  }

}
