export interface TicketItem {
  id: string;
  title: string;
  request: string;
  status: 'open' | 'closed';
}
