import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { menuItem } from '../model/menuItem';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public isMenuOpen: boolean = true;
  public clickItem: menuItem;
  public menuList: Array<menuItem> = [];
  constructor(private router: Router) { }

  ngOnInit() {
    let tempMenuList = [];
    tempMenuList.push(new menuItem('homePage', ''));
    tempMenuList.push(new menuItem('koaep', '/koaep'));
    tempMenuList.push(new menuItem('paintBoard', '/paintBoard'));
    tempMenuList.push(new menuItem('strategyPattern','/strategyPattern'));
    tempMenuList.push(new menuItem('prototypePattern','/prototypePattern'));
    this.menuList = tempMenuList;
    this.clickItem = this.menuList[0];
  }

  @Output() menuStatus: EventEmitter<boolean> =  new EventEmitter();

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuStatus.emit(this.isMenuOpen);
  }

  onClickMenuItem(menuItem: menuItem) {
    console.warn(menuItem);
    this.clickItem = menuItem;
    this.router.navigate([menuItem.url]);

  }

  

}
