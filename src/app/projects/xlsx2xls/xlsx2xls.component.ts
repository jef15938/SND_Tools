import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-xlsx2xls',
  templateUrl: './xlsx2xls.component.html',
  styleUrls: ['./xlsx2xls.component.scss']
})
export class Xlsx2xlsComponent implements OnInit {

  public title: string = 'XlsxToXls';
  private file: File;
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
  }

  incomingfile(event) {
    this.file = event.target.files[0];
    // let fileNameWithType = this.file.name;
    // console.warn(fileNameWithType.slice(0, fileNameWithType.indexOf('.')));
    // console.warn(this.file);
  }

  onFileChange(ev) {
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    // const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
    
      workBook = XLSX.read(data, { type: 'binary'});
      let fileNameWithType = this.file.name;
      let fileName = fileNameWithType.slice(0, fileNameWithType.indexOf('.'));
      let outPutFileNameWithType = '_' + fileName + '.xlsx';
      let option: XLSX.WritingOptions = {
        bookType: "biff8",
        type: "binary"
      }
      // XLSX.write(workBook, option);
      XLSX.writeFile(workBook, outPutFileNameWithType, option);
 
      // this._postMethod(this.file);
      
    }
    reader.readAsBinaryString(this.file);
  }


  private _postMethod(file: File) {
    
    let formData = new FormData(); 
    formData.append('file', file, file.name); 
    this.httpClient.post('http://sd.decoder.com.tw/DEV/restful/updateLanguage', formData).subscribe((val) => {
    
    console.log(val);
    });
    return false; 
    }

}
