import { NotAuthorizedError, NotFoundError, requireAuth, validateRequest } from '@mgbg_tickets/common';
import express, { Request, Response } from 'express';

import { param } from 'express-validator';
import mongoose from 'mongoose';
import { Order } from '../models/order';

const router = express.Router();

router.get('/api/orders/:orderId',
        requireAuth, 
        [
            param('orderId')
                .not()
                .isEmpty()
                .custom((input) => mongoose.Types.ObjectId.isValid(input))
                .withMessage('Order ID must be provided !!')
        ],
        validateRequest, 
        async (req: Request, res: Response) => {

            console.log('=========>')
    const order = await Order.findById(req.params.orderId).populate('ticket');
    
    if (!order) throw new NotFoundError()
    if (order.userId !== req.currentuser!.id) throw new NotAuthorizedError()

    res.send(order)
});

export { router as showOrderRouter }