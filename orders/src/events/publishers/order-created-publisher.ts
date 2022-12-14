import { Publisher, Topics, OrderCreatedEvent } from "@mgbg_tickets/common"

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    topic: Topics.OrderCreated = Topics.OrderCreated;
}

