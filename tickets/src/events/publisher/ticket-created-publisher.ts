import { Publisher, Topics, TicketCreatedEvent } from "@mgbg_tickets/common"

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  topic: Topics.TicketCreated = Topics.TicketCreated
}
