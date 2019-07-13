import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../model/menuItem';
import { Router } from '@angular/router';
import { AppStore } from 'src/app/appSore/appStore';
@Component({
  selector: 'app-ui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public isMenuOpen: boolean = true;
  public clickItem: MenuItem;
  public menuList: Array<MenuItem> = [];
  constructor(
    private router: Router,
    private store: AppStore
  ) { }

  ngOnInit() {
    //alert(window.location.href);
    this.menuList = this.store.menuList;

    this.store.getCurrentMenuItem().subscribe((menuItem: MenuItem) => {
      console.log("menuItem :",menuItem);
      this.clickItem = menuItem;
    })
  }

  @Output() menuStatus: EventEmitter<boolean> = new EventEmitter();

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuStatus.emit(this.isMenuOpen);
  }

  onClickMenuItem(menuItem: MenuItem) {
    console.warn(menuItem);
    this.clickItem = menuItem;
    this.router.navigate([menuItem.url]);

  }



}
