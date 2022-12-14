import { Listener, NotFoundError, OrderCancelledEvent, Topics } from "@mgbg_tickets/common"
import { Ticket } from "../../models/ticket";
import { TicketUpdatedPublisher } from "../publisher/ticket-updated-publisher";
import { queueGroupName } from '../queue-group-name';


export class OrderUpdatedListener extends Listener<OrderCancelledEvent> {
    
    topic: Topics.OrderCancelled = Topics.OrderCancelled;
    groupId = queueGroupName;

    async onMessage(data: any) {

        console.log("OrderUpdatedListener: ", data);

        const ticket = await Ticket.findById(data.ticket.id);
        if (!ticket) throw new NotFoundError();

        ticket.set({ orderId:  undefined });
        await ticket.save()

        // این قسمت از کد صرفا برای ورژن زدن هست
        // از اونجا که عملیات بالا منجر به این میشه که یه ورژن به تیکت بخوره
        // پس برای اینکه یکپارچگی داده بین تیکت و اوردر از بین نره
        // بیام و از کد زیر استفاده کنیم که ورژن بندی بین تو تا سرویسمون بهم نخوره
        new TicketUpdatedPublisher(this.client).publish({
                id: ticket.id,
                version: ticket.version,
                title: ticket.title,
                price: ticket.price,
                userId: ticket.userId,
                orderId: ticket.orderId
        })

    }

}