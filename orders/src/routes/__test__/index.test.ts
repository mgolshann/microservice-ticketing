import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';
import { Ticket } from '../../models/ticket';

/*
نکته مهم
این تست با خطا مواجه میشه
چون ما برای 
global.signin
هر بار با یک کردنشیال لاگین میکنیم و تو این بخش باید کردنشیالهای مختلف برای دو تا کاربر داشته باشیم

    const userOne = global.signin();
    const userTwo = global.signin();

    تو فایل تنظیمات تستمون که تابع ساین این رو در نظر گرفتیم . از یک کردنشیال ثابت استفاده کردیم
    در صورتیکه باید به ازای هر کاربر متفاوت باشه

    والی این صفحه هیچ مشکلی نداره
*/


const buildTicket = async () => {

    const ticket = Ticket.build({
        id: new mongoose.Types.ObjectId().toHexString(),
        title: 'Concert',
        price: 200
    });
    await ticket.save();

    return ticket;
}


it('fetches orders for a particular user', async () => {
    // create three Tickets
    const ticketOne = await buildTicket();
    const ticketTwo = await buildTicket();
    const ticketThree = await buildTicket();

    // sign in with two different User
    const userOne = global.signin();
    const userTwo = global.signin();

    // Create one order as User 1
    await request(app)
        .post('/api/orders')
        .set('Cookie', userOne)
        .send({ ticketId: ticketOne.id })
        .expect(201)

    // Create two orders as User 2
    const { body: orderOne } = await request(app)
        .post('/api/orders')
        .set('Cookie', userTwo)
        .send({ ticketId: ticketTwo.id })
        .expect(201)

    const { body: orderTwo } = await request(app)
        .post('/api/orders')
        .set('Cookie', userTwo)
        .send({ ticketId: ticketThree.id })
        .expect(201)

    // Make request to get orders for User 2
    const response = await request(app)
        .get('/api/orders')
        .set('Cookie', userTwo)
        .expect(200)

    // console.log(response.body)

    expect(response.body.length).toEqual(2);
    expect(response.body[0].id).toEqual(orderOne.id);
    expect(response.body[1].id).toEqual(orderTwo.id);
    expect(response.body[0].ticket.id).toEqual(ticketTwo.id);
    expect(response.body[1].ticket.id).toEqual(ticketThree.id);

})