import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoaepComponent } from './koaep.component';

describe('KoaepComponent', () => {
  let component: KoaepComponent;
  let fixture: ComponentFixture<KoaepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoaepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoaepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
