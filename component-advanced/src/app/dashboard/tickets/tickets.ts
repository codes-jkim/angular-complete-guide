import { Component } from '@angular/core';
import { NewTicket } from "../new-ticket/new-ticket";
import { Ticket } from "../ticket/ticket";
import { TicketItem } from './ticket-item';

@Component({
  selector: 'app-tickets',
  imports: [NewTicket, Ticket],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css'
})
export class Tickets {
  tickets: TicketItem[] = [];

  onAdd(ticket: { title: string; text: string }) {
    const newTicket: TicketItem = {
      id: Math.random().toString(),
      title: ticket.title,
      request: ticket.text,
      status: 'open'
    };
    this.tickets.push(newTicket);
  }

  onCloseTicket(ticketId: string) {
    this.tickets = this.tickets.map(ticket => {
      if(ticket.id === ticketId) {
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    });
  }
}
