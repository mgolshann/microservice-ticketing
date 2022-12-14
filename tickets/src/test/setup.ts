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

jest.mock('../kafka-wrapper')

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

     //return [`session=eyJqd3QiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJall6TlRSa1pXVmtaV05pTXpNNE1qUTRNREV4WmpOa055SXNJbVZ0WVdsc0lqb2liV0ZvYzJGQWVXRm9iMjh1WTI5dElpd2lhV0YwSWpveE5qWTJOVEEzTWpJMGZRLnNIM1p6QVVMMmtLUl9hMmcyQk9ELUdtWGxHZ0Vnc3NZUFpMUzBQc3h5VUUifQ==`]
 
     // eyJqd3QiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJall6TlRSa1pXVmtaV05pTXpNNE1qUTRNREV4WmpOa055SXNJbVZ0WVdsc0lqb2liV0ZvYzJGQWVXRm9iMjh1WTI5dElpd2lhV0YwSWpveE5qWTJOVEEzTWpJMGZRLnNIM1p6QVVMMmtLUl9hMmcyQk9ELUdtWGxHZ0Vnc3NZUFpMUzBQc3h5VUUifQ==

}