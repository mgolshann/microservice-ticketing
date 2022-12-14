import { Ticket } from '../ticket';

it('implements optimistic concurrency control', async () => {

    // Create an instance of a ticket
    const ticket = Ticket.build({
        userId: '123',
        title: 'concert',
        price: 2000
    });
    
    // Save the ticket to the Database
    await ticket.save()

    // fetch two ticket twice
    const firstInstance = await Ticket.findById(ticket.id);
    const secondInstance = await Ticket.findById(ticket.id);

    // make two seperate change to the tickets we fetched
    firstInstance!.set({ price: 10 });
    secondInstance!.set({ price: 15 });
    
    // save the first ticket
    await firstInstance!.save();

    // save the second fetched ticket
    // by running this line of code we except to have error because version stuff
    // so we put it in a try catch to handle the error

    // approach 1 :
    // expect(async () => {
    //     await secondInstance!.save();
    // }).toThrow();

    // approach 2 :
    try {
        await secondInstance!.save();
    } catch (err) {
        return;
    }

    throw new Error('Should not reach this point')

});

it('increaments the version number on multiple saves', async () => {
    
    // Create an instance of a ticket
    const ticket = Ticket.build({
        userId: '123',
        title: 'concert',
        price: 2000
    });

    await ticket.save();
    expect(ticket.version).toEqual(0)

    await ticket.save();
    expect(ticket.version).toEqual(1)

    await ticket.save();
    expect(ticket.version).toEqual(2)


});