import express ,{ Request, Response } from 'express';
import { Ticket } from '../models/ticket';
import { NotFoundError, NotAuthorizedError, requireAuth, validateRequest, BadRequestError }  from '@mgbg_tickets/common';
import { body } from 'express-validator';

import { TicketUpdatedPublisher } from '../events/publisher/ticket-updated-publisher';
import { kafkaWrapper } from '../kafka-wrapper'
// import { TicketCreatedPublisher } from '../kafka/publisher/ticket-created-publisher';

const router = express.Router();

router.put('/api/tickets/:id', 
requireAuth,
[
    body('title').not().isEmpty().withMessage('Title must be provided!'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be provided and greater than 0')
],
validateRequest,
async (req: Request, res: Response) => {

    const ticket = await Ticket.findById(req.params.id);
    
    if (!ticket){
        throw new NotFoundError();
    }

    // Check if own ticket
    if (ticket.userId !== req.currentuser!.id ) {
        throw new NotAuthorizedError()
    }

    // اگر تیکی در حالت رزر باشه حتما یک اوردرآی دی میگره و به این معنیه که
    // این تیکت رزرو شده و شما نمیتونی تغییرش بدی تا زمانی که از حالت رزرو خارج بشه
    if (ticket.orderId) throw new BadRequestError('Cannot edit a reserved ticket !')

    // Update ticket to the mongoDB
    ticket.set({
        title: req.body.title,
        price: req.body.price
    });

    try {
        await ticket.save();
    
        // Publishing ticket to the Kafka Broker   
        await new TicketUpdatedPublisher(kafkaWrapper.client).publish({
            id: ticket.id,
            version: ticket.version,
            title: ticket.title,
            price: ticket.price,
            userId: ticket.userId
        });


        res.send(ticket)

    } catch (error) {
        res.send(error)
    }


});

export { router as updateTicketRouter }