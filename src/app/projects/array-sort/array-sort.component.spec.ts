import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraySortComponent } from './array-sort.component';

describe('ArraySortComponent', () => {
  let component: ArraySortComponent;
  let fixture: ComponentFixture<ArraySortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraySortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraySortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
