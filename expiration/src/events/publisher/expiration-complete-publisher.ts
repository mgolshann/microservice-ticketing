import { ExpirationCompleteEvent, Publisher, Topics } from "@mgbg_tickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    topic: Topics.ExpirationComplete = Topics.ExpirationComplete;
}