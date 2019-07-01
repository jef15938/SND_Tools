import { Component, OnInit } from '@angular/core';
import { CustomerDetail, TelList } from './model/customerDetail';

@Component({
  selector: 'app-prototype-pattern',
  templateUrl: './prototype-pattern.component.html',
  styleUrls: ['./prototype-pattern.component.scss']
})
export class PrototypePatternComponent implements OnInit {

  constructor() { }

  public title: string = 'Prototype Pattern';
  public customerDetail: CustomerDetail;

  public customerDetailList: Array<CustomerDetail> = [];


  ngOnInit() {
    
  }

  addEmptyCustomerDetail() {

    let emptyCustomerDetail = new CustomerDetail('', '', '', [new TelList('', '')]);
    emptyCustomerDetail['color'] = '#b6f0a1';
    this.customerDetailList.push(emptyCustomerDetail);

  }

  addDefaultCustomerDetail() {

    let defaultCustomerDetail = new CustomerDetail('Jack', 'Kaohsiung', 'M', [new TelList('Jack,s father', '0912'), new TelList('Jack,s mather', '0934')]);


    defaultCustomerDetail['color'] = '#b6f0a1';
    this.customerDetailList.push(defaultCustomerDetail);

  }

  deepCloneCustomerDetail(customerDetail: CustomerDetail) {

    if (customerDetail['color'] != '#f2b3b3') {
      customerDetail['color'] = '#b6f0a1';
    }
    let obj = customerDetail.deepClone();
    obj['color'] = '#b6f0a1';
    this.customerDetailList.push(obj);
  }

  dirtyCloneCustomerDetail(customerDetail: CustomerDetail) {

    customerDetail['color'] = '#f2b3b3';
    let obj = customerDetail.dirtyClone();
    obj['color'] = '#f2b3b3';
    this.customerDetailList.push(obj);

  }

  cloneCustomerDetail(customerDetail: CustomerDetail) {

    customerDetail['color'] = '#f2b3b3';
    let obj = customerDetail;
    obj['color'] = '#f2b3b3';
    this.customerDetailList.push(obj);

  }


  clearCustomerDetailList() {
    this.customerDetailList = [];
  }


  public deepCloneWithoutClass(obj) {

    
    return JSON.parse(JSON.stringify(obj));

  }




}
