import { UpperCasePipe } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  imports: [UpperCasePipe],
  templateUrl: './dashboard-item.html',
  styleUrl: './dashboard-item.css',
  host: {
    class: 'dashboard-item'
  }
})
export class DashboardItem {
  @Input({ required: true }) image!: { src: string; alt: string };
  // @Input({ required: true }) title!: string;

  title = input.required<string>();
}
