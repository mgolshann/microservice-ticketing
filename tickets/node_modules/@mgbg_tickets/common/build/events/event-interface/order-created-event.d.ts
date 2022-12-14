import { Topics } from '../topics';
import { OrderStatus } from '../types/order-status';
export interface OrderCreatedEvent {
    topic: Topics.OrderCreated;
    data: {
        id: string;
        version: number;
        userId: string;
        status: OrderStatus;
        expiresAt: string;
        ticket: {
            id: string;
            price: number;
        };
    };
}
