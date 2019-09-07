import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLanguageByXlsxComponent } from './update-language-by-xlsx.component';

describe('UpdateLanguageByXlsxComponent', () => {
  let component: UpdateLanguageByXlsxComponent;
  let fixture: ComponentFixture<UpdateLanguageByXlsxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLanguageByXlsxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLanguageByXlsxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
