import { TicketCreatedListener } from '../ticket-created-listener';
import { kafkaWrapper } from '../../../kafka-wrapper';
import mongoose from 'mongoose';
import { Ticket } from '../../../models/ticket';

it('dfgdfg', () => {
    
})

// const setup = async () => {
//     // Create an instance of listener
//     const listener = new TicketCreatedListener(kafkaWrapper.client)

//     // Create a fake data event
//     const data: any = {
//         id: new mongoose.Types.ObjectId().toString(),
//         version: 0,
//         title: 'Concert',
//         price: 10,
//         userId: new mongoose.Types.ObjectId().toString(),
//     }

//     // Create a fake message object


//     return { listener, data };

// }

// it('create and saves a ticket', async() => {
    
//     const { listener, data } = await setup();

//     // Call the onMessage function with data
//     await listener.onMessage(data);

//     // Write a assertion to make sure a ticket was created!
//     const ticket = await Ticket.findById(data.id);
    
//     expect(ticket).toBeDefined();
//     expect(ticket!.title).toEqual(data.title);
//     expect(ticket!.price).toEqual(data.price);

// });

// it.todo('aks the message', async() => {
    
//     // Create an instance of listener


//     // Create a fake data event


//     // Create a fake message object


//     // Call the onMessage function with data


//     // Write a assertion to make sure a ticket was created!

// });