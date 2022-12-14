import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../app';
import { Ticket } from '../../models/ticket';

it('returns 401 if not authorized', async () => {
    const orderId = new mongoose.Types.ObjectId().toHexString()
    const response = await request(app)
        .get(`/api/orders/${orderId}`)
        .send({})
        .expect(401)

    // console.log(response.body)
});


it('returns 400 if orderId is not acceptable', async () => {
    const orderId = '34345jh3tkjqh4';

    await request(app)
        .get(`/api/orders/${orderId}`)
        .set('Cookie', global.signin())
        .send({})
        .expect(400)
})


it('returns 404 if not fount orderId', async () => {

    const orderId = new mongoose.mongo.ObjectId().toHexString();
    
    await request(app)
        .get(`/api/orders/${orderId}`)
        .set('Cookie', global.signin())
        .send({})
        .expect(404)
});


it('returns 401 *Authorized* if the userId in order is not \
            the same as requested user ', async () => {

    // Create a new Ticket
    const ticket = Ticket.build({
        id: new mongoose.Types.ObjectId().toHexString(),
        title: 'concert',
        price: 2000
    });
    await ticket.save();

    // Sign in 
    const userOne = global.signin();

    // Create a new Order with the Ticket above
    const { body: order } = await request(app)
        .post('/api/orders')
        .set('Cookie', userOne)
        .send({
            ticketId: ticket.id
        })

    // Sign in with other User
    const userTwo = global.signin();

    // Fetching above Order
    await request(app)
        .get(`/api/orders/${order.id}`)
        .set('Cookie', userTwo)
        .send({})
        .expect(401)

});



it('returns 401 *Authorized* if the userId in order is not \
            the same as requested user ', async () => {

    // Create a new Ticket
    const ticket = Ticket.build({
        id: new mongoose.Types.ObjectId().toHexString(),
        title: 'concert',
        price: 2000
    });
    await ticket.save();

    // Sign in 
    const user = global.signin();

    // Create a new Order with the Ticket above
    const { body: order } = await request(app)
        .post('/api/orders')
        .set('Cookie', user)
        .send({ 
            ticketId: ticket.id
        })

    // Fetching above Order
    const { body: fetchOrder } = await request(app)
        .get(`/api/orders/${order.id}`)
        .set('Cookie', user)
        .send({})
        .expect(200)


    expect(fetchOrder.id).toEqual(order.id)
});



