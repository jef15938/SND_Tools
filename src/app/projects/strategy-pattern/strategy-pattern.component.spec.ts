import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyPatternComponent } from './strategy-pattern.component';
import { FormsModule } from '@angular/forms';

describe('StrategyPatternComponent', () => {
  let component: StrategyPatternComponent;
  let fixture: ComponentFixture<StrategyPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategyPatternComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('calculate', () => {
    let firstNumber = component.firstNumber;
    let lastNumber = component.lastNumber;
    let assertAnswer = firstNumber * lastNumber;
    expect(component.IStrategy.calculate(firstNumber, lastNumber)).toEqual(assertAnswer);

  });
});
