import { NotAuthorizedError, NotFoundError, OrderStatus, requireAuth, validateRequest } from '@mgbg_tickets/common';
import express, { Request, Response } from 'express';
import { param } from 'express-validator';
import mongoose from 'mongoose';
import { OrderCancelledPublisher } from '../events/publishers/order-cancelled-publisher';
import { kafkaWrapper } from '../kafka-wrapper';
import { Order } from '../models/order';

const router = express.Router();

/*
ما اینجا نمیایم و رکورد اوردر رو حذف کنیم بلکه استیتش رو میبریم تو حالت کنسل

*/

router.delete('/api/orders/:orderId', 
    requireAuth,
    [
        param('orderId')
            .not()
            .isEmpty()
            .custom((input) => mongoose.Types.ObjectId.isValid(input))
            .withMessage('Order Id must be provided')
    ],
    validateRequest,
    async (req: Request, res: Response) => {

    // Find the Order
    const order = await Order.findById(req.params.orderId).populate('ticket');;

    // Check user is Authorized
    if (!order) throw new NotFoundError();
    if (order.userId !== req.currentuser!.id) throw new NotAuthorizedError()

    // Update the property
    order.status = OrderStatus.Cancelled;

    // Save it to DB
    await order.save();

    // TODO: publishing an event saying this was cancelled
    await new OrderCancelledPublisher(kafkaWrapper.client).publish({
        id: order.id,
        version: order.version,
        ticket: {
            id: order.ticket.id
        }
    }) 

    res.status(204).send(order)
});

export { router as deleteOrderRouter }