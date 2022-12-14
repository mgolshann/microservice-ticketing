import request from 'supertest';
import { app } from '../../app';
import { kafkaWrapper } from '../../kafka-wrapper';
import { Ticket } from '../../models/ticket';
import { insertTicket } from '../../test/helper';


// We have a route in app.ts that if any request come to our app
// And our app can't recognize it, it would throw error of 404
// So in this test if we not get 404 for /api/tickets that mean we have
// A route handler listenin to it

it('has a route handler listening to /api/tickets for post requests', async () => {
    const response = await request(app)
        .post('/api/tickets')
        .send({})
    
    expect(response.status).not.toEqual(404)
});

it('can only be accessed if the user is signed in', async () => {
    await request(app)
        .post('/api/tickets')
        .send({})
        .expect(401)
});

// for this test we need to somehow sign in
// so we build a global function in test/setup.ts as signin
// to authenticate our test whenever we want
it('returns a status other than 401 if the user is sign in', async () => {
    const response = await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({})

    expect(response.status).not.toEqual(401)
});

it('returns an error if an invalid title is provided', async () => {
    await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({
            title: '',
            price: 13
        })
        .expect(400)

    await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({
            price: 13
        })
        .expect(400)
});

it('returns an error if an invalid price is provided', async () => {
    
    await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({
            title: 'sfsdfsdf',
            price: -13
        })
        .expect(400)

    await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({
            title: 'sdfsdfs'
        })
        .expect(400)
});

it('creates a ticket with valid inputs', async () => {
    
    // First we have to make sure a ticket was saved
    // beforeAll we delete all collection 
    let tickets = await Ticket.find({});
    expect(tickets.length).toEqual(0);

    // Insert value into tickets model
    await insertTicket({ title: 'test 1', price: 10 })
    await insertTicket({ title: 'test 2', price: 20 })
    await insertTicket({ title: 'test 3', price: 30 })

    tickets = await Ticket.find({});
    expect(tickets.length).toEqual(3);
    expect(tickets[0].price).toEqual(10);
    expect(tickets[0].title).toEqual('test 1');
    expect(tickets[2].price).toEqual(30);
    expect(tickets[2].title).toEqual('test 3');
    
});

it('publishs an event', async () => {
    const title = 'ticket 1';

    await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({
            title,
            price: 200
        })
  

    const producer = kafkaWrapper.client.producer();
    await producer.connect();
    expect(producer.send).toHaveBeenCalled();

})

