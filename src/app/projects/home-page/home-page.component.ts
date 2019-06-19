import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy{

  public storeSubscribe;
  public isMenuOpen: boolean;
  constructor(private sotre: Store<fromStore.State>, private changeDetector: ChangeDetectorRef) { }

  public isDown: boolean = false;
  ngOnInit() {
    this.storeSubscribe = this.sotre.subscribe(data => {
      this.isMenuOpen = data.menu.menuState;
    });

    // document.body.onmousemove = ()=>{
    //   console.log(event);
    // }

    

  }

  ngOnDestroy(): void {
    this.storeSubscribe.unsubscribe();
  }

  onClick(event) {
    console.log(event.center);
    let myDiv = document.createElement('div');
    myDiv.style.position = "absolute";
    myDiv.style.left = event.center.x+'px';
    myDiv.style.top = event.center.y+'px';
    myDiv.style.backgroundColor = 'black';
    myDiv.style.width = '2px';
    myDiv.style.height = '2px';
    document.body.appendChild(myDiv);

  }

  onPanStart() {
    console.log("PanStart:")
  }

  

}
