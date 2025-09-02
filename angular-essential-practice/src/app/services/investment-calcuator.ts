import { Injectable, signal } from '@angular/core';
import { AnnualData } from '../investment-results/annual-data';
import type { InvestmentInput } from '../user-input/investment-input';

@Injectable({
  providedIn: 'root',
})
export class InvestmentCalcuator {
  resultData = signal<AnnualData[] | undefined>(undefined);

  getResults(inputs: InvestmentInput) {
    const annualData: Array<AnnualData> = [];
    let investmentValue = inputs.initialInvestment;

    for (let i = 0; i < inputs.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (inputs.expectedReturn / 100);
      investmentValue += interestEarnedInYear + inputs.annualInvestment;
      const totalInterest =
        investmentValue - inputs.annualInvestment * year - inputs.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: inputs.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: inputs.initialInvestment + inputs.annualInvestment * year,
      });
    }
    this.resultData.set(annualData);
  }
}
