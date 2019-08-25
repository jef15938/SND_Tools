import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-practice',
  templateUrl: './layout-practice.component.html',
  styleUrls: ['./layout-practice.component.scss']
})
export class LayoutPracticeComponent implements OnInit {

  public readonly imgSrc = '../../../assets/attractionPicture.jpg';
  public readonly title = '切版練習標題切版練習標題切版練習標題切版練習標題切版練習標題切版練習標題';
  public readonly content = '切版練習內容切版練習內容切版練習內容切版練習內容切版練習內容切版練習內容切版練習內容切版練習內容切版練習內容切版練習內容';
  constructor() { }

  ngOnInit() {
  }

}
