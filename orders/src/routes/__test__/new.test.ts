import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../app';

import { Ticket } from '../../models/ticket';
import { Order, OrderStatus } from '../../models/order';

import { kafkaWrapper } from '../../kafka-wrapper';


jest.mock('../../kafka-wrapper')


it('returns 404 if the ticket does not exist', async () => {

    const ticketId = new mongoose.Types.ObjectId().toHexString();
    
    await request(app)
        .post('/api/orders')
        .set('Cookie', global.signin())
        .send({
            ticketId
        })
        .expect(404)

});

it('returns 400 if the ticket has already been reserved', async () => {
    
    const ticket = Ticket.build({
        id: new mongoose.Types.ObjectId().toHexString(),
        title: 'ticket 1',
        price: 1000
    });
    await ticket.save();

    const order = Order.build({
        ticket,
        userId: 'fdfgeerter',
        status: OrderStatus.Created,
        expiresAt: new Date()
    });
    await order.save();

    await request(app)
        .post('/api/orders')
        .set('Cookie', global.signin())
        .send({
            ticketId: ticket.id
        })
        .expect(400)

});

it('reserve a ticket', async () => {

    const ticket = Ticket.build({
        id: new mongoose.Types.ObjectId().toHexString(),
        title: 'ticket 1',
        price: 1000
    });
    await ticket.save();

    await request(app)
        .post('/api/orders')
        .set('Cookie', global.signin())
        .send({
            ticketId: ticket.id
        })
        .expect(201)

});

// it('emit an order created event', async () => {

//     const ticket = Ticket.build({
//         id: new mongoose.Types.ObjectId().toHexString(),
//         title: 'ticket 1',
//         price: 1000
//     });
//     await ticket.save();


//     await request(app)
//         .post('/api/orders')
//         .set('Cookie', global.signin())
//         .send({
//             ticketId: ticket.id
//         })

//     const kafka = kafkaWrapper.client;
//     expect(kafka.producer.send).toHaveBeenCalled();
    
// });

