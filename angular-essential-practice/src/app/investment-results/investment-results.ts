import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { InvestmentCalcuator } from '../services/investment-calcuator';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {
  private investmentCalculator = inject(InvestmentCalcuator)

  // results = computed(() => this.investmentCalculator.resultData())
  results = this.investmentCalculator.resultData.asReadonly();
}
