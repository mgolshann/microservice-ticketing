const mongoose = require("mongoose");
import { app } from './app';
import { OrderCreatedListener } from './events/listener/order-created-listener';
import { OrderUpdatedListener } from './events/listener/order-updated-listener';
import { kafkaWrapper } from './kafka-wrapper'

// Connecting to mongodb 
const start = async () => {

    if (!process.env.JWT_TOKEN) throw new Error('JWY_TOKEN must be definded');
    if (!process.env.PORT) throw new Error('PORT must be definded');
    if (!process.env.MONGO_URI) throw new Error('MONGO_URI must be definded');
    if (!process.env.KAFKA_BOOTSTRAP_SERVERS) throw new Error('KAFKA_BOOTSTRAP_SERVERS must be definded');

 
    try {

        const kafkaConfig = {        
            clientId: `${process.env.CLIENT_ID}`,
            brokers: [`${process.env.KAFKA_BOOTSTRAP_SERVERS}`]
        };

        await kafkaWrapper.connect(kafkaConfig);

        // Listeners
        new OrderCreatedListener(kafkaWrapper.client).listen()
        new OrderUpdatedListener(kafkaWrapper.client).listen()
        
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