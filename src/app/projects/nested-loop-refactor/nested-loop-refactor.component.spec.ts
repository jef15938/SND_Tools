import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedLoopRefactorComponent } from './nested-loop-refactor.component';

describe('NestedLoopRefactorComponent', () => {
  let component: NestedLoopRefactorComponent;
  let fixture: ComponentFixture<NestedLoopRefactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedLoopRefactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedLoopRefactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
