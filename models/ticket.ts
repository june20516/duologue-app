export interface Ticket {
  quantity: number;
  maxQuantity: number;
  lastRefillAt: Date | null;
}

export interface MyTickets {
  matchTicket: Ticket;
  gameTicket: Ticket;
  continueTicket: Ticket;
}
