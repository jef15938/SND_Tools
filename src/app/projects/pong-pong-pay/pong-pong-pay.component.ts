import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PayPersonItem } from './bean/PayPersonItem';
import { PayRecord } from './bean/PayRecord';
import { PayRecordYear } from './bean/PayRecordYear';
import * as _ from 'date-fns';
import { PayRecordMonth } from './bean/PayRecordMonth';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-pong-pong-pay',
  templateUrl: './pong-pong-pay.component.html',
  styleUrls: ['./pong-pong-pay.component.scss']
})
export class PongPongPayComponent implements OnInit {

  constructor(
    private httpService: HttpClient,
  ) { }

  public payPersonItemList: Array<PayPersonItem> = [];
  public isdetailPopupOpen: boolean = false;
  public isMouseFocusPopupContent: boolean = false;
  public payRecordYearList: Array<PayRecordYear> = [];
  public dateFns = _;
  public currentpayPersonItem: PayPersonItem;
  private clickTitleCount: number = 0;
  public isShowInputFile: boolean = false;




  ngOnInit() {
    this._getLoclStorageDataAndSetList();
  }

  onClickTitle() {

    this.clickTitleCount++;

    if (this.clickTitleCount === 3) {
      // let pwd = prompt('password: ','123');
      let isClickCancel: boolean = false;
      while (this.isShowInputFile === false && !isClickCancel) {
        let pwd = prompt('password: ', '');
        if (pwd === '5t$R3e@W1q') {
          this.isShowInputFile = true;
        }
        else if (pwd === null) {
          this.clickTitleCount = 0;
          isClickCancel = true;
        }
      }
    }
  }

  onClickCloseInputFile() {
    this.clickTitleCount = 0;
    this.isShowInputFile = false;
  }


  onClickItem(personItem: PayPersonItem) {
    console.warn('id: ', personItem.id);
    this.currentpayPersonItem = personItem;
    // this.currentpayPersonItem.restMoney
    this.payRecordYearList = this._getPayRecordYearList(personItem.id);
    this.isdetailPopupOpen = true;
  }

  onClosePopup() {
    this.isdetailPopupOpen = false;
  }



  private _getUnique(value: any, index: number, array: Array<any>) {
    return array.indexOf(value) === index;
  }

  public getShowMonthText(month: number) {
    return month + ' 月'
  }

  public getDate(date: string | number | Date) {
    return _.format(date,'DD');
  }


  private _getPayRecordYearList(id: string): PayRecordYear[] {

    let payRecordYearList: Array<PayRecordYear> = [];

    let filterResult = this.payPersonItemList.filter(personItem => personItem.id === id);
    let targetPayPersonItem: PayPersonItem = filterResult.length > 0 ? filterResult[0] : null;

    if (targetPayPersonItem) {
      let uniqueYearList: Array<number> = this._sortNumberList(targetPayPersonItem.payRecordList.map(x => _.getYear(x.date)).filter(this._getUnique));
      uniqueYearList.forEach(year => {
        let tmpRecordYear: PayRecordYear = new PayRecordYear(year);
        let monthList: Array<number> = this._sortNumberList(targetPayPersonItem.payRecordList.filter(x => _.getYear(x.date) === year).map(x => _.getMonth(x.date)).filter(this._getUnique));
        tmpRecordYear.payRecordMonthList = monthList.map(month => {
          let tmpPayRecordMonth: PayRecordMonth = new PayRecordMonth(month + 1);
          tmpPayRecordMonth.payRecordList = this._sortPayRecordList(targetPayPersonItem.payRecordList.filter(x => (_.getYear(x.date) === year && _.getMonth(x.date) === month)));

          return tmpPayRecordMonth;
        })

        payRecordYearList.push(tmpRecordYear);
      })
    }
    console.warn(payRecordYearList);

    return payRecordYearList;
  }


  private _sortNumberList(numberList: Array<number>): Array<number> {
    let cloneList = numberList.map(x => x);
    cloneList.sort((n1, n2) => n1 - n2);
    return cloneList;
  }

  private _sortPayRecordList(numberList: Array<PayRecord>): Array<PayRecord> {
    let cloneList = numberList.map(x => x.clone());
    cloneList.sort((n1, n2) => _.getDate(n1.date) - _.getDate(n2.date));
    return cloneList;
  }


  //import it

  //inside export class

  arrayBuffer: any;
  file: File;
  incomingfile(event) {
    this.file = event.target.files[0];
  }

  onFileChange(ev) {
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    // const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      let dataString = JSON.stringify(jsonData);
      let jsonFormat = this._xlsxJSONformat(dataString);

      this._updatePayPersonItemListByJson(jsonFormat);
      // this.payPersonItemList = (<Array<any>>jsonFormat).map(x => {
      //   let payRecordList: Array<PayRecord> = (<Array<any>>x.PayRecordList).map(x => new PayRecord(x.Date, x.Item, x.Cost));
      //   let costSum = payRecordList.map(payRecord => payRecord.cost).reduce((total, each) => total + each, 0);
      //   return new PayPersonItem(x.ID, x.Name, x.Money, costSum, payRecordList);
      // });

      window.localStorage.setItem('Data', JSON.stringify(jsonFormat));
      this._getLoclStorageDataAndSetList();
      // console.log("dataString: ", dataString);
      // document.getElementById('output').innerHTML = dataString.slice(0, 300).concat("...");
      // this.setDownload(dataString);
    }
    reader.readAsBinaryString(this.file);
  }


  private _xlsxJSONformat(json) {
    let patseJSON = JSON.parse(json);
    let recordList = <Array<any>>patseJSON.RecordList;
    let jsonFormat = (<Array<any>>patseJSON.Main).map(people => {
      return {
        ID: people.ID,
        Name: people.Name,
        Money: Number(people.Money),
        PayRecordList: recordList.filter(record => record.ID === people.ID).map(r => {
          return {
            Date: _.format(r.Date, 'YYYY/MM/DD'),
            Item: r.Item,
            Cost: r.Cost
          }
        }),
      }
    });


    console.log("jsonFormat: ", jsonFormat);
    return jsonFormat;
  }

  private _getLoclStorageDataAndSetList() {
    let getDataFromLocalStorage = window.localStorage.getItem('Data');
    if (getDataFromLocalStorage) {
      let dataParseJson = JSON.parse(getDataFromLocalStorage);
      this._updatePayPersonItemListByJson(dataParseJson);
      // this.payPersonItemList = (<Array<any>>dataParseJson).map(x => {
      //   let payRecordList: Array<PayRecord> = (<Array<any>>x.PayRecordList).map(x => new PayRecord(x.Date, x.Item, x.Cost));
      //   let costSum = payRecordList.map(payRecord => payRecord.cost).reduce((total, each) => total + each, 0);
      //   return new PayPersonItem(x.ID, x.Name, x.Money, costSum, payRecordList);
      // });
    }
  }

  private _updatePayPersonItemListByJson(json) {
    this.payPersonItemList = (<Array<any>>json).map(x => {
      let payRecordList: Array<PayRecord> = (<Array<any>>x.PayRecordList).map(x => new PayRecord(x.Date, x.Item, x.Cost));
      let costSum = payRecordList.map(payRecord => payRecord.cost).reduce((total, each) => total + each, 0);
      return new PayPersonItem(x.ID, x.Name, x.Money, costSum, payRecordList);
    });
  }







}

