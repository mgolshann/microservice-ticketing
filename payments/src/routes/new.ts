import { BadRequestError, currentuser, NotAuthorizedError, NotFoundError, OrderStatus, requireAuth, validateRequest } from '@mgbg_tickets/common';
import { body } from 'express-validator';
import express, { Request, Response } from 'express';
import { Order } from '../models/order';
import { stripe } from '../stripe';
import { Payment } from '../models/payment';
import { PaymentCreatedPublisher } from '../events/publisher/payment-created-publisher';
import { kafkaWrapper } from '../kafka-wrapper';

const router = express.Router();

router.post('/api/payments',
    requireAuth,
    [
        body('token')
            .not()
            .isEmpty(),
        body('orderId')
            .not()
            .isEmpty()
    ], 
    validateRequest,
    async (req: Request, res: Response) => {

        const { token, orderId } = req.body;

        // Make sure the order belongs to this user
        const order = await Order.findById(orderId);
        if (!order) throw new NotFoundError();
        if (order.userId !== req.currentuser?.id) throw new NotAuthorizedError();

        // 
        if (order.status === OrderStatus.Cancelled) throw new BadRequestError('Cannot pay for an cancelled order');

        const charge = await stripe.charges.create({
            currency: 'usd',
            amount: order.price * 100,
            source: token
        });
        
        const payment = Payment.build({
            orderId,
            stripeId: charge.id
        });
        await payment.save();

        // برای این از اویت استفاده نکردیم که سریع به ما کد ۲۰۱ رو برگردونه
        new PaymentCreatedPublisher(kafkaWrapper.client).publish({
            id: payment.id,
            orderId: payment.orderId,
            stripeId: payment.stripeId
        });

        res.status(201).send({ id: payment.id })
});

export { router as createChargeRouter }