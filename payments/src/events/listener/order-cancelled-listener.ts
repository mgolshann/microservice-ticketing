import { NotFoundError, OrderCancelledEvent, OrderStatus, Topics, Listener } from "@mgbg_tickets/common";
import { Order } from "../../models/order";
import { OrderCancelledGroup } from '../queue-group-name';

export class OrderCancelledListener extends Listener<OrderCancelledEvent>{
    topic: Topics.OrderCancelled = Topics.OrderCancelled;
    groupId = OrderCancelledGroup;

    async onMessage(data: any) {
        console.log('OrderCancelledListener:', data);

        const order = await Order.findById(data.id);
        if(!order) throw new NotFoundError();

        order.set({
            status: OrderStatus.Cancelled
        });
        await order.save();
 
    }
}