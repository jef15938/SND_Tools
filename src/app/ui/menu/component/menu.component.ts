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
    //alert(window.location.href);
    let tempMenuList = [];
    tempMenuList.push(new menuItem('homePage', ''));
    tempMenuList.push(new menuItem('koaep', '/koaep'));
    tempMenuList.push(new menuItem('paintBoard', '/paintBoard'));
    tempMenuList.push(new menuItem('strategyPattern','/strategyPattern'));
    tempMenuList.push(new menuItem('prototypePattern','/prototypePattern'));
    tempMenuList.push(new menuItem('ngZoneTest','/ngZoneTest'));
    
    this.menuList = tempMenuList;
    
    let findTargetMenuItemByUrl = this.menuList.findIndex(x => 'http://localhost:4200'+x.url === window.location.href);
    
    this.clickItem = this.menuList[findTargetMenuItemByUrl==-1?0:findTargetMenuItemByUrl];
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
