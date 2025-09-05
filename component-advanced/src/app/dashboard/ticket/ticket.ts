import { Component, input, output, signal } from '@angular/core';
import { TicketItem } from '../tickets/ticket-item';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css'
})
export class Ticket {
  data = input.required<TicketItem>();
  detailVisible = signal(false);
  close = output()

  onToggleDetails() {
    this.detailVisible.update(wasVisible => !wasVisible);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
