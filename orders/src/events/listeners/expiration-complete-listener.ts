import { ExpirationCompleteEvent, Listener, NotFoundError, OrderStatus, Topics } from "@mgbg_tickets/common";
import { Order } from "../../models/order";
import { OrderCancelledPublisher } from "../publishers/order-cancelled-publisher";
import { queueGroupNameExpiration } from '../queue-group-name';

export class ExpirationCompleteListener extends Listener<ExpirationCompleteEvent> {
    
    topic: Topics.ExpirationComplete = Topics.ExpirationComplete;
    groupId = queueGroupNameExpiration;

    async onMessage(data: any) {
        console.log('ExpirationComplete:', data);

        const order = await Order.findById(data.orderId).populate('ticket');
        if(!order) throw new NotFoundError();

        /*
        قبل از اینکه رکورد رو ببریم رو حالت کنسل باید چک کنیم که احیانا این اوردر 
        قبلا کامل یا کامپلیت نشده باشه
        */
        if (order.status === OrderStatus.Compelete) {
            return ;
        }  

        order.set({
            status: OrderStatus.Cancelled
        });
        await order.save();

        // Publish Order Cancelled
        await new OrderCancelledPublisher(this.client).publish({
            id: order.id,
            version: order.version,
            ticket: {
                id: order.ticket.id
            }
        });

    }
}