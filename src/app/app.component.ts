import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from './angularStore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jefferyWebsite';
  public isMenuOpen: boolean = true;
  constructor(private store: Store<fromStore.State>) {
  }

  onMenuStatusChange(isMenuOpen) {
    console.log("onMenuStatusChange: ",isMenuOpen);
    this.isMenuOpen = isMenuOpen;
    if(isMenuOpen) {
      this.store.dispatch(new fromStore.openMenuAction);
    }
    else {
      this.store.dispatch(new fromStore.closeMenuAction);
    }
    //this.appState.isMenuOpen = isMenuOpen;
  }
}
