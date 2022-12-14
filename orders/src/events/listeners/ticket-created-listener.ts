import {  Listener, Topics, TicketCreatedEvent } from "@mgbg_tickets/common";

import { Ticket } from "../../models/ticket";
import { queueGroupNameCreated } from '../queue-group-name';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
    
    topic: Topics.TicketCreated = Topics.TicketCreated;
    groupId: string = queueGroupNameCreated;

    async onMessage(data: any) {
      
        
        console.log("TicketCreatedListener: ", data);

        const { id, title, price } = data;  

        // موضوعی که باید اینجا توجه داشته اینکه آیدی سروریس تیکت با آیدی سرویس اوردر باید یکی باشن
        // واسه همین ما آدیدی که داره از سرویس تیکتمون میاد رو میدیم به سرویس اوردر که اون زمانی که میخاد
        // رکورد رو ایجاد کنه بیاد و مقدار آیدیی که از تیکت اومده رو ذخیره کنه که به این روش
        // ما برای تیکتمون آیدیهای متفاوت نداشته باشیم
        

        // الان ایجا فیلد دیتا حاوی مقادیر تیکت هست که توش آیدی هم قرار گرفته
        // ما اون آیدی رو میدیم به تیکتمون و انتظار داریم از همون آیدی برای ساخت تیکت جدید استفاده کنه
        // Ticket.id === Order.Ticket.id

        const ticket = Ticket.build({
            id, title, price
        });

        await ticket.save();
    }
}