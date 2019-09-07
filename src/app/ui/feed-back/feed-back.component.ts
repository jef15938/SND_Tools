import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FeedBackInfo, FEEDBACKTYPE } from '../bean/FeedBackInfo';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.scss']
})
export class FeedBackComponent implements OnInit {

  @Input()
  set isShowFeedBack(isShowFeedBack: boolean) {
    this._isShowFeedBack = isShowFeedBack;
    if (this._isShowFeedBack) {
      setTimeout(() => {
        this._isShowFeedBack = false;
        this.isShowFeedBackChange.emit(this._isShowFeedBack);
      }, 2000);
    }
  }
  get isShowFeedBack() {
    return this._isShowFeedBack;
  }

  @Input() feedBackInfo: FeedBackInfo = null;

  @Output() isShowFeedBackChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  private _isShowFeedBack: boolean = false;
  public feedBackTypeEnum = FEEDBACKTYPE;

  constructor(
    private changeDetector: ChangeDetectorRef
  ) { }

  public successImgSrc = './assets/checkmark.jpg';
  public failImgSrc = './assets/crossmark.jpg';

  ngOnInit() {
  }





}
