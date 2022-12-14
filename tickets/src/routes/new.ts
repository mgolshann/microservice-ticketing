import express, { Request, Response} from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@mgbg_tickets/common';

import { Ticket } from '../models/ticket';

import { TicketCreatedPublisher } from '../events/publisher/ticket-created-publisher';
import { kafkaWrapper } from '../kafka-wrapper';

const router = express.Router();

router.post('/api/tickets', 
    requireAuth,
    [
        body('title').not().isEmpty().withMessage('email is provided!'),
        body('price').isFloat({ gt: 0 }).withMessage('price should be in correct type!!')
    ], 
    validateRequest,
    async (
        req: Request, 
        res: Response
    ) => {


        try {

            // req.currentuser is exist when the app is initilize in /app.ts
            // so we easily get the userId from req.currentuser.id
            // this is test
            const { title, price } = req.body;
            const ticket = Ticket.build({ 
                title, 
                price, 
                userId: req.currentuser!.id
            });
            
            await ticket.save();
            
            await new TicketCreatedPublisher(kafkaWrapper.client).publish({
                id: ticket.id,
                version: ticket.version,
                title: ticket.title,
                price: ticket.price,
                userId: ticket.userId
            });

            res.status(201).send(ticket);
        
        } catch (err) {
        
            console.log(err);
            return res.status(400).send({ message: err })
        
        }   
});

export { router as createTicketRouter }