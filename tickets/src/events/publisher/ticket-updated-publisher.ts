import { Publisher, Topics, TicketUpdatedEvent } from "@mgbg_tickets/common"

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    topic: Topics.TicketUpdated = Topics.TicketUpdated;
}