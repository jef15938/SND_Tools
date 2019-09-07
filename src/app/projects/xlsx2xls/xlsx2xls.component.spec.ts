import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Xlsx2xlsComponent } from './xlsx2xls.component';

describe('Xlsx2xlsComponent', () => {
  let component: Xlsx2xlsComponent;
  let fixture: ComponentFixture<Xlsx2xlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Xlsx2xlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Xlsx2xlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
