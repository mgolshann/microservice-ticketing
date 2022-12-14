import express, { Request, Response } from 'express';
import { BadRequestError, NotFoundError, OrderStatus, requireAuth, validateRequest } from '@mgbg_tickets/common';
import mongoose from 'mongoose';
import { body } from 'express-validator';

import { Ticket } from '../models/ticket';
import { Order } from '../models/order';
import { OrderCreatedPublisher } from '../events/publishers/order-created-publisher';
import { kafkaWrapper } from '../kafka-wrapper';

const router = express.Router();

const EXPIRATION_WINDOW_SECONDS = 60;


router.post(
    '/api/orders',
    requireAuth,
    [
        body('ticketId')
            .not()
            .isEmpty()
            // یک کاستوم ولیدیشن ایجاد کردیم و گفتیم آیدی تیکتی که ارسال میشه 
            // حتما باید با ساختار مونگو مطابقت داشته باشه
            .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
            .withMessage("TicketId must be provided !!")
    ],
    validateRequest,
    async (req: Request, res: Response) => {


        const { ticketId } = req.body;
        
        console.log('ticketID: ', { ticketId })
        // Find the ticket the user is trying to order in the database
        const ticket = await Ticket.findById(ticketId);
        if (!ticket) throw new NotFoundError();
        
        // Make sure that this ticket is not already reserved
        // Run query to look at all orders. Find an order where the ticket
        // is the ticket we just found *and* the orders status is *not* cancelled.
        const isReserved = await ticket.isReserved();
        if (isReserved) throw new BadRequestError('Ticket is already reserved')


        // Calculate an expiration date for this order
        const expiration = new Date();
        expiration.setSeconds(expiration.getSeconds() + EXPIRATION_WINDOW_SECONDS);

        // Build the order and save it to the database
        const order = Order.build({
            userId: req.currentuser!.id,
            status: OrderStatus.Created,
            expiresAt: expiration,
            ticket
        });
        await order.save()

        // Publish an event saying that an order was created
        await new OrderCreatedPublisher(kafkaWrapper.client).publish({
            id: order.id,
            version: order.version,
            userId: order.userId,
            status: order.status,
            // اینجا چون میخوام از طریق کافکا ارسال کنیم تایم به رشته تبدیل میکنیم
            expiresAt: order.expiresAt.toISOString(),
            ticket: {
                id: ticket.id,
                price: ticket.price
            }
        });

        res.status(201).send(order)
    });

export { router as newOrderRouter }

