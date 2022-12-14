const mongoose = require("mongoose");
import { app } from './app';
import { kafkaWrapper } from './kafka-wrapper'

import { TicketCreatedListener } from './events/listeners/ticket-created-listener';
import { TicketUpdatedListener } from './events/listeners/ticket-updated-listener';
import { ExpirationCompleteListener } from './events/listeners/expiration-complete-listener';
import { PaymentCreatedListener } from './events/listeners/payment-created-listener';

// Connecting to mongodb 
const start = async () => {

    if (!process.env.JWT_TOKEN) throw new Error('JWY_TOKEN must be definded');
    if (!process.env.PORT) throw new Error('PORT must be definded');
    if (!process.env.MONGO_URI) throw new Error('MONGO_URI must be definded');
    if (!process.env.KAFKA_BOOTSTRAP_SERVERS) throw new Error('KAFKA_BOOTSTRAP_SERVERS must be definded');

    try {

        const kafkaConfig = {        
            clientId: `${process.env.CLIENT_ID}`,
            brokers: [`${process.env.KAFKA_BOOTSTRAP_SERVERS}`],
            requestTimeout: 3000,
            connectionTimeout: 6000,
            ssl: false
        };
        await kafkaWrapper.connect(kafkaConfig);

        // Listeners
        new TicketCreatedListener(kafkaWrapper.client).listen()
        new TicketUpdatedListener(kafkaWrapper.client).listen()
        new ExpirationCompleteListener(kafkaWrapper.client).listen()
        new PaymentCreatedListener(kafkaWrapper.client).listen()

        await mongoose.connect(`mongodb://${process.env.MONGO_URI}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

    } catch (err) {
        console.error(err)
    }
    
    app.listen(process.env.PORT, () => { 
        console.log(`Listening on port ${process.env.PORT} ...`) 
    });
}

start();