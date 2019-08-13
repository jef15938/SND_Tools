import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototypePatternComponent } from './prototype-pattern.component';
import { FormsModule } from '@angular/forms';

describe('PrototypePatternComponent', () => {
  let component: PrototypePatternComponent;
  let fixture: ComponentFixture<PrototypePatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrototypePatternComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrototypePatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
