import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { AnnualData } from './investment-results/annual-data';
import { InvestmentResults } from './investment-results/investment-results';
import { UserInput } from './user-input/user-input';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, UserInput, InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-essential-practice');
  calculatedResult = signal<AnnualData[]>([])

  getResult(result: AnnualData[]) {
    this.calculatedResult.set(result)
  }



}
