import { OrderStatus } from '@mgbg_tickets/common';
import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../app';

import { Ticket } from '../../models/ticket';
import { Order } from '../../models/order';

it('return 204 if updating OrderStatus to Cancelled', async () => {
    
    // Creating a new Ticket
    const ticket = Ticket.build({
        id: new mongoose.Types.ObjectId().toHexString(),
        title: 'concert',
        price: 20000
    });
    await ticket.save();

    // Sign as a same User
    const user = global.signin();

    // Creaing a new Order
    const { body: order } = await request(app)
        .post('/api/orders')
        .set('Cookie', user)
        .send({
            ticketId: ticket.id
        })
        .expect(201)

    // Updating OrderStatus to Cancelled
    const { body: deleteOrder } = await request(app)
        .delete(`/api/orders/${order.id}`)
        .set('Cookie', user)
        .send()
        .expect(204)

    // Expectation to make sure the thing is cancelled
    // 1)
    const updatedOrder = await Order.findById(order.id)
    expect(updatedOrder!.status).toEqual(OrderStatus.Cancelled)

    // 2)
    expect(deleteOrder.status).toEqual(OrderStatus.Cancelled)
});

it.todo('emit a order cancelled event', async () => {

})