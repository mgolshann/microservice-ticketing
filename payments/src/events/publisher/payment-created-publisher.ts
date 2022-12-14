import { PaymentCreatedEvent, Publisher, Topics } from "@mgbg_tickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent>{
    topic: Topics.PaymentCreated = Topics.PaymentCreated;
}