import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { differenceInSeconds, differenceInMilliseconds } from 'date-fns'

@Component({
  selector: 'app-ng-zone-test',
  templateUrl: './ng-zone-test.component.html',
  styleUrls: ['./ng-zone-test.component.scss']
})
export class NgZoneTestComponent implements OnInit {

  public title: string = 'NgZoneTest';
  public number: number = 100;
  public inputNumber: number = 0;
  public outsideAngularCode: string = `this.zone.runOutsideAngular(()=>{...});`;
  public insideAngularCode: string = `this.zone.run(()=>{...});`;

  constructor(
    private zone: NgZone,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {

  }

  setValueOutsideAngular() {
    this.zone.runOutsideAngular(()=>{
      setTimeout(()=>{
        this.number = this.inputNumber;
      })
    });
  }



  setValueInsideAngular() {
    this.zone.run(()=>{
      setTimeout(()=>{
        this.number = this.inputNumber;
      })
    })
  }



  detectChanges() {
    this.changeDetector.detectChanges();
  }

  




}
