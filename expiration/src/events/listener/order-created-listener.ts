import { Listener, OrderCreatedEvent, Topics } from "@mgbg_tickets/common";
import { queueGroupName } from '../queue-group-name';
import { expirationQueue } from "../../queues/expiration-queue";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
   
    topic: Topics.OrderCreated = Topics.OrderCreated;
    groupId = queueGroupName;
   
    async onMessage(data: any) {
   
        const delay = new Date(data.expiresAt).getTime() - new Date().getTime();
        console.log('waiting this many milliseconds to process the job:', delay)
        
        await expirationQueue.add({
            orderId: data.id
        },{
            delay
        }) 
    }
}