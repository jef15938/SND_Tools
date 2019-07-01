import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgZoneTestComponent } from './ng-zone-test.component';

describe('NgZoneTestComponent', () => {
  let component: NgZoneTestComponent;
  let fixture: ComponentFixture<NgZoneTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgZoneTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgZoneTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
