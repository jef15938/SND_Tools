import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebParameterTestComponent } from './web-parameter-test.component';

describe('WebParameterTestComponent', () => {
  let component: WebParameterTestComponent;
  let fixture: ComponentFixture<WebParameterTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebParameterTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebParameterTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
