import { Component, OnInit } from '@angular/core';
import { CustomerBirthday } from './Bean/CustomerBirthday';

@Component({
  selector: 'app-nested-loop-refactor',
  templateUrl: './nested-loop-refactor.component.html',
  styleUrls: ['./nested-loop-refactor.component.scss']
})
export class NestedLoopRefactorComponent implements OnInit {

  public readonly title = "NestedLoopRefactor";
  private customerBirthDayList: Array<CustomerBirthday> = [];
  public sortCustomerBirthDayList: Array<CustomerBirthday> = [];
  constructor() { }

  ngOnInit() {
    this.customerBirthDayList = [
      new CustomerBirthday('Zack', 'Wang1', '03', '12'),
      new CustomerBirthday('Mary', 'Wang2', '02', '11'),
      new CustomerBirthday('Hello', 'Liou', '01', '12'),
      new CustomerBirthday('Jackkkk', 'Wang', '12', '05'),
      new CustomerBirthday('Jack', 'Wang', '03', '19'),
      new CustomerBirthday('Jimmy', 'OOXX', '12', '12'),
      new CustomerBirthday('Jack', 'Test', '09', '09'),
      new CustomerBirthday('Pong', 'Pong', '06', '11'),
      new CustomerBirthday('Simpleson', 'Wang1', '03', '12'),
      new CustomerBirthday('Jimmy', 'Wang', '12', '05'),
      new CustomerBirthday('Tom', 'Pong', '03', '19'),
      new CustomerBirthday('Pong', 'Pong', '01', '11'),
    ];

    this.sortCustomerBirthDayList = this._sortBirthDayListByNameRefactor(this.customerBirthDayList);
    console.log('after sort: ', this.sortCustomerBirthDayList);
  }


  private _sortBirthDayListByName(birthdayItemList: Array<CustomerBirthday>) {

    let cloneList = birthdayItemList.map(x => x);
    cloneList.sort((item1, item2) => {
      if(item1.birthdayMonth < item2.birthdayMonth) {
        return -1;
      }
      else if(item1.birthdayMonth > item2.birthdayMonth) {
        return 1;
      }
      else { //the same month
        if (item1.birthdayDate < item2.birthdayDate) {
          //item1.birthdayMonth <= item2.birthdayMonth && item1.birthdayDate < item2.birthdayDate
          return -1;
        }
        else if (item1.birthdayDate > item2.birthdayDate) {
          // //item1.birthdayMonth <= item2.birthdayMonth && item1.birthdayDate > item2.birthdayDate
          return 1;
        }
        else {
          if (item1.firstName < item2.firstName) {
            //the same birthday && item1.firstName < item2.firstName
            return -1;
          }
          else if (item1.firstName > item2.firstName) {
            //the same birthday && item1.firstName > item2.firstName
            return 1;
          }
          else {
            if (item1.lastName < item2.lastName) {
               //the same birthday && item1.firstName == item2.firstName && item1.lastName < item2.lastName
              return -1;
            }
            else if (item1.lastName > item2.lastName) {
              //the same birthday && item1.firstName == item2.firstName && item1.lastName > item2.lastName
              return 1;
            }
            else {
              //the same birthday && the same name
              return 0;
            }
          }
        }
      }
    });

    return cloneList;
  }

  private _sortBirthDayListByNameRefactor(birthdayItemList: Array<CustomerBirthday>) {

    let cloneList = birthdayItemList.map(x => x);
    cloneList.sort((item1, item2) => {

      let compareMonth = this._compare(item1.birthdayMonth, item2.birthdayMonth);
      let compareDate = this._compare(item1.birthdayDate, item2.birthdayDate);
      let comparefirstName = this._compare(item1.firstName, item2.firstName);
      let compareLastName = this._compare(item1.lastName, item2.lastName);
      // return compareMonth !==0 ? compareMonth : compareDate !==0 ? compareDate : comparefirstName !==0 ? comparefirstName : compareLastName ;
      if(compareMonth !== 0) {
        return compareMonth;
      }

     
      if(compareDate !== 0) {
        return compareDate;
      }

    
      if(comparefirstName !== 0) {
        return comparefirstName;
      }

     
      if(compareLastName !== 0) {
        return compareLastName;
      }

      return 0;

    
    });

    return cloneList;
  }

  private _compare(n1, n2): number {
    if(n1 < n2) {
      return -1;
    }
    else if(n1 > n2) {
      return 1;
    }
    else {
      return 0;
    }
  }
}
