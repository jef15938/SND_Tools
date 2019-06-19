import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable } from 'rxjs';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
@Component({
  selector: 'app-koaep',
  templateUrl: './koaep.component.html',
  styleUrls: ['./koaep.component.scss']
})
export class KoaepComponent implements OnInit, OnDestroy{

  public storeSubscribe;
  public isMenuOpen: boolean;
  public isFrameLoad: boolean;
  public isHideLoading: boolean;

  constructor(
    private sotre: Store<fromStore.State>,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.isFrameLoad = false;
    this.isHideLoading = false;
    this.storeSubscribe = this.sotre.subscribe(data => {
      this.isMenuOpen = data.menu.menuState;
    });
  }

  ngOnDestroy(): void {
    this.storeSubscribe.unsubscribe();
  }

  loadFrameDone(event) {
    this.isFrameLoad = true;
    
    this.isHideLoading = true;
    //this.changeDetector.detectChanges();
  }

}
