import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { FeedBackInfo, FEEDBACKTYPE } from 'src/app/ui/bean/FeedBackInfo';

@Component({
  selector: 'app-update-language-by-xlsx',
  templateUrl: './update-language-by-xlsx.component.html',
  styleUrls: ['./update-language-by-xlsx.component.scss']
})
export class UpdateLanguageByXlsxComponent implements OnInit {

  public title: string = 'updateLanguage(xlsx, xls)';
  public file: File;
  public jsonText: string = '';
  public isShowFeedBack: boolean = false;
  public feedBackInfo: FeedBackInfo = null;
  // private dropBoxArea: HTMLElement = null;
  private textArea: HTMLElement = null;
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {



    // this.dropBoxArea = document.getElementById('dropbox');
    this.textArea = document.getElementById('textArea');
    // dropbox.addEventListener("dragenter", ondragenter,false);
    // dropbox.addEventListener("dragover", ondragover, false);
    // dropbox.addEventListener('drop', ondrop, false);
    this.textArea.addEventListener("dragleave", () => {
      console.warn('dragleave');
      this._updateTextAreaStyle('finish');

      // this.isShowGrayArea = false;


    });
    this.textArea.addEventListener("dragover", () => {
      this._updateTextAreaStyle('loading');
    });
    this.textArea.addEventListener('drop', (evt) => {
      this.jsonText = '';
      evt.preventDefault();
      evt.stopPropagation();
      let files = evt.dataTransfer.files;

      let fileExtensionMatch: Array<string> = ['xls', 'xlsx'];
      let targetFileExt = files.item(0).name.split('.').pop();
      // console.warn(files.item(0).name.split('.').pop());
      // alert(files);
      if (files.length > 0 && fileExtensionMatch.includes(targetFileExt)) {
        this.file = files.item(0);
        this.uploadFile().then(
          (success) => {
            // alert('success');
            this._updateTextAreaStyle('finish');
            this.isShowFeedBack = true;
            this.feedBackInfo = new FeedBackInfo(FEEDBACKTYPE.SUCCESS, '');

          },
          (error) => {
            // alert('fail');
            this._updateTextAreaStyle('finish');
            this.isShowFeedBack = true;
            this.feedBackInfo = new FeedBackInfo(FEEDBACKTYPE.FAIL, '');
          }
        );
      }
      else {
        this._updateTextAreaStyle('finish');
        this.isShowFeedBack = true;
        this.feedBackInfo = new FeedBackInfo(FEEDBACKTYPE.FAIL, '');
      }
      console.warn('drop');
    });
  }

  incomingfile(event) {
    this.file = event.target.files[0];
  }


  // let value = window.open('https://docs.google.com/spreadsheets/d/1-rMK-WDvLzt96O9DGZy-KkGzR-IvCOWRConk0GDyQuk/export');
  // this.jsonText = JSON.stringify(val, null, "\t");

  downloadFileFromGoogleSheet() {
    window.open('https://docs.google.com/spreadsheets/d/1-rMK-WDvLzt96O9DGZy-KkGzR-IvCOWRConk0GDyQuk/export')
  }

  uploadFile(): Promise<any> {

    // console.warn(ev);

    return new Promise((res, rej) => {
      let workBook = null;
      let jsonData = null;
      const reader = new FileReader();
      // const file = ev.target.files[0];
      reader.onload = (event) => {
        const data = reader.result;
        try {
          workBook = XLSX.read(data, { type: 'binary' });
          let targetSheet = workBook.Sheets[workBook.SheetNames[0]];

          jsonData = XLSX.utils.sheet_to_json(targetSheet, { header: 1 });

          this.jsonText = this._parseSheetJsonToLanguage(jsonData);
          res();
        }
        catch (error) {
          console.error(error);
          rej();
        }

      }
      reader.readAsBinaryString(this.file);
    })

  }


  private _parseSheetJsonToLanguage(json): string {
    let targetLanguage: Array<string> = ['zh_TW', 'TH', 'en'];
    let languageObj = {};

    (<Array<any>>json).forEach(col => {
      let languageType: string = col[0];
      if (languageType && targetLanguage.includes(languageType)) {
        let mappingID: string = col[1];
        let value: string = col[2] ? col[2] : '';
        if(!languageObj[languageType]) {
          languageObj[languageType] = {};
        }
        languageObj[languageType][mappingID] = value;
      }
    });

    // console.warn(languageObj)
    return JSON.stringify(languageObj, null, "\t");

  }


  private _updateTextAreaStyle(mode: string) {
    if (mode === 'loading') {
      this.textArea.style.backgroundColor = 'black';
      this.textArea.style.opacity = '0.3';
    }
    else if (mode === 'finish') {
      this.textArea.style.backgroundColor = '';
      this.textArea.style.opacity = '';
    }
  }




}
