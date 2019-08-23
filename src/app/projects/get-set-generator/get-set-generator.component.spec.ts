import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSetGeneratorComponent } from './get-set-generator.component';

describe('GetSetGeneratorComponent', () => {
  let component: GetSetGeneratorComponent;
  let fixture: ComponentFixture<GetSetGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSetGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSetGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
