import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebParameterTestComponent } from './web-parameter-test.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('WebParameterTestComponent', () => {
  let component: WebParameterTestComponent;
  let fixture: ComponentFixture<WebParameterTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebParameterTestComponent ],
      imports: [ RouterTestingModule ]
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
