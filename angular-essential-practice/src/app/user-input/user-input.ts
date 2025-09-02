import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentCalcuator } from '../services/investment-calcuator';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  constructor(private investmentCalculator: InvestmentCalcuator) {}

  onSubmit() {
    this.investmentCalculator.getResults({
      initialInvestment: +this.initialInvestment(),
      expectedReturn: +this.expectedReturn(),
      annualInvestment: +this.annualInvestment(),
      duration: +this.duration(),
    });
    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');
  }
}
