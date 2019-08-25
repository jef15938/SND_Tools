import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPracticeComponent } from './layout-practice.component';

describe('LayoutPracticeComponent', () => {
  let component: LayoutPracticeComponent;
  let fixture: ComponentFixture<LayoutPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
