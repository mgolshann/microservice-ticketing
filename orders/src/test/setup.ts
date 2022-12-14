import { MongoMemoryServer } from 'mongodb-memory-server';

const mongoose = require("mongoose");
import jwt from 'jsonwebtoken';

declare global {
    // We have promise here because of signup function that use async/await
    function signin(): string[];
    var email: string;
    var password: string;
}

global.email = 'mahsa1@yahoo.com';
global.password = '123456';



let mongo: any;
beforeAll(async () => {
    
    process.env.JWT_TOKEN = 'asdf';

    mongo = await MongoMemoryServer.create();
    const mongoUri = await mongo.getUri();

    await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    
});

// Delete all collections before each test
beforeEach(async () => {
    const collections = await mongoose.connection.db.collections();

    for (let collection of collections) {
        await collection.deleteMany({});
    }
});

// Close connection after finishing all test
afterAll(async () => {
    await mongo.stop();
    await mongoose.connection.close();
});


global.signin = () => {
    // Build a JWT payload.  { id, email }
    // we need random id for checking previous user
    // authorized to access a route or not
    const payload = {
        id: new mongoose.Types.ObjectId().toHexString(),
        email: 'mahsa@yahoo.com',
    };

    // Create the JWT!
    const token = jwt.sign(payload, process.env.JWT_TOKEN!);

    // Build session Object. { jwt: MY_JWT }
    const session = { jwt: token };

    // Turn that session into JSON
    const sessionJSON = JSON.stringify(session);

    // Take JSON and encode it as base64
    const base64 = Buffer.from(sessionJSON).toString('base64');

    // return a string thats the cookie with the encoded data
    // Return a string has the cookie with the encoded data
    // The expectation when we use supertest is include all of 
    // different cookies in array so we have to use [] at the end
    
    return [`session=${base64}`]
    // return [
    //     'session=eyJqd3QiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJall6TkdRME5ETXdZelV3WkdKbVpXWXdNelZqWXpRNVlpSXNJbVZ0WVdsc0lqb2liV0ZvYzJFeFFIbGhhRzl2TG1OdmJTSXNJbWxoZENJNk1UWTJOalF6TXpZek0zMC5meEJNclpkZUZSVDJ3b0d6WU5YN2Nwb3IybktzM1VZVUQzMTRUcWUyOUgwIn0=; path=/; expires=Fri, 17 Jun 2022 09:03:16 GMT',
    //     'session.sig=P6YxNqt6k07gz74QtxDSdJrqSsk; path=/; expires=Fri, 17 Jun 2022 09:03:16 GMT'
    // ];
};
