import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PongPongPayComponent } from './pong-pong-pay.component';

describe('PongPongPayComponent', () => {
  let component: PongPongPayComponent;
  let fixture: ComponentFixture<PongPongPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PongPongPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PongPongPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
