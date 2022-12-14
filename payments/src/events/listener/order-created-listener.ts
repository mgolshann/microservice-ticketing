import { OrderCreatedEvent, Topics, Listener, OrderStatus } from "@mgbg_tickets/common";
import { Order } from "../../models/order";
import { OrderCreatedGroup } from "../queue-group-name";

export class OrderCreatedListener extends Listener<OrderCreatedEvent>{
    topic: Topics.OrderCreated = Topics.OrderCreated;
    groupId = OrderCreatedGroup;

    async onMessage(data: any) {
        console.log('OrderCreated:', data);
        
        const order = Order.build({
            id: data.id,
            userId: data.userId,
            price: data.ticket.price,
            status: OrderStatus.Created,
            version: data.version
        });
        await order.save();

    }
}