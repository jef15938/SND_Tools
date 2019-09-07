import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'XLSX'

@Component({
  selector: 'app-update-language',
  templateUrl: './update-language.component.html',
  styleUrls: ['./update-language.component.scss']
})
export class UpdateLanguageComponent implements OnInit {

  public title: string = 'updateLanguageByXls(API)';
  private file: File;
  public jsonText: string = '';
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {

    

    let dropbox = document.getElementById("dropbox");
    // dropbox.addEventListener("dragenter", ondragenter,false);
    // dropbox.addEventListener("dragover", ondragover, false);
    // dropbox.addEventListener('drop', ondrop, false);
    dropbox.addEventListener("dragenter", ()=>{
      console.warn('dragenter');
    });
    dropbox.addEventListener("dragover", ()=> {
      console.warn("ddragover");
    });
    dropbox.addEventListener('drop', () => {
      console.warn('drop');
    });
  }

  incomingfile(event) {
    this.file = event.target.files[0];
  }


  public postMethod() {

    let formData = new FormData();
    formData.append('file', this.file, this.file.name);
    this.httpClient.post('http://sd.decoder.com.tw/DEV/restful/updateLanguage', formData).subscribe((val) => {


      // XLSX.writeFile(<XLSX.WorkBook>val, 'l.json');
      this.jsonText = JSON.stringify(val, null, "\t");
      // let value = window.open('https://docs.google.com/spreadsheets/d/1-rMK-WDvLzt96O9DGZy-KkGzR-IvCOWRConk0GDyQuk/export');
      // console.warn(value);
    });
    return false;
  }




}

