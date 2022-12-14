import { Topics } from '../topics'

export interface TicketUpdatedEvent {
    topic: Topics;
    data: {
        id: string,
        version: number,
        title: string,
        price: number,
        userId: string,
        orderId?: string
    }
}