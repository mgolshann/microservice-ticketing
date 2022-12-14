import { requireAuth } from '@mgbg_tickets/common';
import express, { Request, Response } from 'express';

import { Order } from '../models/order';

const router = express.Router();

router.get('/api/orders', requireAuth, async (req: Request, res: Response) => {

    const orders = await Order.find({ 
        userId: req.currentuser?.id
    }).populate('ticket');


    res.send(orders)
});

export { router as indexOrderRouter }