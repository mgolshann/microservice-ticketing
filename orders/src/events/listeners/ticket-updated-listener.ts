import { Listener, NotFoundError, TicketUpdatedEvent, Topics } from "@mgbg_tickets/common";
import { Ticket } from "../../models/ticket";
import { queueGroupNameUpdated } from '../queue-group-name';

export class TicketUpdatedListener extends Listener<TicketUpdatedEvent> {
    
    topic: Topics.TicketUpdated = Topics.TicketUpdated;
    groupId = queueGroupNameUpdated;

    async onMessage(data: any) {
        
        console.log("TicketUpdatedListener: ", data);
        
        const { id, version, title, price } = data;

        const ticket = await Ticket.findByIdAndEvent({ id, version });
        if (!ticket) throw new NotFoundError();
    
        ticket.set({ title, price, version });
        await ticket.save();
        
    }
}