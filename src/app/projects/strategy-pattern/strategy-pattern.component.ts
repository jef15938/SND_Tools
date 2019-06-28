import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-strategy-pattern',
  templateUrl: './strategy-pattern.component.html',
  styleUrls: ['./strategy-pattern.component.scss']
})
export class StrategyPatternComponent implements OnInit {

  public answer: number = 0;
  public targetID: string;
  public IStrategy: IStrategy;
  public firstNumber: number;
  public lastNumber: number;
 

  constructor() {
  }

  ngOnInit() {
  }

  onMouseOver(event) {
    let targetID = event.target.id;
    if (this.targetID != targetID) {
      event.target.style.backgroundColor = "#b6f0a1";
    }
  }

  onMouseOut(event) {
    let targetID = event.target.id;
    if (this.targetID != targetID) {
      event.target.style.backgroundColor = "white";
    }
  }

  onClick(event) {
    this.targetID = event.target.id;
    switch (this.targetID) {

      case SIGN.PLUS:
        this.IStrategy = new Plus();
        break;

      case SIGN.MINUS:
        this.IStrategy = new Minus();
        break;

      case SIGN.MULTIPLY:
        this.IStrategy = new Multiply();
        break;

      case SIGN.DEVIDE:
        this.IStrategy = new Divide();
        break;

      default:
        break;
    }

    this.calculate();
  }

  calculate() {
    if(!isNaN(Number(this.firstNumber)) && !isNaN(Number(this.lastNumber))) {
      if(this.IStrategy) {
        this.answer = this.IStrategy.calculate(+this.firstNumber, +this.lastNumber);
      }
    }
  }


}

enum SIGN {
  PLUS = 'plus',
  MINUS = 'minus',
  MULTIPLY = 'multiply',
  DEVIDE = 'divide'
}

interface IStrategy {
  calculate(x: number, y: number): number;
}

class Plus implements IStrategy {
  calculate(x: number, y: number): number {
    return x + y;
  } 
}

class Minus implements IStrategy {
  calculate(x: number, y: number): number {
    return x - y;
  } 
}

class Multiply implements IStrategy{
  calculate(x: number, y: number): number {
    return x * y;
  } 
}

class Divide implements IStrategy {
  calculate(x: number, y: number): number {
    return x / y;
  } 
}


