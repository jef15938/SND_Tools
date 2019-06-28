import { Component, OnInit } from '@angular/core';
import { CustomerDetail, TelList } from './model/customerDetail';

@Component({
  selector: 'app-prototype-pattern',
  templateUrl: './prototype-pattern.component.html',
  styleUrls: ['./prototype-pattern.component.scss']
})
export class PrototypePatternComponent implements OnInit {

  constructor() { }

  public customerDetail: CustomerDetail;

  public customerDetailList: Array<CustomerDetail> = [];

  ngOnInit() {
    this.customerDetail = new CustomerDetail("Mary","Kaohsiung","M",[new TelList('Mary,s father','0912')]);
    let cloneObj = this.customerDetail.clone();
    cloneObj.telList[0].name = 'change father';
    console.log("this.customerDetail: ",this.customerDetail);
    console.log("this.cloneObj: ",cloneObj);
  }

  addEmptyCustomerDetail() {

    let emptyCustomerDetail = new CustomerDetail('','','',[new TelList('','')]); 
    this.customerDetailList.push(emptyCustomerDetail);
   
  }

  addDefaultCustomerDetail() {

    let defaultCustomerDetail = new CustomerDetail('Jack','Kaohsiung','M',[new TelList('Jack,s father','0912'),new TelList('Jack,s mather','0934')]); 
    
  
    this.customerDetailList.push(defaultCustomerDetail);

  }

  cloneCustomerDetail(customerDetail: CustomerDetail) {

  
    if(customerDetail['color'] != '#f2b3b3') {
      customerDetail['color'] = '#b6f0a1';
    }
    let obj = customerDetail.clone();
    obj['color'] = '#b6f0a1';
    this.customerDetailList.push(obj);


  }

  dirtyCloneCustomerDetail(customerDetail: CustomerDetail) {

    customerDetail['color'] = '#f2b3b3';
    let obj = customerDetail.dirtyClone();
    obj['color'] = '#f2b3b3';
    this.customerDetailList.push(obj);
    
  }


  clearCustomerDetailList() {
    this.customerDetailList = [];
  }

  


  

}
