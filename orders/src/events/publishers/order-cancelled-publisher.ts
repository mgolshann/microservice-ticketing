import { Publisher, Topics, OrderCancelledEvent } from '@mgbg_tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    topic: Topics.OrderCancelled = Topics.OrderCancelled;
}