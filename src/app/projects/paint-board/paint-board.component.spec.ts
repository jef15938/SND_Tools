import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintBoardComponent } from './paint-board.component';

describe('PaintBoardComponent', () => {
  let component: PaintBoardComponent;
  let fixture: ComponentFixture<PaintBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
